const express = require("express");
const fs = require("fs");

const app = express();

let currentdate = new Date();
let datetime = currentdate.getDate() + "-" + (currentdate.getMonth()+1)
    + "-" + currentdate.getFullYear() + "_"
    + currentdate.getHours() + "h"
    + currentdate.getMinutes() + "min";
// console.log("Date Time: ", datetime);

app.post("/createFile", (req, res) => {
    fs.writeFile(`./File_System/${datetime}.txt`, `${new Date().toLocaleString()}`, (error, data) => {
        if (error) {
            return res.status(500).send({ message: "Error creating a file: ", error });
        }
        res.status(200).send({ message: "File created successfully." });
    });

});

app.get("/getFile", (req, res) => {

    fs.readdir("./File_System", (error, data) => {
        if (error) {
            return res.status(400).send({ message: "Error fetching the file", error });
        }
        res.status(200).send({ message: "File fetched successfully", data });
        console.log("Data: ", data);
    })
})

app.listen(4000, () => {
    console.log("App is running on port 4000");
});