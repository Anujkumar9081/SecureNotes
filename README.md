# NoteVault

A lightweight, secure, and minimal full-stack note-taking web application. It uses a Node.js/Express backend for managing users and notes, combined with a clean, light-themed frontend built in vanilla HTML, CSS, and JavaScript.

## Features

- **JWT-Based Authentication**: Secure login and sign-up flows. Password verification and token emission are handled via JSON Web Tokens (JWT).
- **Session Persistence**: User sessions are maintained using `localStorage` on the frontend.
- **Notes Management**: Create, read, and delete personal notes in real-time.
- **Clean User Interface**: A modern, responsive light-themed UI built with custom CSS, including slide-in animations and intuitive panels.

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla), Axios (for API requests)
- **Backend**: Node.js, Express.js, JWT (`jsonwebtoken`), CORS

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation & Run

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/NoteVault.git
   cd NoteVault
