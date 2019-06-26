var express = require('express');

var router = express.Router();
const userController = require("../controller/user.js");
const testController = require("../controller/test.js");
const orderController = require("../controller/order.js");
const itemController = require("../controller/item.js");

//登录注册路由
router.post("/user/register",userController.register);
router.post("/user/login",userController.login);
router.get("/user/isLogin",userController.isLogin);
router.get("/user/Logout",userController.Logout);

//普通用户
router.post("/domestic/getDUserMess", userController.getDUserMess);
router.post("/domestic/updateDUserMess", userController.updateDUserMess);

//获得所有用户信息
router.get("/user/getAlluserMess", userController.getAllUserMess);

//删除用户信息
router.post("/user/delateUserMess", userController.deleteUserMess);

//修改用户信息
router.post("/user/saveUpdateUser", userController.saveUpdateUser);

//获得要修改的用户信息
router.post("/user/getupdateMess", userController.getUpdateMess);

//医务人员体检信息录入
router.post("/examination/saveTestEnteringMess", testController.saveTestEnteringMess);

//医务人员对于体检明细查看
router.post("/examination/getTestdetailMess", testController.getTestdetailMess);

//修改体检明细信息
router.post("/examination/getUpdateTestMess", testController.getUpdateTestMess);

//保存修改后的体检明细信息
router.post("/examination/saveUpdateTestmess", testController.saveUpdateTestmess);

//保存在线预约信息
router.post("/order/saveOnlineOrderMess", orderController.saveOnlineOrderMess);

//获取教职工在线预约信息
router.get("/order/getonlineorderMess", orderController.getonlineorderMess);

//医务人员同意在线预约申请
router.post("/order/agreeorderStatus", orderController.agreeorderStatus);

//医务人员拒绝在线预约申请
router.post("/order/refuseorderStatus", orderController.refuseorderStatus);

//系统管理员管理预约信息-删除当条预约信息
router.post("/order/deleteOrdermess", orderController.deleteOrdermess);

//保存体检项目信息
router.post("/item/saveAddItemMess", itemController.saveAddItemMess);

//获取所有的项目信息
router.get("/item/getAllItemMess", itemController.getAllItemMess);

//修改体检项目信息
router.post("/item/saveupdateItem", itemController.saveupdateItem);

//删除当条体检信息
router.post("/item/deleteItem", itemController.deleteItem);

router.post("/item/getupdateItem", itemController.getupdateItem);


module.exports = router;
