from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional

# Contact Message Schemas
class ContactMessageBase(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

class ContactMessageCreate(ContactMessageBase):
    pass

class ContactMessage(ContactMessageBase):
    id: int
    created_at: datetime
    
    class Config:
        from_attributes = True

# User Schemas
class UserBase(BaseModel):
    username: str
    email: EmailStr

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int
    created_at: datetime
    
    class Config:
        from_attributes = True

# Response Schemas
class MessageResponse(BaseModel):
    success: bool
    message: str