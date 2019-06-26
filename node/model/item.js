//引入数据库连接
const mongoose = require("../utills/database.js");

/*
 * 
 创建一张表，名字为items, 该表中的字段有：item_name, sub_itemname, low_reference, high_reference, measurement_units （如果没有items表，创建一张items表，如果有直接使用）
*
*/
const Item = mongoose.model('item',{
	item_name: String,
	sub_itemname: String,
	low_reference: Number,
	high_reference: Number,
	measurement_units: String,
	create_date: String
});
//保存数据
const saveItem = (itemInfo, succCb) => {
	const item = new Item(itemInfo);
	item.save().then(() => {
		succCb();
	})
}

const getAllItemData = (succCb) => {
	Item.find({})
		.then((result)=>{
			succCb(result);
		});
}

/*
const updateOrderStatus = (statusInfo, succCb) => {
	Order.update({_id: statusInfo.id}, statusInfo)
		.then((result)=>{
			succCb(result);
		});
}*/

const getupdateitem = (id, succCb) => {
	Item.findById(id)
		.then((result)=>{
			succCb(result);
		});
}

const saveupdateitem = (ItemInfo, succCb) => {
	Item.update({_id: ItemInfo.id}, ItemInfo)
		.then((result)=>{
			succCb(result);
		});
}

const deleteitem = (id, succCb) => {
	Item.findByIdAndRemove(id)
		.then((result)=>{
			succCb(result);
		});
}

const findOneItem = (iteminfo, succCb) => {
	Item.find(iteminfo).then((result)=>{
		succCb(result);
	});
}

module.exports = {
	saveItem,
	getAllItemData,
	getupdateitem,
	saveupdateitem,
	deleteitem,
	findOneItem
}
