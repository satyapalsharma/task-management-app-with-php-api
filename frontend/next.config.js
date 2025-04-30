/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for improved error handling and warnings in development.
  // This helps identify potential problems in your application.
  reactStrictMode: true,

  // Use SWC (Speedy Web Compiler) for minification.
  // SWC is a Rust-based platform that offers significantly faster compilation times
  // compared to Terser, especially for large projects.
  swcMinify: true,

  // Environment variables that are available to the browser.
  // These variables are loaded from .env files (e.g., .env.local, .env.production)
  // and must be prefixed with `NEXT_PUBLIC_` to be exposed to the client-side bundle.
  // For production deployments, ensure these are properly configured in your hosting environment.
  env: {
    // Base URL for the Task Management API (PHP Backend).
    // This is crucial for the frontend to communicate with the backend.
    // Example: `http://localhost:8000/api` during development, or
    // `https://api.taskmanager.com/api` in production.
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,

    // --- Cross-Project Context: References to other microservices ---
    // In a microservice architecture, the frontend might need to know the URLs
    // of other related services for navigation, embedding, or direct API calls.
    // These are provided as examples to simulate an interconnected system.

    // URL for the Recipe Finder App.
    // This could be used for linking to a user's recipe collection or integrating features.
    // Example: `http://localhost:3001` or `https://recipe.yourdomain.com`
    NEXT_PUBLIC_RECIPE_APP_URL: process.env.NEXT_PUBLIC_RECIPE_APP_URL || 'http://localhost:3001',

    // URL for the Unit Converter App.
    // Useful if the task app needs to integrate unit conversion functionality or link to it.
    // Example: `http://localhost:3002` or `https://converter.yourdomain.com`
    NEXT_PUBLIC_UNIT_CONVERTER_APP_URL: process.env.NEXT_PUBLIC_UNIT_CONVERTER_APP_URL || 'http://localhost:3002',

    // URL for the Online Code Snippet Manager.
    // Could be relevant if tasks involve code snippets or documentation.
    // Example: `http://localhost:3003` or `https://snippets.yourdomain.com`
    NEXT_PUBLIC_SNIPPET_MANAGER_APP_URL: process.env.NEXT_PUBLIC_SNIPPET_MANAGER_APP_URL || 'http://localhost:3003',
  },

  // Optional: Configure image optimization domains.
  // If your application serves images from external domains (e.g., a CDN or third-party service),
  // you must list those domains here to allow Next.js Image component to optimize them.
  // For a simple task management app, this might not be immediately necessary unless
  // user avatars or task-related images are hosted externally.
  // images: {
  //   domains: ['cdn.example.com', 'another-image-host.com'],
  // },

  // Optional: Custom webpack configuration.
  // This allows you to extend or override Next.js's default webpack configuration.
  // Use with caution, as incorrect configurations can break your build.
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   // Example: Add a custom loader for a specific file type
  //   // config.module.rules.push({
  //   //   test: /\.svg$/,
  //   //   use: ['@svgr/webpack'],
  //   // });
  //   return config;
  // },
};

module.exports = nextConfig;