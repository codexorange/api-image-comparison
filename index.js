const express = require("express");
const fileupload = require("express-fileupload");
const app = express();

const apiRoutes = require("./routes/apiRoutes");

app.set("trust proxy", true);

app.use(fileupload());
app.use("/v1", apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT);
