# Portfolio Backend

FastAPI backend service for the portfolio application.

## Database Setup

This backend uses PostgreSQL as the primary database. You have two options:

### Option 1: Use PostgreSQL (Recommended for Production)

1. **Install PostgreSQL**:
   ```bash
   # macOS
   brew install postgresql
   brew services start postgresql
   
   # Ubuntu/Debian
   sudo apt-get install postgresql postgresql-contrib
   sudo systemctl start postgresql
   ```

2. **Create Database and User**:
   ```bash
   sudo -u postgres psql
   ```
   ```sql
   CREATE DATABASE portfolio_db;
   CREATE USER portfolio_user WITH PASSWORD 'portfolio_pass';
   GRANT ALL PRIVILEGES ON DATABASE portfolio_db TO portfolio_user;
   \q
   ```

3. **Run Migrations**:
   ```bash
   source venv/bin/activate
   alembic upgrade head
   ```

### Option 2: Use SQLite for Development

If you prefer SQLite for development, update the `.env` file:

```env
DATABASE_URL=sqlite+aiosqlite:///./portfolio.db
```

## Running the Backend

1. **Install Dependencies**:
   ```bash
   cd backend
   python3 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```

2. **Start the Server**:
   ```bash
   source venv/bin/activate
   python start.py
   ```

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get contact messages
- `GET /api/resume/download` - Download resume
- `GET /api/health` - Health check

## Project Structure

```
backend/
├── app/
│   ├── api/           # API routes
│   ├── core/          # Configuration
│   ├── crud/          # Database operations
│   ├── db/            # Database setup
│   ├── models/        # SQLAlchemy models
│   ├── schemas/       # Pydantic schemas
│   └── utils/         # Utilities
├── alembic/           # Database migrations
├── .env               # Environment variables
├── main.py            # FastAPI application
└── start.py           # Startup script
```