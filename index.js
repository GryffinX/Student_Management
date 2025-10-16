const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

const DATA_FILE = './data.json';


function readData() {
    if (!fs.existsSync(DATA_FILE)) return [];
    return JSON.parse(fs.readFileSync(DATA_FILE));
}

function writeData(data) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

app.post('/students', (req, res) => {
    const { name, roll, marks } = req.body;
    if (!name || !roll || marks == null)
    return res.status(400).json({ message: "Name, roll, and marks required" });

    const data = readData();

    if (data.find(s => s.roll === roll))
    return res.status(400).json({ message: "Roll number must be unique" });

    data.push({ name, roll, marks });
    writeData(data);

    res.status(201).json({ message: "Student added successfully" });
});

app.get('/students', (req, res) => {
    const data = readData();
    res.json(data);
});

app.get('/students/average', (req, res) => {
    const data = readData();
    if (data.length === 0) return res.json({ average: 0 });
    const avg = data.reduce((sum, s) => sum + s.marks, 0) / data.length;
    res.json({ average: avg });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

