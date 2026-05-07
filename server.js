const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://mohamedkhalith04042006_db_user:Khalith%40123@ac-hehu8tv-shard-00-00.4hinyfp.mongodb.net:27017,ac-hehu8tv-shard-00-01.4hinyfp.mongodb.net:27017,ac-hehu8tv-shard-00-02.4hinyfp.mongodb.net:27017/portfolioDB?ssl=true&replicaSet=atlas-izczws-shard-0&authSource=admin&appName=Cluster0")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("Portfolio Backend Running Successfully");
});

app.post("/contact", (req, res) => {

    const { name, email, message } = req.body;

    console.log("New Contact Message:");
    console.log(name);
    console.log(email);
    console.log(message);

    res.json({
        success: true,
        message: "Message received successfully"
    });

});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});