# Wanderlust

A full-stack web application for discovering and reviewing travel destinations.

Project Link: https://wanderlust-gopal.onrender.com/listings

## Description

Wanderlust is a platform for travelers to share their experiences and discover new places. Users can create accounts, browse a map of destinations, add their own favorite spots, and leave reviews for others to see.

## Features

* **User Authentication:** Secure user registration and login.
* **Interactive Map:** View all destinations on an interactive map.
* **User-Generated Content:** Users can add new destinations and upload photos.
* **Reviews and Ratings:** Users can leave reviews and ratings for destinations.

## Technologies Used

* **Frontend:** [ HTML, CSS, JavaScript, EJS]
* **Backend:** [ Node.js, Express.js]
* **Database:** [ MongoDB with Mongoose]
* **Image Storage:** [ Cloudinary]
* **Authentication:** [ Passport.js]
* **Map Integration:** [ Mapbox]

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js
* npm
* MongoDB

### Installation

1.  Clone the repo
    ```sh
    git clone [https://github.com/gopalmehtre/wanderlust.git](https://github.com/gopalmehtre/wanderlust.git)
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Create a `.env` file in the root directory and add the following:
    ```
    ATLASDB_URL=<YOUR_MONGODB_CONNECTION_STRING>
    CLOUD_NAME=<YOUR_CLOUDINARY_CLOUD_NAME>
    CLOUD_API_KEY=<YOUR_CLOUDINARY_API_KEY>
    CLOUD_API_SECRET=<YOUR_CLOUDINARY_API_SECRET>
    SECRET=<YOUR_SECRET_KEY>
    ```
4.  Run the application
    ```sh
    nodemon app.js
    ```

## Usage

Once the server is running, you can access the project at `http://localhost:8080`.


## Contact

Gopal Mehtre - gopalmehtre34@gmail.com

