const TestModel = require("../model/test.js");

const saveTestEnteringMess = (req, res) => {
	const { username, test_num, test_name, test_date, test_peoplename, test_detail, test_result, test_doctor, test_remarks  } = req.body;
	TestModel.findOneDetailMess({test_num, test_name, test_date, test_detail}, (result) => {
		if(result.length > 0) {
			res.json({
				ret: true,
				status: false
			});
		} else {
			TestModel.saveTestEntering({
				username,
				test_num,
				test_name, 
				test_date, 
				test_peoplename, 
				test_detail, 
				test_result, 
				test_doctor, 
				test_remarks
			}, () => {
				res.json({
					ret: true,
					status: true
				})
			});
		}
	});
}

const getTestdetailMess = (req, res) => {
	const { test_num } = req.body;
	
	TestModel.findOneDetailMess({ test_num }, (result) => {
		if(result.length > 0) {
			res.json({
				ret: true,
				data: {
					searchData: result
				}
			});
		} else {
			res.json({
				ret: true,
				data: false
			})
		}
	});
}

const getUpdateTestMess = (req, res) => {
	const { _id } = req.body;
	console.log(_id);
	TestModel.findOneDetailMess({ _id }, (result) => {
		res.json({
			ret: true,
			data: {
				searchData: result
			}
		});
	});
}

const saveUpdateTestmess = (req, res) => {
	const { id, test_name, test_date, test_peoplename, test_detail, test_result, test_doctor, test_remarks } = req.body;
	TestModel.saveUpdateDetailMess({
		id, 
		test_name, 
		test_date, 
		test_peoplename, 
		test_detail, 
		test_result, 
		test_doctor, 
		test_remarks
	}, (result) => {
		res.json({
			ret: true,
			data: true
		});
	});
}

module.exports = {
	saveTestEnteringMess,
	getTestdetailMess,
	getUpdateTestMess,
	saveUpdateTestmess
}
