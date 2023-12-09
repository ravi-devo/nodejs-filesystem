const express = require("express");
const fs = require("fs");

const app = express();

app.post("/createFile", (req, res) => {

    fs.writeFile("./File_System/date-time.txt", `${new Date().toLocaleString()}`, (error, data) => {
        if (error) {
            return res.status(500).send({ message: "Error creating a file: ", error });
        }
        res.status(200).send({ message: "File created successfully." });
    });

});

app.listen(4000, () => {
    console.log("App is running on port 4000");
});