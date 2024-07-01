const express = require('express');
const app = express();
const cron = require('node-cron');


const simulateSpeed = () => {
    return Math.floor(Math.random() * 51);
};

app.get('/stream', (req, res) => {
    // Set headers for Server-Sent Events (SSE)
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    const sendData = () => {
        const data = {
            time: Date.now().toString(),
            speed: simulateSpeed().toString()
        };
        res.write(`${JSON.stringify(data)}\n`);
        
    };

    cron.schedule('* * * * * *', () => {
        sendData();
      });

    req.on('close', () => {
        res.end();
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
