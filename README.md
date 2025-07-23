# Nikunj Jain's Portfolio

A full-stack portfolio application showcasing professional experience, projects, and skills in fintech and payment systems.

## Architecture

- **Frontend**: React with TypeScript, Tailwind CSS, built with Webpack
- **Backend**: FastAPI with SQLAlchemy, supports both SQLite and PostgreSQL
- **UI Components**: Radix UI components with custom styling

## Quick Start

### Prerequisites
- Python 3.11+
- Node.js 18+
- npm

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ProfessionalPortfolio
   ```

2. **Setup Backend**
   ```bash
   cd backend
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   cd ..
   ```

3. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   cd ..
   ```

### Running the Application

**🚀 Option 1: Start Everything (Recommended)**
```bash
./start.sh
```

**🔧 Option 2: Run Servers Individually**

Backend only:
```bash
cd backend && source venv/bin/activate && python start.py
```

Frontend only (in separate terminal):
```bash
cd frontend && npm run dev
```

### Stopping the Application

**🛑 Stop All Servers**
```bash
./stop.sh
```

This will gracefully stop both frontend and backend servers and clean up any lingering processes.

### Access Points

- **Portfolio Website**: http://localhost:3000
- **API Documentation**: http://localhost:8000/docs
- **Backend API**: http://localhost:8000

## Project Structure

```
ProfessionalPortfolio/
├── backend/                    # FastAPI backend
│   ├── venv/                  # Python virtual environment
│   ├── app/                   # Application code
│   │   ├── api/               # API routes
│   │   ├── core/              # Configuration
│   │   ├── crud/              # Database operations
│   │   ├── db/                # Database setup
│   │   ├── models/            # SQLAlchemy models
│   │   ├── schemas/           # Pydantic schemas
│   │   └── utils/             # Utilities
│   ├── alembic/               # Database migrations
│   ├── .env                   # Environment variables
│   ├── requirements.txt       # Python dependencies
│   ├── main.py                # FastAPI application
│   ├── start.py               # Backend startup script
│   └── README.md              # Backend documentation
├── frontend/                   # React frontend
│   ├── src/                   # Source code
│   │   ├── components/        # React components
│   │   │   ├── portfolio/     # Portfolio-specific components
│   │   │   └── ui/            # Reusable UI components
│   │   ├── pages/             # Page components
│   │   ├── hooks/             # Custom hooks
│   │   ├── lib/               # Utilities
│   │   ├── main.tsx           # Entry point
│   │   └── App.tsx            # Main app component
│   ├── package.json           # Node.js dependencies
│   ├── webpack.config.js      # Webpack configuration
│   ├── tailwind.config.js     # Tailwind CSS configuration
│   ├── tsconfig.json          # TypeScript configuration
│   └── index.html             # HTML template
├── attached_assets/           # Static assets (resumes, etc.)
├── start.sh                   # 🚀 Main startup script
├── stop.sh                    # 🛑 Stop script
└── README.md                  # This file
```

## Features

- **Responsive Design**: Optimized for all devices
- **Interactive UI**: Smooth animations and transitions
- **Contact Form**: Integrated with backend API
- **Project Showcase**: Dynamic project listings
- **Skills Timeline**: Professional experience timeline
- **Resume Download**: Downloadable resume functionality

## Database Configuration

The application supports both SQLite (development) and PostgreSQL (production).

### Current Setup (SQLite)
No additional setup required. The application uses SQLite by default with the database file located at `backend/portfolio.db`.

### PostgreSQL Setup (Optional)
To use PostgreSQL instead:

1. **Install PostgreSQL**:
   ```bash
   # macOS
   brew install postgresql
   brew services start postgresql
   
   # Ubuntu/Debian
   sudo apt-get install postgresql postgresql-contrib
   sudo systemctl start postgresql
   ```

2. **Create Database**:
   ```bash
   sudo -u postgres psql
   ```
   ```sql
   CREATE DATABASE portfolio_db;
   CREATE USER portfolio_user WITH PASSWORD 'portfolio_pass';
   GRANT ALL PRIVILEGES ON DATABASE portfolio_db TO portfolio_user;
   \q
   ```

3. **Update Configuration**:
   Edit `backend/.env`:
   ```env
   DATABASE_URL=postgresql+asyncpg://portfolio_user:portfolio_pass@localhost:5432/portfolio_db
   ```

## Development

### Backend Development
- FastAPI with automatic API documentation
- SQLAlchemy ORM with async support
- Modular app structure with separated concerns
- Alembic for database migrations
- Environment-based configuration

### Frontend Development
- React 18 with TypeScript
- Tailwind CSS for styling
- Webpack 5 for bundling
- Hot module replacement for development
- Radix UI component library

## Production Build

### Frontend Build
```bash
cd frontend
npm run build
```

The built files will be in `frontend/dist/` and can be served statically.

### Backend Production
The backend runs with Uvicorn and can be deployed to any Python hosting platform. Update the `.env` file with production database credentials.

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get contact messages (admin)
- `GET /api/resume/download` - Download resume
- `GET /api/health` - Health check endpoint
- `GET /docs` - API documentation (Swagger UI)

## Troubleshooting

### Common Issues

**Port Already in Use**
```bash
# Stop all servers first
./stop.sh
# Then restart
./start.sh
```

**Backend Import Errors**
```bash
cd backend
source venv/bin/activate
pip install -r requirements.txt
```

**Frontend Build Errors**
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
```

**Database Issues**
```bash
# Reset SQLite database
rm backend/portfolio.db
# Restart the application
./start.sh
```

## Technologies Used

### Backend
- FastAPI
- SQLAlchemy
- SQLite/PostgreSQL
- Pydantic
- Uvicorn

### Frontend
- React
- TypeScript
- Tailwind CSS
- Webpack
- Radix UI
- React Query
- Framer Motion

## License

MIT License - see LICENSE file for details.