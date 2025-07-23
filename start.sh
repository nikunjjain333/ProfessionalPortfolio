#!/bin/bash

# Portfolio Application Startup Script
# Starts both frontend and backend servers

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Get script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# Function to cleanup on exit
cleanup() {
    echo -e "\n${YELLOW}🛑 Shutting down servers...${NC}"
    
    # Kill background processes
    if [[ -n "$BACKEND_PID" ]]; then
        kill "$BACKEND_PID" 2>/dev/null || true
        wait "$BACKEND_PID" 2>/dev/null || true
    fi
    
    if [[ -n "$FRONTEND_PID" ]]; then
        kill "$FRONTEND_PID" 2>/dev/null || true
        wait "$FRONTEND_PID" 2>/dev/null || true
    fi
    
    # Kill any remaining processes on our ports
    lsof -ti:8000 | xargs kill -9 2>/dev/null || true
    lsof -ti:3000 | xargs kill -9 2>/dev/null || true
    
    echo -e "${GREEN}✅ All servers stopped.${NC}"
    exit 0
}

# Set trap for cleanup
trap cleanup SIGINT SIGTERM EXIT

echo -e "${BLUE}🚀 Starting Portfolio Application...${NC}"

# Start backend server
echo -e "${YELLOW}📍 Starting Backend Server...${NC}"
cd backend
source venv/bin/activate
python start.py &
BACKEND_PID=$!
cd ..

# Wait for backend to start
echo "Waiting for backend to initialize..."
sleep 3

# Check if backend is running
if ! kill -0 "$BACKEND_PID" 2>/dev/null; then
    echo -e "${RED}❌ Backend failed to start${NC}"
    exit 1
fi

# Start frontend server
echo -e "${YELLOW}📍 Starting Frontend Server...${NC}"
cd frontend
npm run dev &
FRONTEND_PID=$!
cd ..

# Wait for frontend to start
sleep 3

# Check if frontend is running
if ! kill -0 "$FRONTEND_PID" 2>/dev/null; then
    echo -e "${RED}❌ Frontend failed to start${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}✅ Application Started Successfully!${NC}"
echo -e "${BLUE}📍 Frontend: http://localhost:3000${NC}"
echo -e "${BLUE}📍 Backend API: http://localhost:8000${NC}"
echo -e "${BLUE}📍 API Docs: http://localhost:8000/docs${NC}"
echo ""
echo -e "${YELLOW}Press Ctrl+C to stop all servers...${NC}"

# Wait for processes to finish
wait