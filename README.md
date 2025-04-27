# Content Generator

## Overview
This is a full-stack AI-powered content generation app built with **Node.js**, **Express**, **Next.js**, and **MongoDB**. The app allows users to generate AI-powered blog posts, manage their drafts, and share them via public links. The app supports multi-user authentication using **JWT**, and it is fully dockerized for easy deployment and scalability.

## Features
- **Generate Blog Posts**: Users can generate AI-powered blog posts based on input topics and writing styles.
- **User Dashboard**: Allows users to manage their generated posts and save drafts for future use.
- **Publicly Shareable Posts**: Each post can be shared via a unique public link.
- **Authentication**: Includes user authentication via JWT with signup and login functionality.
- **Multi-User Support**: Users can securely log in and manage their generated posts.
  
## Tech Stack
- **Frontend**: Built with **Next.js** and **React** using **ShadCN UI** and **Tailwind CSS** for styling.
- **Backend**: Developed using **Node.js** and **Express** to handle authentication, post generation, and database interactions.
- **Database**: **MongoDB** is used for storing user data and blog posts.
- **Authentication**: Implemented using **JWT** (JSON Web Tokens) for secure user authentication.
- **Docker**: The application is fully dockerized using **Docker** and **Docker Compose** to manage services and ensure consistent environments.

### Setup
Running the app by the docker-compose file
