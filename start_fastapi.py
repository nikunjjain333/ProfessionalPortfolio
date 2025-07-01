#!/usr/bin/env python3

"""
FastAPI Backend Startup Script for Portfolio Application
"""

import os
import sys
import subprocess

def main():
    """Start the FastAPI backend server"""
    print("🚀 Starting Portfolio FastAPI Backend...")
    print("📍 Backend API: http://localhost:8000")
    print("📍 API Documentation: http://localhost:8000/docs")
    print("📍 Interactive API: http://localhost:8000/redoc")
    
    # Change to backend directory
    backend_dir = os.path.join(os.path.dirname(__file__), 'backend')
    os.chdir(backend_dir)
    
    # Start the FastAPI server
    try:
        subprocess.run([
            sys.executable, "-m", "uvicorn", "main:app",
            "--host", "0.0.0.0",
            "--port", "8000",
            "--reload"
        ], check=True)
    except KeyboardInterrupt:
        print("\n👋 FastAPI server stopped.")
    except Exception as e:
        print(f"❌ Error starting FastAPI server: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()