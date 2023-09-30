const express = require("express");

const app = express();
const PORT = process.env.PORT || 3030;

// For testing purposes
app.get("/", (req, res) => { 
    res.send("<h2>Batches:</h2>");
});

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});
