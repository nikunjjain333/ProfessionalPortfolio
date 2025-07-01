#!/usr/bin/env python3
"""
Portfolio Application Startup Script
Starts the FastAPI backend server
"""
import os
import sys
import uvicorn
from pathlib import Path

def main():
    # Add backend directory to Python path
    backend_dir = Path(__file__).parent / "backend"
    sys.path.insert(0, str(backend_dir))
    
    # Change to backend directory
    os.chdir(backend_dir)
    
    print("🚀 Starting Portfolio API Server...")
    print("📍 Backend: http://localhost:8000")
    print("📍 API Docs: http://localhost:8000/docs")
    print("📍 Frontend: Configure your React dev server to proxy to port 8000")
    
    # Start the FastAPI server
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        reload_dirs=[str(backend_dir)]
    )

if __name__ == "__main__":
    main()