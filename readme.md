# Polling System API

This is a polling system API built using Node.js and mongodb database. It allows users to create questions with options and add votes to them. The API is designed to be open and does not require authentication or user identity.

## Installation

To set up the project on your local system, follow these steps:

1. Clone the repository from GitHub: git clone https://github.com/DigvijayDheer/Polling_System_API.git

2. Navigate to the project directory: cd polling-system-api

3. Install the dependencies: npm install

4. Set up the mongodb and configure the connection in the `.env` file.

5. Start the server: npm start

## Folder Structure

The project follows a scalable folder structure with separate models, controllers, and routes. Here's an overview of the folder structure:

- `config`: Contains configuration files for the database services.
- `controllers`: Handles the logics of the application.
- `models`: Defines the data models and interacts with the database.
- `routes`: Defines the API routes and their corresponding controller actions.

## API Endpoints

The following API endpoints are available:

- `GET /api/polls/`: Retrieves all active Polls with with their options and vote details.
- `POST /api/polls/create`: Creates a new Poll.
- `POST /api/polls/:id/options/create`: Adds options to a specific Poll.
- `GET /api/polls/:id`: Retrieves a specific poll with its options and vote details.
- `DELETE /api/polls/:id`: Deletes a Poll.
- `PUT /api/options/:id/`: Increments the vote count for an option.
- `DELETE /api/options/:id`: Deletes an option.
