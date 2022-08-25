const jwt_decode = require("jwt-decode");
function verifyToken(token) {
	console.log("1");
	let decoded = null;
	decoded = jwt_decode(token);
	console.log(Date.now() / 1000 - decoded.exp);
	if (Date.now() / 1000 - decoded.exp >= 0) {
		return { success: false, message: "토큰을 갱신하세요" };
	} else {
		return { success: true };
	}
}

const accessverify = async (req, res) => {
	const state = req.body;
	console.log(state.access);
	console.log("도착");
	if (state !== undefined && state.access !== undefined) {
		const result = verifyToken(state.access);
		res.send(result);
	} else {
		res.send({ success: false, message: "로그인 하세요" });
	}
};
module.exports = accessverify;
