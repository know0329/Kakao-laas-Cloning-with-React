const path = require("path");
const express = require("express");
const cors = require("cors");
const router = require("./routers");
const server = express();
const port = process.env.PORT || 9000;

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(
	cors({
		origin: "http://localhost:3000",
		credentials: true,
	})
);

server.use("/", router);
var db;
const MongoClient = require("mongodb").MongoClient;
MongoClient.connect(
	"mongodb+srv://imo:imo@laas-db.zdf6u.mongodb.net/?retryWrites=true&w=majority",
	function (err, client) {
		if (err) {
			return console.log(err);
		}
		db = client.db("laas-db");

		server.listen(port, () => console.log(`Listening on port ${port}`));
	}
);
