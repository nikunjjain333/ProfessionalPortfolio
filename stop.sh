#!/bin/bash

# Portfolio Application Stop Script
# Stops all frontend and backend servers

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🛑 Stopping Portfolio Application...${NC}"

# Function to kill processes on a specific port
kill_port() {
    local port=$1
    local service_name=$2
    
    echo -e "${YELLOW}📍 Stopping $service_name (port $port)...${NC}"
    
    # Find processes using the port
    local pids=$(lsof -ti:$port 2>/dev/null)
    
    if [[ -n "$pids" ]]; then
        echo "Found processes: $pids"
        
        # Try graceful shutdown first
        echo "$pids" | xargs kill -TERM 2>/dev/null || true
        sleep 2
        
        # Check if processes are still running
        local remaining_pids=$(lsof -ti:$port 2>/dev/null)
        
        if [[ -n "$remaining_pids" ]]; then
            echo "Force killing remaining processes: $remaining_pids"
            echo "$remaining_pids" | xargs kill -9 2>/dev/null || true
        fi
        
        echo -e "${GREEN}✅ $service_name stopped${NC}"
    else
        echo -e "${GREEN}✅ $service_name was not running${NC}"
    fi
}

# Function to kill processes by name
kill_by_name() {
    local process_name=$1
    local service_name=$2
    
    echo -e "${YELLOW}📍 Stopping $service_name processes...${NC}"
    
    local pids=$(pgrep -f "$process_name" 2>/dev/null || true)
    
    if [[ -n "$pids" ]]; then
        echo "Found $service_name processes: $pids"
        
        # Try graceful shutdown first
        echo "$pids" | xargs kill -TERM 2>/dev/null || true
        sleep 2
        
        # Check if processes are still running
        local remaining_pids=$(pgrep -f "$process_name" 2>/dev/null || true)
        
        if [[ -n "$remaining_pids" ]]; then
            echo "Force killing remaining $service_name processes: $remaining_pids"
            echo "$remaining_pids" | xargs kill -9 2>/dev/null || true
        fi
        
        echo -e "${GREEN}✅ $service_name processes stopped${NC}"
    else
        echo -e "${GREEN}✅ No $service_name processes found${NC}"
    fi
}

# Stop by ports (most reliable method)
kill_port 3000 "Frontend Server"
kill_port 8000 "Backend API Server"

# Stop by process names (backup method)
kill_by_name "webpack.*serve" "Webpack Dev Server"
kill_by_name "uvicorn.*main:app" "FastAPI/Uvicorn Server"
kill_by_name "npm.*run.*dev" "NPM Dev Process"

# Clean up any Python processes in backend directory
echo -e "${YELLOW}📍 Cleaning up backend processes...${NC}"
pkill -f "python.*start.py" 2>/dev/null || true
pkill -f "backend.*python" 2>/dev/null || true

# Clean up any Node processes in frontend directory  
echo -e "${YELLOW}📍 Cleaning up frontend processes...${NC}"
pkill -f "node.*webpack" 2>/dev/null || true

# Final check
echo ""
echo -e "${BLUE}🔍 Final verification...${NC}"

# Check if ports are still in use
if lsof -ti:3000 >/dev/null 2>&1; then
    echo -e "${RED}⚠️  Port 3000 still in use${NC}"
else
    echo -e "${GREEN}✅ Port 3000 is free${NC}"
fi

if lsof -ti:8000 >/dev/null 2>&1; then
    echo -e "${RED}⚠️  Port 8000 still in use${NC}"
else
    echo -e "${GREEN}✅ Port 8000 is free${NC}"
fi

echo ""
echo -e "${GREEN}✅ Portfolio Application stopped successfully!${NC}"
echo -e "${BLUE}💡 You can start it again with: ./start.sh${NC}"