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

const category = (req, res) => {
	const state = req.body;
	console.log(Object.keys(state)[0]);
	console.log("도착");
	db.collection("search")
		.find({
			productType: Object.keys(state)[0],
		})
		.toArray(function (err, docs) {
			if (err) {
				console.log(err);
				console.log("오류");
				return;
			}
			if (docs.length > 0) {
				console.log("검색결과 : 있음");
				res.send(docs);
				console.log(docs, "보냄");
			} else {
				console.log("일치하는 게 없음", docs);
				res.send([
					{
						date: ["없음", "없음"],
						productType: "없음",
						containerLocation: "없음",
						containerINFO: {
							name: "",
							scale: 0,
							operationDays: "",
						},
					},
				]);
			}
		});
};
module.exports = category;
