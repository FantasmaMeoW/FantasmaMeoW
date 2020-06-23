var work = Backbone.Model.extend({
  initialize: function(){
      // console.log("work");
  }
});
var _Works = Backbone.Collection.extend({
    model: work,
    initialize: function(){
        console.log("Collection Init");
    }
});
var Works = new _Works();

var root = 'images/';
var data = [
    {
        "src" : root + "150202RememberKog.jpg",
        "name" : "Mr.Remember",
        "type" : "illu"
    },      
    {
        "src" : root + "150325Fei.jpg",
        "name" : "ICHIBAN",
        "type" : "illu"
    },
    {
        "src" : root + "130314ALI.jpg",
        "name" : "Ari",
        "type" : "illu"
    },   
    {
        "src" : root + "150504.jpg",
        "name" : "winds_pic",
        "type" : "illu"
    },       
    {
        "src" : root + "150411MMD_SUB.png",
        "name" : "MMD",
        "type" : "illu"
    },
    {
        "src" : root + "150414g.jpg",
        "name" : "greentea",
        "type" : "illu"
    },    
    {
        "src" : root + "web-01.jpg",
        "name" : "UI Design + implement",
        "type" : "web",
        "weburl" : "http://radar.atm.ncu.edu.tw/web/index.html"
    },
    {
        "src" : root + "main_1.jpg",
        "name" : "My Game",
        "type" : "web",
        "weburl" : "https://github.com/FantasmaMeoW/MLite"
    }
];

// set Model
Works.set(data);
