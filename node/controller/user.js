//负责用户操作相关的业务逻辑
const UserModel = require("../model/user.js");

//node核心模块 :crypto加密
/*const crypto = require("crypto");*/

const register = (req, res) => {
	const {name, password, phone, email, address, type} = req.body; //post来的数据都在req.body里面

	//在数据库中查找是否有该用户
	UserModel.findOneUser({name}, (result) => {
		if(result.length > 0) {
			res.json({
				ret: true,
				data: false
			});
		} else {
			//加密
			//const hash = crypto.createHash("sha256"); //sha256算法的名字
			//hash.update(password);
			//saveUser中传入三个参数，（存储的用户信息，存储成功的回调，存储失败的回调）
			UserModel.saveUser({
				name,
				password/*: hash.digest('hex')*/, //加密后的密码 是不可逆的，不能还原(加密的过程是单向的)
				phone,
				email,
				address,
				type
			}, () => {
				//注册成功，给前端返回json数据  相当于v层
				res.json({
					ret: true,
					data: true
				})
			});
		}
	});
}

const login = (req, res) => {
	const {
		name,
		password,
		type
	} = req.body; //post来的数据都在req.body里面
	//加密
	//const hash = crypto.createHash("sha256"); //sha256算法的名字
	//hash.update(password);

	//在数据库中查找是否有该用户
	UserModel.findOneUser({
		name,
		password/*: hash.digest('hex')*/,
		type
	}, (result) => {
		if(result.length > 0) {
			req.session.Login = true;
			req.session.Loginname = name;
			req.session.Logintype = type;
			res.json({
				ret: true,
				data: {
					loginstatus: true,
					usertype: type
				}
			});
		} else {
			res.json({
				ret: true,
				data: {
					loginstatus: false
				}
			})
		}
	});
}

const isLogin = (req, res) => {
	if(req.session.Login){
		res.json({
			ret:true,
			data:{
				login:true,
				Uname:req.session.Loginname,
				Usertype: req.session.Logintype
			}
		})
	}else{
		res.json({
			ret:true,
			data:{
				login:false
			}
		});
	}
}


const Logout = (req, res) => {
	req.session.login = false;
	res.json({
		ret:true,
		data:{
			logout:true
		}
	});
}

const getDUserMess = (req, res) => {
	const name = req.body.username;
	UserModel.findOneUser({ name }, (result)=>{
		res.json({
			ret: true,
			data: {
				userdata: result
			}
		});
	});
}

const updateDUserMess = (req, res) => {
	const { _id, name, password, phone, email, address } = req.body;
	/*const hash = crypto.createHash("sha256");
	hash.update(password);*/
	UserModel.SaveDuserupdate({ 
		_id, 
		name,
		password/*: hash.digest("hex")*/,
		phone,
		email,
		address 
	}, (results) => {
		res.json({
			ret: true,
			data: true
		});
	});
}

const getAllUserMess = (req, res) => {
	UserModel.findAllUser((result)=>{
		res.json({
			ret: true,
			data: {
				allUserData: result
			}
		});
	});
}

const deleteUserMess = (req, res) => {
	const { Id } = req.body;
	UserModel.deleteUser(Id, ()=>{
		res.json({
			ret: true,
			delete: true
		});
	})
}

const saveUpdateUser = (req, res) => {
	const { id, name, password } = req.body;
	UserModel.findOneUser({ name }, (result) => {
		if(result.length > 0) {
			res.json({
				ret: true,
				data: {
					status: "already_exits"
				}
			});
		}else {
			UserModel.saveUpdateUser({id, name, password}, (result) => {
				res.json({
					ret: true,
					data: {
						status: "update_succ"
					}
				});
			});
		}
	});
}

const getUpdateMess = (req, res) => {
	const { Id } = req.body;
	UserModel.FindUpdateMess(Id, (result) => {
		res.json({
			ret: true,
			data: {
				updateMess: result
			}
		});
	});
}

module.exports = {
	register,
	login,
	isLogin,
	Logout,
	getDUserMess,
	updateDUserMess,
	getAllUserMess,
	deleteUserMess,
	saveUpdateUser,
	getUpdateMess
};