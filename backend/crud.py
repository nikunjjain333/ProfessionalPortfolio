from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from models import ContactMessage, User
from schemas import ContactMessageCreate, UserCreate
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Contact Message CRUD operations
async def create_contact_message(db: AsyncSession, contact_data: ContactMessageCreate):
    db_contact = ContactMessage(**contact_data.dict())
    db.add(db_contact)
    await db.flush()
    await db.refresh(db_contact)
    return db_contact

async def get_contact_messages(db: AsyncSession, skip: int = 0, limit: int = 100):
    result = await db.execute(
        select(ContactMessage)
        .offset(skip)
        .limit(limit)
        .order_by(ContactMessage.created_at.desc())
    )
    return result.scalars().all()

# User CRUD operations
async def get_user_by_email(db: AsyncSession, email: str):
    result = await db.execute(select(User).where(User.email == email))
    return result.scalar_one_or_none()

async def get_user_by_username(db: AsyncSession, username: str):
    result = await db.execute(select(User).where(User.username == username))
    return result.scalar_one_or_none()

async def create_user(db: AsyncSession, user: UserCreate):
    hashed_password = pwd_context.hash(user.password)
    db_user = User(
        username=user.username,
        email=user.email,
        hashed_password=hashed_password
    )
    db.add(db_user)
    await db.flush()
    await db.refresh(db_user)
    return db_user

def verify_password(plain_password: str, hashed_password: str):
    return pwd_context.verify(plain_password, hashed_password)