//引入数据库连接
const mongoose = require("../utills/database.js");

//创建一张表，名字为tests, 该表中的字段有：test_name,test_date, test_peoplename, test_detail, test_result, test_remarks（如果没有tests表，创建一张tests表，如果有直接使用）
const Test = mongoose.model('test',{
	username: String,
	test_num: String,
	test_name: String,
	test_date: String,
	test_peoplename: String,
	test_detail: String,
	test_result: String,
	test_doctor: String,
	test_remarks:String
});
//保存数据
const saveTestEntering = (testInfo, succCb) => {
	const test = new Test(testInfo);
	test.save().then(() => {
		succCb();
	})
}

const findAllTestDetail = (succCb) => {
	Test.find({})
		.then((result)=>{
			succCb(result);
		});
}

const findOneDetailMess = (TestInfo, succCb) => {
	Test.find(TestInfo)
		.then((result) => {
			succCb(result);
		})
}

const saveUpdateDetailMess = (detailInfo, succCb) => {
	Test.update({_id: detailInfo.id}, detailInfo)
		.then((result)=>{
			succCb(result);
		});
}



module.exports = {
	saveTestEntering,
	findAllTestDetail,
	findOneDetailMess,
	saveUpdateDetailMess
}
