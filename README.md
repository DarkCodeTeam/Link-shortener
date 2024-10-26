# Short URL Service

A simple yet powerful URL shortening service built with Node.js, Express, and MongoDB. This project leverages the [nanoid](https://github.com/ai/nanoid) library for generating unique short URLs, ensuring fast performance and minimal collision risk.

## Features

- **URL Shortening**: Convert long URLs into short, easy-to-share links.
- **Redirect**: Shortened URLs automatically redirect to their original URLs.
- **User-Friendly**: Simple and intuitive interface for users to shorten URLs.
- **Responsive Design**: Mobile-friendly layout for seamless use on all devices.
  
## Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB
- **URL Generation**: [nanoid](https://github.com/ai/nanoid)
- **Environment Variables**: `dotenv` for managing sensitive information

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/short-url-service.git
   cd short-url-service
2. **Install Dependencies**:
   ```bash
    npm install
3. **Create a `.env` file in the root directory and add your environment variables**:
   ```bash
   PORT=3001
    MONGO_URI=your_mongodb_connection_string
4. **Start the Server**:
   ```bash
   npm start
5. **Access the Application**:
- Open your web browser and go to http://localhost:3001.

## Usage
- Enter a long URL in the input field and click "Shorten URL".
- The generated short URL will be displayed, which you can click to be redirected to the original URL.
## Contributing
Contributions are welcome! Feel free to submit a pull request or open an issue if you find any bugs or have feature requests.
## Author 
[DarkCodeTeam](https://github.com/DarkCodeTeam/)
### Notes:
- Replace `DarkCodeTeam` with your actual GitHub username.
- Update the `MONGO_URI` in the installation instructions to reflect your actual connection string.
- Feel free to add any additional sections or modify existing ones to better reflect your project's goals and features!

