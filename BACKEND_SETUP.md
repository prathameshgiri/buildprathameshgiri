# Backend Setup Guide

This guide will help you set up the authentication backend with PostgreSQL database.

## Prerequisites

- Node.js (v18+)
- PostgreSQL database (we recommend Neon for serverless PostgreSQL)
- npm or pnpm

## Step 1: Create a PostgreSQL Database

### Option A: Using Neon (Recommended for Netlify)

1. Go to https://neon.tech
2. Sign up for a free account
3. Create a new project
4. Copy the connection string

### Option B: Local PostgreSQL

1. Install PostgreSQL locally
2. Create a new database: `createdb your_database_name`
3. Get connection string: `postgresql://localhost:5432/your_database_name`

## Step 2: Set Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Update `.env` with your values:
   ```
   DATABASE_URL=postgresql://your-user:your-password@your-host:5432/your-database
   JWT_SECRET=your-super-secret-key-min-32-characters-long
   VITE_API_URL=/api
   ```

3. For Netlify deployment, add these environment variables in:
   - Netlify Dashboard → Site Settings → Build & Deploy → Environment

## Step 3: Database Initialization

The database tables will be automatically created when the server starts:

- `users` table: Stores user account information
- `login_history` table: Tracks login/logout activity with IP and device info

## Step 4: Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The API will be available at `http://localhost:5173/api`

## Step 5: Testing Authentication

### Sign Up
```bash
curl -X POST http://localhost:5173/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123",
    "name": "John Doe",
    "phone": "+1234567890",
    "company": "Acme Corp",
    "address": "123 Main St"
  }'
```

### Sign In
```bash
curl -X POST http://localhost:5173/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'
```

### Get Profile (requires token)
```bash
curl -X GET http://localhost:5173/api/auth/profile \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### Get Login History (requires token)
```bash
curl -X GET 'http://localhost:5173/api/auth/login-history?limit=10' \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### Logout (requires token)
```bash
curl -X POST http://localhost:5173/api/auth/logout \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## API Endpoints

### POST `/api/auth/signup`
Create a new user account.

**Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe",
  "phone": "+1234567890",    // Optional
  "address": "123 Main St",   // Optional
  "company": "Acme Corp"      // Optional
}
```

**Response:**
```json
{
  "user": {
    "id": 1,
    "email": "user@example.com",
    "name": "John Doe",
    "phone": "+1234567890",
    "address": "123 Main St",
    "company": "Acme Corp"
  },
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

### POST `/api/auth/login`
Authenticate a user and return a JWT token.

**Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "user": {
    "id": 1,
    "email": "user@example.com",
    "name": "John Doe",
    "phone": "+1234567890",
    "address": "123 Main St",
    "company": "Acme Corp"
  },
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

### GET `/api/auth/profile`
Get the current user's profile information.

**Headers:**
```
Authorization: Bearer YOUR_JWT_TOKEN
```

**Response:**
```json
{
  "id": 1,
  "email": "user@example.com",
  "name": "John Doe",
  "phone": "+1234567890",
  "address": "123 Main St",
  "company": "Acme Corp",
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```

### PUT `/api/auth/profile`
Update the current user's profile.

**Headers:**
```
Authorization: Bearer YOUR_JWT_TOKEN
```

**Body:**
```json
{
  "name": "Jane Doe",
  "phone": "+1234567890",
  "address": "456 Oak Ave",
  "company": "Tech Corp"
}
```

### GET `/api/auth/login-history?limit=10`
Get the current user's login history.

**Headers:**
```
Authorization: Bearer YOUR_JWT_TOKEN
```

**Query Parameters:**
- `limit` (optional, default: 10): Number of records to return

**Response:**
```json
[
  {
    "id": 1,
    "login_time": "2024-01-15T10:30:00Z",
    "logout_time": null,
    "ip_address": "192.168.1.1",
    "device_info": {
      "browser": "Chrome/120.0.0",
      "os": "Windows NT 10.0",
      "userAgent": "Mozilla/5.0..."
    }
  }
]
```

### POST `/api/auth/logout`
Log out the current user.

**Headers:**
```
Authorization: Bearer YOUR_JWT_TOKEN
```

**Response:**
```json
{
  "message": "Logged out successfully"
}
```

## Database Schema

### users table
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  address VARCHAR(500),
  company VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### login_history table
```sql
CREATE TABLE login_history (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  ip_address VARCHAR(45),
  user_agent VARCHAR(500),
  device_info JSONB,
  login_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  logout_time TIMESTAMP
);
```

## Production Deployment (Netlify)

1. Connect your GitHub repository to Netlify
2. Set environment variables in Netlify settings
3. Ensure `DATABASE_URL` points to your Neon database
4. Deploy! The Netlify Functions will handle the serverless backend

## Troubleshooting

### Connection Error to Database
- Check your `DATABASE_URL` is correct
- Ensure your database server is running
- For Neon, verify IP address is whitelisted

### JWT Token Errors
- Ensure `JWT_SECRET` is set in environment variables
- Token expires after 7 days
- Tokens are stored in browser localStorage

### CORS Issues
- CORS is enabled for all origins by default
- Modify `server/index.ts` if you need to restrict origins

## Security Notes

1. **JWT Secret**: Always use a strong, random secret in production
2. **Password**: Passwords are hashed using bcryptjs (10 salt rounds)
3. **Database**: Use strong credentials for your database
4. **HTTPS**: Always use HTTPS in production
5. **Token Storage**: Tokens are stored in localStorage (consider using secure httpOnly cookies for production)

## Next Steps

- Set up password reset functionality
- Add email verification
- Implement role-based access control
- Add OAuth integration (Google, GitHub)
