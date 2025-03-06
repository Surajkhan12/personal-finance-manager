# Personal Finance Manager - Frontend

This is the React-based frontend for the Personal Finance Manager application. It allows users to authenticate, view, and manage their transactions by interacting with the backend API.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
  - [Setup](#setup)
  - [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Overview

The frontend is built with React and leverages Axios for API requests, React Router DOM for routing, and Material UI with Emotion for styling. It also uses React's Context API to manage authentication state. A proxy is configured in the package.json to forward API requests to the backend.

## Features

- **User Authentication:** Secure login and registration forms using JWT-based authentication.
- **Transaction Management:** Display and manage financial transactions retrieved from the backend.
- **Responsive UI:** Modern interface built with Material UI and Emotion.
- **Context API:** Centralized state management for authentication across the app.

## Technologies

- **React**
- **Axios**
- **React Router DOM**
- **Material UI** & **Emotion**
- **Context API**

## Installation

### Setup

1. **Clone the Repository:**

bash
git clone [https://github.com/your-username/your-repo-name.git](https://github.com/1502aditya/Personal-Finance-Manager-with-MERN-Technology)

Navigate to the Client Directory:

bash
cd finance-manager/client

Install Dependencies:

bash
npm install
npm install axios react-router-dom @mui/material @emotion/react @emotion/styled

Configuration
Proxy Setup:
To forward API requests to your backend, add the following line in the package.json file (inside the client folder):

json
"proxy": "http://localhost:5000",

Environment Variables:
If additional configuration is needed, create a .env file in the client folder. This is optional and depends on your specific requirements.

Running the Application
To start the frontend development server, run:

bash
npm start

This will launch the application at http://localhost:3000.

Folder Structure
Below is a typical folder structure for the frontend:

graphql

client/
├── public/                # Static assets and index.html
└── src/
    ├── components/        # React components (e.g., Login.js, Transactions.js)
    ├── context/           # Context API files (e.g., AuthContext.js)
    ├── App.js             # Main application component with routing
    ├── index.js           # React entry point
    └── ...                # Other supporting files and utilities
