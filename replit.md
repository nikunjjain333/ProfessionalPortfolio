# Portfolio Web Application - replit.md

## Overview

This is a full-stack portfolio web application built for Nikunj Jain, a Software Development Engineer specializing in fintech and payment systems. The application is a single-page React frontend with an Express.js backend, featuring a modern design system built with shadcn/ui components and Tailwind CSS.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for client-side routing
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: Framer Motion for smooth transitions

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL session store with connect-pg-simple
- **API Design**: RESTful endpoints with JSON responses

### Data Storage Solution
- **Primary Database**: PostgreSQL via Neon Database serverless
- **ORM**: Drizzle ORM with migration support
- **Schema Validation**: Zod schemas for runtime type checking
- **Session Storage**: Database-backed sessions for scalability

## Key Components

### Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Contact Messages Table**: Stores portfolio contact form submissions (name, email, subject, message, timestamp)
- **Migration System**: Drizzle Kit for database schema versioning

### API Endpoints
- `POST /api/contact`: Handles contact form submissions with validation
- `GET /api/resume/download`: Placeholder for resume download functionality

### Portfolio Sections
- **Navigation**: Responsive navigation with smooth scrolling
- **Hero Section**: Personal introduction with call-to-action buttons
- **About Section**: Professional background and expertise overview
- **Experience Timeline**: Career progression with detailed achievements
- **Skills Section**: Technical skills categorized by experience level
- **Projects Section**: Featured projects with achievements and publications
- **Education Section**: Academic background and certifications
- **Contact Section**: Interactive contact form with backend integration

## Data Flow

1. **Static Content**: Portfolio sections render static content about professional experience
2. **Contact Form**: Form submissions are validated client-side, sent to backend API, stored in PostgreSQL
3. **Resume Download**: Placeholder endpoint for serving resume files
4. **Development Mode**: Hot module replacement via Vite for rapid development
5. **Production Build**: Static assets served by Express with client-side routing fallback

## External Dependencies

### Core Dependencies
- **Database**: @neondatabase/serverless for PostgreSQL connection
- **ORM**: drizzle-orm with drizzle-zod for schema validation
- **UI Library**: Comprehensive Radix UI component collection
- **Styling**: Tailwind CSS with class-variance-authority for component variants
- **State Management**: @tanstack/react-query for server state
- **Animations**: framer-motion for smooth UI transitions
- **Forms**: react-hook-form with @hookform/resolvers for validation

### Development Tools
- **Build System**: Vite with React plugin and TypeScript support
- **Replit Integration**: Runtime error overlay and cartographer for development
- **Database Tools**: Drizzle Kit for migrations and schema management

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with Express backend proxy
- **Hot Reloading**: Vite HMR for frontend, tsx for backend file watching
- **Environment Variables**: DATABASE_URL required for database connection

### Production Build
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Bundle**: esbuild compiles TypeScript server to `dist/index.js`
3. **Static Serving**: Express serves built frontend assets
4. **Database Migration**: `npm run db:push` applies schema changes

### Key Architectural Decisions

**Problem**: Need for a professional portfolio showcasing fintech expertise
**Solution**: Full-stack application with modern React frontend and Express backend
**Rationale**: Demonstrates technical skills while providing contact functionality and resume access

**Problem**: UI consistency and development speed
**Solution**: shadcn/ui component library with Tailwind CSS
**Rationale**: Pre-built accessible components reduce development time while maintaining design system consistency

**Problem**: Database integration for contact forms
**Solution**: Drizzle ORM with PostgreSQL via Neon Database
**Rationale**: Type-safe database operations with serverless scaling capabilities

**Problem**: Development experience optimization
**Solution**: Vite for frontend, tsx for backend, with hot reloading
**Rationale**: Fast feedback loop essential for iterative design and development

## Changelog
```
Changelog:
- June 28, 2025. Initial setup
```

## User Preferences
```
Preferred communication style: Simple, everyday language.
```