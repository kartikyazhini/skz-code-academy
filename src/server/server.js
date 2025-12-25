const express = require('express');
const { exec } = require('child_process');
const cors = require('cors');
const fs = require('fs'); // Node's File System module
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/run-python', (req, res) => {
    const { code } = req.body;

    // 1. Create a unique filename for this execution
    const tempFile = path.join(__dirname, `temp_${Date.now()}.py`);

    // 2. Write the user's code into the file
    fs.writeFile(tempFile, code, (err) => {
        if (err) return res.json({ success: false, output: "File Error" });

        // 3. Execute the file
        exec(`python "${tempFile}"`, (error, stdout, stderr) => {
            // 4. Delete the temp file after execution to keep things clean
            fs.unlink(tempFile, () => {});

            if (error || stderr) {
                return res.json({ success: false, output: stderr || error.message });
            }
            res.json({ success: true, output: stdout });
        });
    });
});

app.listen(5000, () => console.log('🚀 Server logic updated to File-System mode!'));