const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Serve static files (like our index.html) from the current directory
app.use(express.static(__dirname));

const uploadDir = path.join(__dirname, 'img');

// Handle image uploads
app.post('/upload', (req, res) => {
    const { image } = req.body;

    if (!image) {
        return res.status(400).json({ error: 'No image data received' });
    }

    const base64Data = image.replace(/^data:image\/jpeg;base64,/, "");
    const fileName = `photo_${Date.now()}.jpg`;
    const filePath = path.join(uploadDir, fileName);

    fs.writeFile(filePath, base64Data, 'base64', (err) => {
        if (err) {
            console.error("Failed to save image:", err);
            return res.status(500).json({ error: 'Failed to write file to disk' });
        }

        console.log(`[+] Image saved: ${fileName}`);
        res.json({ message: 'Image saved successfully to Termux!' });
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📁 Saving images to: ${uploadDir}`);
});
