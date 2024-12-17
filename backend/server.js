const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const xlsx = require("xlsx");

const app = express();
const PORT = 3001; // Back-end port

app.use(bodyParser.json());

// Route to log login data
app.post("/log-login", (req, res) => {
    const { email, password } = req.body; // Capture email and password from the request
    const timestamp = new Date().toLocaleString();

    // File path for the Excel sheet
    const filePath = "login_data.xlsx";

    // Create or load the Excel workbook
    let workbook;
    if (fs.existsSync(filePath)) {
        workbook = xlsx.readFile(filePath);
    } else {
        workbook = xlsx.utils.book_new();
        const ws = xlsx.utils.json_to_sheet([]); // Initialize an empty sheet
        xlsx.utils.book_append_sheet(workbook, ws, "Logins");
    }

    // Add new login data
    const sheet = workbook.Sheets["Logins"];
    const data = xlsx.utils.sheet_to_json(sheet) || [];
    data.push({ Email: email, Password: password, LoginTime: timestamp });

    // Write the data back to the Excel file
    const newSheet = xlsx.utils.json_to_sheet(data);
    workbook.Sheets["Logins"] = newSheet;
    xlsx.writeFile(workbook, filePath);

    res.status(200).send("Login data saved successfully!");
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
