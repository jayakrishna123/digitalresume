var express=require('express');
var bodyParser=require('body-parser');
var app=express();

app.use(bodyParser.urlencoded({
  extended:true
}));

app.use('/',express.static(__dirname+'/static'))
app.get('/',(req,res)=>{
res.sendfile(__dirname+'/static/index.html');
});

app.get('/getdata',(req,res)=>{
  console.log(req.query.name)
  console.log(req.query.msg)
  res.send("thank you");

})

app.listen(3000,()=>{
  console.log("listening");
});
// window.onscroll = function() {myFunction()};
        
// // function myFunction() {
// //   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
// //   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
// //   var scrolled = (winScroll / height) * 100;
// //   document.getElementById("myBar").style.width = scrolled + "%";
// // }
