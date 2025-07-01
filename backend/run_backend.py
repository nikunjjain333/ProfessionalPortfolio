#!/usr/bin/env python3
"""
FastAPI Backend Server for Portfolio Application
"""
import uvicorn
import os
from pathlib import Path

def main():
    print("🚀 Starting Portfolio FastAPI Backend...")
    print("📍 Backend API: http://localhost:8000")
    print("📍 API Documentation: http://localhost:8000/docs")
    print("📍 Interactive API: http://localhost:8000/redoc")
    
    # Start the FastAPI server
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        reload_dirs=[str(Path(__file__).parent)]
    )

if __name__ == "__main__":
    main()