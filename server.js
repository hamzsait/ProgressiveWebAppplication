const express = require("express");
const logger = require("morgan");
const routes = require("./routes")
const PORT = process.env.PORT || 3000;

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessdb", { 
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
 });

const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(routes)

 app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});