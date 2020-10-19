var exp = require('express');
var app= exp();
app.listen(8100, function (){
	console.log("Server started at port 8100");
});

app.get('/greet',function(request,response){
	response.send("<h1> Welcome to Web App </h1>");
});