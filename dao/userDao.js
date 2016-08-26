var userModel = require('./dbModel');

module.exports = {
    index: function(req, response, next) {
        userModel.find({}, function (err, result, res) {
            if(err) return console.log(err);
            response.render('index', { result });
        })
    },
    create: function (req, response, next) {
        response.render('add',{});
    },
    add: function (req, response, next) {
        var newUser = {
            name: req.body.name,
            age: req.body.age
        }
        userModel.create(newUser, function (err, result, res) {
            if(err) return console.log(err);
            response.send('<strong style="color:red;margin-right:40px;">add:----------'+newUser.name+'----------Success</strong><a href="/">Back</a>');
        })
    },
    delete: function(req, response, next) {
        userModel.find({}, function(err, result, res) {
            response.render('del',{ result });
        })
    },
    del: function(req, response, next) {
        var reqId = {_id: req.body.user};
        userModel.remove(reqId, function(err, result, res) {
            if(err) return console.log(err);
            response.send('<strong style="color:red;margin-right:40px;">delete:----------'+reqId+'----------Success</strong><a href="/">Back</a>')
        });
    },
    update:function(req, response, next) {
        userModel.find({}, function(err, result, res) {
            response.render('update', { result });
        });
    },
    upd: function(req, response, next) {
        var reqId = {_id: req.body.user};
        userModel.update(reqId, query)
    }
};