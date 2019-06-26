//引入数据库连接
const mongoose = require("../utills/database.js");

//创建一张表，名字为users,表中有name和password,type（如果没有users表，创建一张users表，如果有直接使用）
const User = mongoose.model('user',{
	name:String,
	password:String,
	phone: String,
	email: String,
	address: String,
	type: String
});
//保存数据
const saveUser = (userInfo,succCb) => {
	const user = new User(userInfo);
	user.save().then(() => {
		succCb();
	})
}

const findOneUser = (userInfo,succCb) => {
	User.find(userInfo).then((result) => {
		succCb(result);
	})
}

const SaveDuserupdate = (DUserMessInfo, succCb) => {
	User.update({ _id: DUserMessInfo._id }, DUserMessInfo)
		.then((result) => {
			succCb(result);
		});
}

const findAllUser = (succCb) => {
	User.find({})
		.then((result)=>{
			succCb(result);
		});
}

const deleteUser = (Id, succCb) => {
	User.findByIdAndRemove(Id)
		.then((result)=>{
			succCb(result);
		});
}

const saveUpdateUser = (userInfo, succCb) => {
	User.update({_id: userInfo.id}, userInfo)
		.then((result)=>{
			succCb(result);
		});
}

const FindUpdateMess = (Id, succCb) => {
	User.findById(Id)
		.then((result)=>{
			succCb(result);
		});
}

module.exports = {
	saveUser,
	findOneUser,
	SaveDuserupdate,
	findAllUser,
	deleteUser,
	saveUpdateUser,
	FindUpdateMess
}
