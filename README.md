# NammaJourney Backend

Welcome to the NammaJourney Backend repository! This repository powers the backend for the NammaJourney platform, which helps users plan trips, find co-travelers, and book activities. This README will guide you on how to set up the project locally and start contributing.

# 🚀 Getting Started

Follow these steps to get the project up and running on your local machine for development.

1. Clone the Repository
   First, clone the repository to your local machine:

```
git clone https://github.com/your-username/namma-journey-backend.git
cd namma-journey-backend
```

2. Install Dependencies
   Make sure you have Node.js (v16 or later) and npm (v7 or later) installed.

Run the following command to install the necessary dependencies:

```
npm install
```

3. Set Up Environment Variables
   Create a .env file in the root directory of the project. This file will contain the environment variables needed for the backend to run.

Example .env file:

```
# .env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/namma-journey
JWT_SECRET=your_jwt_secret
NODE_ENV=development
PORT: The port on which the server will run (default is 5000).
MONGODB_URI: Connection string for your MongoDB database.
JWT_SECRET: Secret key for signing JWT tokens.
NODE_ENV: Set to development or production.
```

4. Run the Development Server
   Once the environment is set up, you can start the server with Nodemon (which automatically restarts the server on file changes):

```
npm run dev
```

The server should now be running at http://localhost:5000.

# 📝 Code Formatting and Linting

1. Pre-Commit Hooks
   We use Husky and Lint-Staged to ensure code quality and consistency before commits. These tools automatically run ESLint and Prettier on your staged files before they are committed.

Make sure you have installed all the dependencies and configured Git hooks:

Linting will run automatically for TypeScript and JavaScript files.
Formatting will be handled by Prettier to ensure the code is consistently formatted. 2. Manual Linting and Formatting
If needed, you can manually run linting or formatting commands:

```
# Linting
npm run lint

# Fix Linting Issues Automatically
npm run lint:fix

# Format Code with Prettier
npm run format
```

# 🛠 Development Workflow

1. Branching Strategy
   We follow Git Flow for branching:

main: Production-ready branch (stable).
develop: Feature development branch (latest stable features).
feature/feature-name: Branch for new features.
bugfix/bug-name: Branch for fixing bugs.
Before starting any new feature or bugfix, create a new branch from develop:

```
git checkout develop
git pull origin develop
git checkout -b feature/your-feature-name
```

Once your work is done, push your branch and open a pull request (PR):

```
git push origin feature/your-feature-name
```

2. Code Reviews
   All pull requests must go through a code review process before merging into the develop branch.

Ensure your code is well-tested.
Run the tests before pushing to GitHub.
Add relevant comments explaining your changes.
🧪 Running Tests
We use Jest for testing the backend logic. To run the tests, use the following command:

```
npm test
```

For continuous testing while developing, run:

```
npm run test:watch
```

This will watch for changes and re-run tests automatically.

# 📦 Technologies Used

- Node.js: JavaScript runtime.
- Express.js: Web framework for building APIs.
- TypeScript: JavaScript with type-checking.
- MongoDB: NoSQL database for storing trip data, users, etc.
- Mongoose: ODM for MongoDB.
- JWT: JSON Web Tokens for authentication.
- Winston: Logging framework.
- Jest: Testing framework.

# 🎉 License

This project is licensed under the MIT License.
