#!/usr/bin/env python3
"""
Backend Startup Script
"""
import sys
import os
from pathlib import Path
import uvicorn

# Add backend directory to Python path and change to it
backend_dir = Path(__file__).parent
sys.path.insert(0, str(backend_dir))
os.chdir(backend_dir)

if __name__ == "__main__":
    print("🚀 Starting Portfolio Backend API...")
    print("📍 Backend: http://localhost:8000")
    print("📍 API Docs: http://localhost:8000/docs")
    
    uvicorn.run(
        "main:app",
        host="127.0.0.1",
        port=8000,
        reload=True,
        reload_dirs=[str(backend_dir)]
    )