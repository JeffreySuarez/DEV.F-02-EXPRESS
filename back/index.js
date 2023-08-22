const express = require("express");
const cors = require("cors");
const server = express();
const port = 8080;
const bodyParser = require("body-parser");

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
