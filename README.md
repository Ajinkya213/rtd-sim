# Real-Time Data Simulator

This project simulate a speed data over a Node.js server that continuously transmits simulated data over HTTP at one-second intervals. The data represents a simulated speed value associated with a Unix timestamp. This README provides an overview of the project's functionality, setup, and usage.

## Functionality

- **Data Generation:** The server generates a new data object every second.
- **Data Structure:** Each data object is a JSON structure with two properties:
    - `unixtimestamp`: A string representation of the current time in milliseconds since epoch (Unix timestamp).
    - `speed`: A randomly generated string representing the simulated speed value.
- **Transmission Protocol:** Data is transmitted over HTTP using the Express.js framework.
- **Transmission Frequency:** The server sends data every second using a scheduled CRON job managed by the `node-cron` library.

## Packages Used

- **express**: A Node.js framework for building web applications and APIs.
- **node-cron**: A library for scheduling tasks in Node.js using cron expressions.

### Setup

1. **Prerequisites:**
   - Node.js (version 12 or later) and npm (Node Package Manager) installed on your system. You can download them from [https://nodejs.org/](https://nodejs.org/).
2. **Project Installation:**
   - Clone or download this repository to your local machine.
   - Navigate to the project directory in your terminal.
   - Install the required dependencies:

     ```
     npm install
     ```

## Usage

1. **Run the Server:**
   - Start the server by running the following command in your terminal:

     ```bash
     node server.js
     ```

   - The server will begin transmitting data over HTTP on the default port (usually 3000).

2. **Access Data:**
   - Use an HTTP client (e.g., Postman, curl) to send GET requests to the server's endpoint (usually `http://localhost:3000/stream`).
   - You will receive a JSON response containing the latest data object every second.

**Example Usage (using curl):**

```bash
curl http://localhost:3000/stream
```

This command will retrieve the latest simulated data object from the server and print it to your terminal. You can continuously run this command to observe the real-time data stream.

**Customizing the Server**

- **Port:** To change the port on which the server listens, modify the `port` variable in the `server.js` file.
- **Data Generation:** You can customize the logic for generating data (e.g., modify the speed generation algorithm) in the `server.js` file.
- **Transmission Frequency:** The frequency of data transmission is controlled by the CRON job schedule in `server.js`. You can adjust the schedule using Cron expressions (refer to the `node-cron` documentation for details).

## Improved sections

- **Error Handling:** Consider implementing error handling mechanisms to gracefully handle potential issues during data generation or transmission.
- **Logging:** Logging the generated data or errors can be helpful for debugging and monitoring purposes.
