# Welcome to your# Maa Sita Medical Foundation Hospital (MSMFHB)

## Project Structure

This project is organized into two main directories:

- **`frontend/`**: Contains the React + Vite application (User Interface).
- **`backend/`**: Contains the Node.js + Express application (API & Database).

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- MongoDB installed locally or a MongoDB Atlas connection string.

### 1. Setup Backend

1.  Navigate to the backend directory:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the `backend` directory and add your configuration (PORT, MONGODB_URI, JWT_SECRET, etc.).
4.  Start the server:
    ```bash
    npm run dev
    ```

### 2. Setup Frontend

1.  Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```

## Features

- **Public Website**: Home, Services, Doctors, Blog, Gallery, Mission & Vision.
- **Admin Dashboard**: Manage users, doctors, services, blog posts, gallery, and settings.
- **Patient Corner**: Information and resources for patients.
- **Dynamic Gallery**: Upload images and videos via file or URL.

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/6d11d2c1-2e2a-4c2f-8c26-d5f32f83f668) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/6d11d2c1-2e2a-4c2f-8c26-d5f32f83f668) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
