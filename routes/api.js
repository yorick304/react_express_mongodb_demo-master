var express = require('express');
var router = express.Router();
var db = require("mongoskin").db("mongodb://localhost:27017/dota_new_year");

var coll = db.collection('the_data');
var app = require('../app');

//获得数据
router.get('/', function(req, res, next) {
    coll.find({
        key : "dota"
    }).toArray(function(err, result) {
        if (err)
            throw err;
        if (result.length == 0) {
            var newData = {
                key : "dota",
                dates : [ {
                    name : "腊月二十八"
                }, {
                    name : "除夕"
                } ],
                persons : [ {
                    name : "gg",
                    oks : {
                        "腊月二十八" : true,
                        "除夕" : false
                    }
                }, {
                    name : "yyl",
                    oks : {
                        "腊月二十八" : false,
                        "除夕" : false
                    }
                } ]
            };
            coll.insert(newData);
            result = [ newData ];
        }
        res.json(result[0]);
    });
});

//更新数据
router.post("/setData", function(req, res, next) {
    var str = req.body.str;
    var json = JSON.parse(str);
    coll.update({
        key : "dota"
    }, {
        $set : {
            dates : json.dates,
            persons : json.persons
        }
    }, function(err, result) {
        if (err){
            throw err;
        }
        else{
            res.json({
                "msg" : "更新成功！"
            });
            //把修改信息广播出去
            global.the_io.sockets.emit("change", json);
        }
    })
});

module.exports = router;