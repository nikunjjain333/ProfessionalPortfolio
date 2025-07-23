#!/usr/bin/env python3
"""
Portfolio Application Startup Script
Starts both frontend and backend servers
"""
import subprocess
import sys
import os
import time
import signal
from pathlib import Path

def main():
    print("🚀 Starting Portfolio Application...")
    
    # Change to project root
    project_root = Path(__file__).parent
    os.chdir(project_root)
    
    processes = []
    
    try:
        # Start backend
        print("📍 Starting Backend Server...")
        # Activate virtual environment and run backend
        venv_python = project_root / "venv" / "bin" / "python"
        backend_process = subprocess.Popen([
            str(venv_python), "backend/start.py"
        ], cwd=project_root)
        processes.append(backend_process)
        
        # Give backend time to start
        time.sleep(3)
        
        # Start frontend
        print("📍 Starting Frontend Server...")
        frontend_process = subprocess.Popen([
            "npm", "run", "dev"
        ], cwd=project_root / "frontend")
        processes.append(frontend_process)
        
        print()
        print("✅ Application Started Successfully!")
        print("📍 Frontend: http://localhost:3000")
        print("📍 Backend API: http://localhost:8000")
        print("📍 API Docs: http://localhost:8000/docs")
        print()
        print("Press Ctrl+C to stop all servers...")
        
        # Wait for processes
        for process in processes:
            process.wait()
            
    except KeyboardInterrupt:
        print("\n🛑 Shutting down servers...")
        for process in processes:
            if process.poll() is None:
                process.terminate()
                try:
                    process.wait(timeout=5)
                except subprocess.TimeoutExpired:
                    process.kill()
        print("✅ All servers stopped.")
    except Exception as e:
        print(f"❌ Error starting application: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()