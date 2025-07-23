from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.responses import FileResponse
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.database import get_db
from app.schemas.schemas import ContactMessageCreate, ContactMessage, MessageResponse
import app.crud.crud as crud
import os

router = APIRouter()

@router.post("/contact", response_model=MessageResponse)
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

@router.get("/contact", response_model=list[ContactMessage])
async def get_contact_messages(
    skip: int = 0,
    limit: int = 100,
    db: AsyncSession = Depends(get_db)
):
    messages = await crud.get_contact_messages(db, skip=skip, limit=limit)
    return messages

@router.get("/resume/download")
async def download_resume():
    resume_path = "../frontend/public/nikunjjain.pdf"
    
    if not os.path.exists(resume_path):
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Resume file not found"
        )
    
    return FileResponse(
        path=resume_path,
        filename="Nikunj_Jain_Resume.pdf",
        media_type="application/pdf"
    )

@router.get("/health")
async def health_check():
    return {"status": "healthy", "message": "Portfolio API is running"}