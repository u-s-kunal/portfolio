# Kunal Ughade — Developer Portfolio

Personal developer portfolio built with Next.js and React to showcase my software development projects, technical skills, experience, and professional background.

## Live Website

https://developerkunal.com

---

## Overview

This is my personal developer portfolio, designed and developed to present my work as a Junior MERN Stack / Full-Stack Developer.

The application uses Next.js and React for the frontend and includes a MongoDB-backed data layer, authentication, email services, interactive UI components, animations, and production deployment.

The portfolio also showcases projects spanning MERN Stack development, React.js, Next.js, JavaScript applications, web design, and other development work.

---

## Features

### Portfolio

- Professional developer profile
- About section
- Technical skills
- Work experience
- Education
- Certifications
- Featured projects
- Project details and live demos
- Responsive design

### Contact

- Contact form
- Email delivery using Resend
- Nodemailer integration
- Server-side form handling
- Form validation and error handling

### Authentication

- Authentication using NextAuth
- Session management
- Protected functionality where required

### Database

- MongoDB integration
- Mongoose for database modeling and interaction
- Persistent application data

### User Interface

- Responsive design
- Tailwind CSS
- Framer Motion animations
- Headless UI components
- Lucide React icons
- Heroicons
- Font Awesome

### Additional Integrations

- Twilio integration
- WebSocket support
- Server-side functionality
- Environment-based configuration

---

## Tech Stack

### Frontend

- Next.js 15
- React 19
- Tailwind CSS
- JavaScript
- Framer Motion
- Headless UI
- Lucide React
- Heroicons
- Font Awesome

### Backend & Database

- Next.js server-side functionality
- Node.js
- MongoDB
- Mongoose
- NextAuth
- WebSockets

### Communication & Services

- Resend
- Nodemailer
- Twilio

### Deployment

- Next.js
- Node.js 20
- Production deployment with custom domain

---

## Application Architecture

```text
                    ┌─────────────────────┐
                    │       Visitor      │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │    Next.js / React  │
                    │     Portfolio UI    │
                    └──────────┬──────────┘
                               │
                    ┌──────────┼──────────┐
                    │          │          │
                    ▼          ▼          ▼
              ┌─────────┐ ┌─────────┐ ┌─────────┐
              │ MongoDB │ │ Resend  │ │ Twilio  │
              │         │ │ Email   │ │ Services│
              └─────────┘ └─────────┘ └─────────┘
                    │
                    ▼
              ┌───────────┐
              │ Mongoose  │
              │   Data    │
              └───────────┘




### Docker architecture

Your Dockerfile uses three stages:

```text
Dependencies
     ↓
node:20-alpine
     ↓
npm install
     ↓
Builder
     ↓
npm run build
     ↓
Runner
     ↓
Production Next.js application
