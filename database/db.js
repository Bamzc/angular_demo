var mongoose = require("mongoose");//顶会议用户组件

mongoose.connect('mongodb://localhost/bamzc');
var Schema = mongoose.Schema; //创建模型

var userSchema = new Schema({
    name : String,
    password : String
});//定义了一个新的模型，但是此模式还未和users有关联
exports.user = mongoose.model("users",userSchema);//与users集合关联