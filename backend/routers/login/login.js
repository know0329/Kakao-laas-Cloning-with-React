const MongoClient = require("mongodb").MongoClient;
MongoClient.connect(
	"mongodb+srv://계정명@DB명.zdf6u.mongodb.net/?retryWrites=true&w=majority",
	function (err, client) {
		if (err) {
			return console.log(err);
		}
		db = client.db("DB명");
	}
);
const login = async (req, res) => {
	const secretKey = "secretKey";
	const jwt = require("jsonwebtoken");
	db.collection("users")
		.find({
			userid: req.body.userid,
			password: req.body.password,
		})
		.toArray(
			await function (err, docs) {
				if (docs.length > 0) {
					const privateClaim = req.body;
					console.log(privateClaim);
					const accessToken = jwt.sign(
						{
							id: privateClaim.userid,
							password: privateClaim.password,
						},
						secretKey,
						{ subject: "IMOJWTTOKEN", expiresIn: "10s", issuer: "IMO" }
					);
					const refreshToken = jwt.sign({}, secretKey, {
						subject: "IMOJWTTOKEN",
						expiresIn: "5m",
						issuer: "IMO",
					});
					tokens = {
						accessToken: accessToken,
						refreshToken: refreshToken,
					};
					const data = {
						success: true,
						tokens: tokens,
						username: docs[0].username,
					};
					console.log("토큰생성\n", data);
					res.status(200).send(data);
				} else {
					console.log("실패");
					res.status(401).send({
						success: false,
						message: "로그인 정보가 일치하지 않습니다.",
					});
				}
			}
		);
};

module.exports = login;
