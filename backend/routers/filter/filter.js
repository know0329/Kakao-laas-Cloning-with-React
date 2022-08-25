const filter = (req, res) => {
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
};
module.exports = filter;
