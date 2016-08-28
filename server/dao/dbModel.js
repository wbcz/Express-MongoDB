// dao/userSqlMapping.js
// CRUD SQL语句
// var user = {
//     insert:'INSERT INTO users(id, user, pwd) VALUES(0,?,?)',
//     update:'update users set user=?, pwd=? where id=?',
//     delete: 'delete from users where id=?',
//     queryById: 'select * from users where id=?',
//     queryAll: 'select * from users'
// };
 
// module.exports = user;

'use strict'
var mongoose = require('mongoose')
// 连接mongodb
mongoose.connect('mongodb://localhost/test')
// 实例化连接对象
var db = mongoose.connection
db.on('error', console.error.bind(console, '连接错误：'))
db.once('open', function() {
  console.log('MongoDB连接成功！！')
})
// 创建schema
var classSchema = new mongoose.Schema({
    name: String,
    age: Number
})
// 创建model
var classModel = mongoose.model('users', classSchema) // newClass为创建或选中的集合

module.exports = classModel;