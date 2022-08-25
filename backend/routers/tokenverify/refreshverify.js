const MongoClient = require("mongodb").MongoClient;
MongoClient.connect(
	"mongodb+srv://imo:imo@laas-db.zdf6u.mongodb.net/?retryWrites=true&w=majority",
	function (err, client) {
		if (err) {
			return console.log(err);
		}
		db = client.db("laas-db");
	}
);

const secretKey = "secretKey";
const jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");
//var data = { success: null, access: "" };
function issueToken(state, res) {
	console.log("3");
	const decoded = jwt_decode(state.refresh);
	console.log(Date.now() / 1000 - decoded.exp);
	if (Date.now() / 1000 - decoded.exp >= 0) {
		res.send({ success: false, message: "로그인 하세요" });
	} else {
		console.log("4");
		db.collection("users")
			.find({
				username: state.username,
			})
			.toArray(function (err, docs) {
				console.log(docs[0]);
				console.log("------------------");
				console.log(docs[0].userid);
				console.log("------------------");
				const accessToken = jwt.sign(
					{
						id: docs[0].userid,
						password: docs[0].password,
					},
					secretKey,
					{ subject: "IMOJWTTOKEN", expiresIn: "10s", issuer: "IMO" }
				);
				console.log(accessToken);
				const data = { success: true, access: accessToken };
				console.log(data);
				res.send(data);
			});
	}
}

const refreshverify = async (req, res) => {
	console.log("2");
	const state = req.body;
	console.log(state.refresh);
	if (state.refresh !== undefined) {
		issueToken(state, res);
	} else {
		res.send({ success: false, message: "로그인 하세요" });
	}
};
module.exports = refreshverify;
