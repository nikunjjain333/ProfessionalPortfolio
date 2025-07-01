from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from sqlalchemy.ext.asyncio import AsyncSession
from database import get_db, engine, Base
from models import ContactMessage, User
from schemas import ContactMessageCreate, ContactMessage as ContactMessageSchema, MessageResponse
import crud
import uvicorn
from contextlib import asynccontextmanager

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Create database tables
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield

app = FastAPI(
    title="Portfolio API",
    description="FastAPI backend for Nikunj Jain's portfolio website",
    version="1.0.0",
    lifespan=lifespan
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# API Routes
@app.post("/api/contact", response_model=MessageResponse)
async def create_contact_message(
    contact_data: ContactMessageCreate,
    db: AsyncSession = Depends(get_db)
):
    try:
        await crud.create_contact_message(db, contact_data)
        return MessageResponse(
            success=True,
            message="Message sent successfully! Thank you for reaching out."
        )
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to send message. Please try again later."
        )

@app.get("/api/contact", response_model=list[ContactMessageSchema])
async def get_contact_messages(
    skip: int = 0,
    limit: int = 100,
    db: AsyncSession = Depends(get_db)
):
    messages = await crud.get_contact_messages(db, skip=skip, limit=limit)
    return messages

@app.get("/api/resume/download")
async def download_resume():
    return MessageResponse(
        success=True,
        message="Resume download functionality will be implemented here"
    )

@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "message": "Portfolio API is running"}

# Serve static files (React build) - only if directory exists
import os
frontend_dist = "../frontend/dist"
if os.path.exists(frontend_dist):
    app.mount("/", StaticFiles(directory=frontend_dist, html=True), name="static")

if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True
    )