const ItemModel = require("../model/item.js");

const saveAddItemMess = (req, res) => {
	const {
		item_name,
		sub_itemname,
		low_reference,
		high_reference,
		measurement_units,
		create_date
	} = req.body;
	
	ItemModel.findOneItem({ item_name, sub_itemname }, (result) => {
		if(result.length > 0) {
			res.json({
				ret: true,
				data: false
			});
		}else {
			ItemModel.saveItem({
				item_name,
				sub_itemname,
				low_reference,
				high_reference,
				measurement_units,
				create_date
			},()=>{
				res.json({
					ret: true,
					data: true
				});
			});
		}
	});
}

const getAllItemMess = (req, res) => {
	ItemModel.getAllItemData((result)=>{
		res.json({
			ret: true,
			data: {
				itemList: result
			}
		});
	});
}

const getupdateItem = (req, res) => {
	const { id } = req.body;
	ItemModel.getupdateitem(id, (result)=>{
		res.json({
			ret: true,
			data: {
				updateItemData: result
			}
		});
	});
}

const saveupdateItem = (req, res) => {
	const { id, item_name, sub_itemname, low_reference, high_reference, measurement_units } = req.body;
	ItemModel.saveupdateitem({ 
		id, 
		item_name, 
		sub_itemname, 
		low_reference, 
		high_reference, 
		measurement_units 
	}, (result)=>{
		res.json({
			ret: true,
			update: true
		});
	});
}


const deleteItem = (req, res) => {
	const { id } = req.body;
	ItemModel.deleteitem(id, (result)=>{
		res.json({
			ret: true,
			data: {
				delete: true
			}
		});
	});
}

module.exports = {
	saveAddItemMess,
	getAllItemMess,
	getupdateItem,
	saveupdateItem,
	deleteItem
}
