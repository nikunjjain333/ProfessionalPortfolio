from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine, async_sessionmaker
from sqlalchemy.orm import DeclarativeBase
from app.core.config import settings

# Get database URL from settings
DATABASE_URL = settings.database_url

if DATABASE_URL.startswith("postgresql://"):
    # Convert postgresql:// to postgresql+asyncpg:// for asyncpg
    DATABASE_URL = DATABASE_URL.replace("postgresql://", "postgresql+asyncpg://", 1)

# Remove any SSL parameters that might cause issues with asyncpg
if "?" in DATABASE_URL:
    base_url, params = DATABASE_URL.split("?", 1)
    # Filter out problematic SSL parameters
    filtered_params = []
    for param in params.split("&"):
        if not param.startswith("sslmode"):
            filtered_params.append(param)
    
    if filtered_params:
        DATABASE_URL = f"{base_url}?{'&'.join(filtered_params)}"
    else:
        DATABASE_URL = base_url

# Create async engine
engine = create_async_engine(DATABASE_URL, echo=settings.debug)

# Create async session maker
AsyncSessionLocal = async_sessionmaker(
    engine, 
    class_=AsyncSession, 
    expire_on_commit=False
)

class Base(DeclarativeBase):
    pass

# Dependency to get database session
async def get_db():
    async with AsyncSessionLocal() as session:
        try:
            yield session
            await session.commit()
        except Exception:
            await session.rollback()
            raise
        finally:
            await session.close()