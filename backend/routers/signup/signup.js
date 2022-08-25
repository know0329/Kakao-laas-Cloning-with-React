var db;
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
const signup = async (req, res) => {
	const state = req.body;
	console.log(state);
	console.log("도착");
	db.collection("users")
		.find({
			userid: state.userid,
		})
		.toArray(
			await function (err, docs) {
				if (err) {
					console.log(err);
					console.log("오류");
					return;
				}
				if (docs.length > 0) {
					console.log("검색결과 : 있음");
					res.send({ result: false });
				} else {
					console.log("일치하는 게 없음");
					db.collection("users").insertOne(state);
					res.send({ result: true });
				}
			}
		);
};
module.exports = signup;
