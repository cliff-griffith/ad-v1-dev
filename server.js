const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Sample data for different domains
const domainData = {
    domain1: [
        { name: "Item 1", value: "Value 1" },
        { name: "Item 2", value: "Value 2" },
        { name: "Item 3", value: "Value 3" },
        { name: "Item 4", value: "Value 4" },
        { name: "Item 5", value: "Value 5" },
    ],
    domain2: [
        { name: "Item A", value: "Value A" },
        { name: "Item B", value: "Value B" },
        { name: "Item C", value: "Value C" },
        { name: "Item D", value: "Value D" },
        { name: "Item E", value: "Value E" },
    ]
};

// API endpoint to get data for a specific domain
app.get('/api/data', (req, res) => {
    const domain = req.query.domain;
    const data = domainData[domain];

    if (data) {
        res.json(data);
    } else {
        res.status(404).json({ error: 'Domain not found' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
