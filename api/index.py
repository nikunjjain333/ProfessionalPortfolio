from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import sys
import os

# Add backend to path
backend_path = os.path.join(os.path.dirname(__file__), '..', 'backend')
sys.path.append(backend_path)

from backend.app.api.routes import router as api_router

app = FastAPI(
    title="Portfolio API",
    description="FastAPI backend for Nikunj Jain's portfolio website",
    version="1.0.0"
)

# CORS middleware for Vercel
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Vercel domains
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API routes
app.include_router(api_router, prefix="/api")

@app.get("/")
def read_root():
    return {"message": "Portfolio API is running on Vercel"}

# Vercel handler
def handler(request):
    return app(request)