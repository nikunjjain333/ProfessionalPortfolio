# Nikunj Jain's Portfolio

A full-stack portfolio application showcasing professional experience, projects, and skills in fintech and payment systems.

## Architecture

- **Frontend**: React with TypeScript, Tailwind CSS, built with Webpack
- **Backend**: FastAPI with SQLAlchemy, SQLite database
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
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   ```

### Running the Application

**Option 1: Run everything with one command**
```bash
python start.py
```

**Option 2: Run servers separately**

Backend:
```bash
cd backend
source venv/bin/activate
python start.py
```

Frontend (in a new terminal):
```bash
cd frontend
npm run dev
```

### Access Points

- **Portfolio Website**: http://localhost:3000
- **API Documentation**: http://localhost:8000/docs
- **Backend API**: http://localhost:8000

## Project Structure

```
ProfessionalPortfolio/
├── backend/                    # FastAPI backend
│   ├── .env                   # Environment variables
│   ├── requirements.txt       # Python dependencies
│   ├── start.py              # Backend startup script
│   ├── main.py               # FastAPI application
│   ├── models.py             # Database models
│   ├── schemas.py            # Pydantic schemas
│   ├── crud.py               # Database operations
│   ├── database.py           # Database configuration
│   └── alembic/              # Database migrations
├── frontend/                  # React frontend
│   ├── package.json          # Node.js dependencies
│   ├── webpack.config.js     # Webpack configuration
│   ├── tailwind.config.js    # Tailwind CSS configuration
│   ├── tsconfig.json         # TypeScript configuration
│   ├── index.html            # HTML template
│   └── src/                  # Source code
│       ├── main.tsx          # Entry point
│       ├── App.tsx           # Main app component
│       ├── components/       # React components
│       ├── pages/            # Page components
│       ├── hooks/            # Custom hooks
│       └── lib/              # Utilities
├── attached_assets/          # Static assets (resumes, etc.)
└── start.py                  # Main application startup script
```

## Features

- **Responsive Design**: Optimized for all devices
- **Interactive UI**: Smooth animations and transitions
- **Contact Form**: Integrated with backend API
- **Project Showcase**: Dynamic project listings
- **Skills Timeline**: Professional experience timeline
- **Resume Download**: Downloadable resume functionality

## Development

### Backend Development
- FastAPI with automatic API documentation
- SQLAlchemy ORM with async support
- SQLite database for development
- Alembic for database migrations

### Frontend Development
- React 18 with TypeScript
- Tailwind CSS for styling
- Webpack for bundling
- Hot module replacement for development

## Production Build

Frontend:
```bash
cd frontend
npm run build
```

The built files will be in `frontend/dist/` and can be served statically.

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/resume/download` - Download resume
- `GET /docs` - API documentation (Swagger UI)

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