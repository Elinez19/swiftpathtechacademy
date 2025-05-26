# SwiftPathTech Academy

A comprehensive educational platform connecting students with expert tutors, offering structured courses, and providing personalized learning experiences.

![SwiftPathTech Academy](https://via.placeholder.com/1200x600?text=SwiftPathTech+Academy)

## 📚 Project Overview

SwiftPathTech Academy is a full-stack educational platform designed to provide high-quality learning experiences for students and teaching opportunities for tutors. The platform offers a range of features for different user roles:

### Key Features

#### For Students
- Browse and enroll in courses
- Track learning progress
- Interact with tutors
- Access personalized dashboard
- Manage course materials and assignments

#### For Tutors
- Create and manage courses
- Monitor student progress
- Provide feedback and support
- Access teaching analytics
- Manage student interactions

#### For Administrators
- Oversee platform operations
- Manage users and permissions
- Monitor platform analytics
- Ensure quality standards
- Handle administrative tasks

## 🛠️ Tech Stack

### Frontend (Client)
- **Framework**: Next.js 15.x
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI, shadcn/ui
- **State Management**: Redux Toolkit
- **Form Handling**: React Hook Form with Zod validation
- **Data Visualization**: Recharts
- **Authentication**: Custom auth system

### Backend (Server)
- **Runtime**: Node.js
- **Framework**: Express 5.x
- **Language**: TypeScript
- **Database**: DynamoDB (AWS)
- **Security**: Helmet, CORS
- **API Documentation**: (To be added)
- **Authentication**: bcrypt for password hashing

## 📂 Project Structure

```
swiftpathtechacademy/
├── client/                 # Frontend Next.js application
│   ├── app/                # Next.js app directory
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page
│   │   ├── courses/        # Course listings and details
│   │   ├── dashboard/      # User dashboards
│   │   │   ├── admin/      # Admin dashboard
│   │   │   ├── student/    # Student dashboard
│   │   │   └── tutor/      # Tutor dashboard
│   │   ├── sign-in/        # Authentication pages
│   │   └── sign-up/
│   ├── components/         # Reusable UI components
│   │   ├── ui/             # Base UI components
│   │   └── auth/           # Authentication components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions and libraries
│   └── public/             # Static assets
│
├── server/                 # Backend Express application
│   ├── src/                # Source code
│   │   ├── controllers/    # Request handlers
│   │   ├── models/         # Data models
│   │   ├── routes/         # API route definitions
│   │   ├── middleware/     # Custom middleware
│   │   ├── utils/          # Utility functions
│   │   └── index.ts        # Entry point
│   └── dist/               # Compiled JavaScript output
│
└── .gitignore              # Git ignore file
```

## 🚀 Installation and Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- AWS account (for DynamoDB)

### Setting up the Client
```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Create a .env.local file with required environment variables
touch .env.local
```

Required environment variables for client:
```
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### Setting up the Server
```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create a .env file with required environment variables
touch .env
```

Required environment variables for server:
```
PORT=3000
NODE_ENV=development
AWS_REGION=your-aws-region
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
```

## 🖥️ Development Commands

### Client
```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

### Server
```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## 🔄 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /        | Server health check |
| POST   | /auth/register | Register a new user |
| POST   | /auth/login | Authenticate a user |
| GET    | /courses | Get all courses |
| GET    | /courses/:id | Get course details |
| POST   | /courses | Create a new course (Tutor only) |
| PUT    | /courses/:id | Update a course (Tutor only) |
| DELETE | /courses/:id | Delete a course (Tutor only) |

*Note: This is a preliminary API design and subject to change*

## 👥 Contributing

We welcome contributions to the SwiftPathTech Academy project! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Coding Standards
- Follow the existing code style
- Write tests for new features
- Keep documentation up-to-date
- Use meaningful commit messages

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📧 Contact

For questions or support, please contact:
- Email: support@swiftpathtech.com
- Website: [swiftpathtech.com](https://swiftpathtech.com)

---

&copy; 2025 SwiftPathTech Academy. All rights reserved.

