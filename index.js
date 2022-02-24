const express = require("express");
const path = require('path');
const app = express();
const port = process.env.PORT;

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname+'/views/index.html'));
});

app.listen(port, () =>
  console.log("Hello world app listening on port ${port}!")
);

