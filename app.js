var express = require("express");
var bodyparser = require("body-parser");
var morgan = require("morgan"); //log các request đến thay vì dùng middleware
var app = express();
var port = process.env.PORT || 3000; //set PORT

app.use("/assets", express.static(__dirname + "/public"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(morgan("dev"));

app.set("view engine", "ejs");

var excel = require("./config/readtkb");
var ji = require("./config/tojson");
var processData = require("./config/create");
var proc = require("./config/procu");

//cấu hình định tuyết (routed)
app.get("/",function(req, res) {
    res.render("index");
})

app.get("/tool", function(req, res) {
    var data = ji("./public/data2.xlsx");
    var hello = "halo";
    res.render("tool", {datat : data});
})

app.get("/danhsach", function(req, res) {
    var data = ji("./public/data2.xlsx");
    res.render("danhsach", {datat : data});
})

app.get("/tkb", function(req, res) {
    res.render("tkb");
})


app.post("/nhandulieu", function(req, res) {
    var array = ji("./public/data2.xlsx");
    var xxx = req.body.data;
    var monhoc = xxx.split('\n');
    //monhoc = Array.from(req.body.data).s;
    var ret = processData(monhoc, array);
    var tiet = [
        {name: "Tiết 1",
        time: "(7:30 - 8:15)"},
        {name: "Tiết 2",
        time: "(8:15 - 9:00)"},
        {name: "Tiết 3",
        time: "(9:00 - 9:45)"},
        {name: "Tiết 4",
        time: "(10:00 - 10:45)"},
        {name: "Tiết 5",
        time: "(10:45 - 11:30)"},
        {name: "Tiết 6",
        time: "(13:00 - 13:45)"},
        {name: "Tiết 7",
        time: "(13:45 - 14:30)"},
        {name: "Tiết 8",
        time: "(14:30-15:15)"},
        {name: "Tiết 9",
        time: "(15:30-16:15)"},
        {name: "Tiết 10",
        time: "(16:15-17:00)"}
    ];

    var ret2 = proc(ret);

    res.render("tkb", {data : ret2.yes, tiet: tiet, data2 : ret, data3 : ret2.no});

    //res.send(ret2.no);
})

app.listen(port, function() {
    console.log("App listening on port" + port);
})


//excel("D:\\data2.xlsx");
//ji("D:\\data2.xlsx");


