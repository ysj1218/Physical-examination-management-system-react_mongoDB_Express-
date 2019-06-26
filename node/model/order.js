//引入数据库连接
const mongoose = require("../utills/database.js");

/*
 * 
 创建一张表，名字为orders, 该表中的字段有：medical_num,medical_name,medical_birth,medical_sex,medical_item,medical_date,contact_name, contact_phone,
contact_address （如果没有orders表，创建一张orders表，如果有直接使用）
*
*/
const Order = mongoose.model('order',{
	username: String,
	medical_num: String,
	medical_name: String,
	medical_birth: String,
	medical_sex: String,
	medical_item: String,
	medical_date: String,
	contact_name: String, 
	contact_phone: String,
	contact_address: String,
	audit_status: String
});
//保存数据
const saveOnlineOrder = (orderInfo, succCb) => {
	const order = new Order(orderInfo);
	order.save().then(() => {
		succCb();
	})
}

const getAllOrderMess = (succCb) => {
	Order.find({})
		.then((result)=>{
			succCb(result);
		});
}

const updateOrderStatus = (statusInfo, succCb) => {
	Order.update({_id: statusInfo.id}, statusInfo)
		.then((result)=>{
			succCb(result);
		});
}

const deleteOrder = (id, succCb) => {
	Order.findByIdAndRemove(id)
		.then((result)=>{
			succCb(result);
		});
}

module.exports = {
	saveOnlineOrder,
	getAllOrderMess,
	updateOrderStatus,
	deleteOrder
}
