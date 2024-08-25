# TaskVerse

TaskVerse is a comprehensive task management platform designed to help individuals and teams manage tasks, projects, and workspaces efficiently. This guide will help you set up the TaskVerse application on your local machine.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Running the Application](#running-the-application)
- [Docker Setup](#docker-setup)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Features
- Multi-workspace and project management
- Task hierarchies with subtasks
- User roles and permissions
- Real-time notifications
- Detailed audit logs
- Recurring tasks
- File attachments and comments on tasks
- Tags and filters for easy task organization

## Prerequisites
- **Node.js** (version 14 or higher)
- **npm** (version 6 or higher) or **yarn**
- **Docker** (version 19.03 or higher)
- **Docker Compose** (version 1.27 or higher)
- **Vite** (for frontend)

## Getting Started

### Backend Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/taskverse.git
   cd taskverse/backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the `backend` directory.
   - Add the following environment variables:
     ```env
     PORT=8000
     DATABASE_URL=mongodb://mongo:27017/taskverse
     JWT_SECRET=your_secret_key
     ```

4. **Run the backend server:**
   ```bash
   docker compose up 
   npm run dev
   # or
   yarn dev
   ```

### Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd ../frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the frontend server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. **Access the application:**
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:8000`

## Configuration

- **Backend Configuration:** Update the `.env` file in the `backend` directory with your environment-specific variables.
- **Frontend Configuration:** Modify the `vite.config.ts` file in the `frontend` directory to update the server configuration if needed.

## Contributing

We welcome contributions to TaskVerse! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Create a Pull Request.

## License

TaskVerse is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
