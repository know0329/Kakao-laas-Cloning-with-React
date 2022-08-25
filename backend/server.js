const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 9000;
const mongoose = require("mongoose");
var db;
const MongoClient = require("mongodb").MongoClient;
MongoClient.connect(
	"mongodb+srv://imo:imo@laas-db.zdf6u.mongodb.net/?retryWrites=true&w=majority",
	function (err, client) {
		if (err) {
			return console.log(err);
		}
		db = client.db("laas-db");

		app.listen(port, () => console.log(`Listening on port ${port}`));
	}
);
/*mongoose.connect("mongodb+srv://imo:imo@laas-db.zdf6u.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));
*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // askii형태 데이터만 주고 받는데, 한글같은건 다른 문자로 치환해야함. 이걸 인코딩해서 처리하는걸 이렇게 표기함
app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);

//검색 api
app.post("/search", (req, res) => {
	const state = req.body;
	console.log(state);
	console.log("도착");
	db.collection("search")
		.find({
			date: state.date,
			productType: state.productType,
			containerLocation: state.containerLocation,
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
					},
				]);
			}
		});
});

//상세검색 api

app.post("/filter", (req, res) => {
	list = {};
	const state = req.body;
	console.log(state);
	console.log(Object.keys(state.isEmpty).length);
	for (let i = 0; i < Object.keys(state.isEmpty).length; i++) {
		key = Object.values(state.key)[i];
		value = Object.values(state.value)[i];
		if (!Object.values(state.isEmpty)[i]) {
			list[key] = value;
		}
	}
	keyList = Object.keys(list);
	valueList = Object.values(list);
	/*let filterObject = {};
	keyList.forEach((key, index) => {
		filterObject[key] = valueList[index];
	});
	*/
	db.collection("search")
		.find({
			...list,
			"containerINFO.scale": { $lte: state.essential.optionScale },
			date: state.essential.date,
			productType: state.essential.productType,
			containerLocation: state.essential.containerLocation,
		})
		.toArray(function (err, docs) {
			if (err) {
				console.log(err);
				console.log("오류");
				return;
			}
			if (docs.length > 0) {
				console.log("검색결과 : 있음");
				res.send({ success: true, list: docs });
				console.log(docs, "보냄");
			} else {
				console.log("검색결과 : 없음");
				res.send({ success: false });
			}
		});
});

//회원가입 api
app.post("/signup", (req, res) => {
	const state = req.body;
	console.log(state);
	console.log("도착");
	db.collection("users")
		.find({
			userid: state.userid,
		})
		.toArray(function (err, docs) {
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
		});
});
const secretKey = "secretKey";
const jwt = require("jsonwebtoken");
//로그인 api - jwt
app.post("/login", (req, res) => {
	db.collection("users")
		.find({
			userid: req.body.userid,
			password: req.body.password,
		})
		.toArray(function (err, docs) {
			if (docs.length > 0) {
				const privateClaim = req.body;
				console.log(privateClaim);
				const accessToken = jwt.sign(
					{
						id: privateClaim.userid,
						password: privateClaim.password,
					},
					secretKey,
					{ subject: "IMOJWTTOKEN", expiresIn: "5m", issuer: "IMO" }
				);
				const refreshToken = jwt.sign({}, secretKey, {
					subject: "IMOJWTTOKEN",
					expiresIn: "14d",
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
				res
					.status(401)
					.send({ success: false, message: "비밀번호가 일치하지 않습니다." });
			}
		});
});

//accesstoken 검증

function verifyToken(token) {
	let decoded = null;
	try {
		decoded = jwt.verify(token, secret);
		return {
			ok: true,
			id: decoded.id,
			role: decoded.role,
		};
	} catch (err) {
		return {
			ok: false,
			message: err.message,
		};
	}
}

app.post("./login", (req, res) => {
	const result = verifyToken(req.body);
	if (result.ok) {
		res.status(200).send({ success: true });
	} else {
		res
			.status(401)
			.send({ success: false, message: "Access 토큰 기간이 만료되었습니다." });
	}
});
//app.listen(port, () => console.log(`Listening on port ${port}`));

// redux-toolkit
app.post("/search/category", (req, res) => {
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
});
