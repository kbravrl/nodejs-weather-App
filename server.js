const express = require("express");
const app = express();

const userRoutes = require("./routes/users");

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(userRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
