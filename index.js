require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;

const app = express();

const corsOptions = {
    origin: "http://localhost:5000"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
const db = require("./db/server.js");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Can't connect to the database!", err);
        process.exit();
    });

// app.get("/", (req, res) => {
//     res.json({
//         message: "Welcome to the REST API"
//     });
// });


const router = require("./routes/api.js");
app.use("/api", router);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});