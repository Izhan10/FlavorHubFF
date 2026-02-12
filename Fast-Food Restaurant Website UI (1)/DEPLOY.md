# Deployment Instructions

This project has been cleaned up and is ready for deployment on Vercel.

## How to Deploy

1.  **Push this code to GitHub/GitLab/Bitbucket**.
2.  **Import the project** into [Vercel](https://vercel.com/new).
3.  Vercel will automatically detect that this is a **Vite** project.
4.  Ensure the settings are:
    *   **Framework Preset**: Vite
    *   **Build Command**: `npm run build`
    *   **Output Directory**: `dist`
5.  Click **Deploy**.

## Why this approach?

Since a local build environment (Node.js) was not available, we configured the project to use Vercel's build system. Vercel will install dependencies and build the optimized static site for you during deployment.
