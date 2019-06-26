const OrderModel = require("../model/order.js");

const saveOnlineOrderMess = (req, res) => {
	const {
		username,
		medical_num,
		medical_name,
		medical_birth,
		medical_sex,
		medical_item,
		medical_date,
		contact_name, 
		contact_phone,
		contact_address 
	} = req.body;
	
	OrderModel.saveOnlineOrder({
		username,
		medical_num,
		medical_name,
		medical_birth,
		medical_sex,
		medical_item,
		medical_date,
		contact_name, 
		contact_phone,
		contact_address 
	},()=>{
		res.json({
			ret: true,
			data: true
		});
	});
}

const getonlineorderMess = (req, res) => {
	OrderModel.getAllOrderMess((result)=>{
		res.json({
			ret: true,
			data: {
				allorderMess: result
			}
		});
	});
}

const agreeorderStatus = (req, res) => {
	const { id, audit_status } = req.body;
	OrderModel.updateOrderStatus({ id, audit_status },(result)=>{
		res.json({
			ret: true,
			agree: true,
			id:id
		});
	});
}

const refuseorderStatus = (req, res) => {
	const { id, audit_status } = req.body;
	OrderModel.updateOrderStatus({ id, audit_status },(result)=>{
		res.json({
			ret: true,
			agree: true,
			id:id
		});
	});
}

const deleteOrdermess = (req, res) => {
	const { id } = req.body;
	OrderModel.deleteOrder(id, (result)=>{
		res.json({
			ret: true,
			delete: true
		});
	});
}


module.exports = {
	saveOnlineOrderMess,
	getonlineorderMess,
	agreeorderStatus,
	refuseorderStatus,
	deleteOrdermess
}
