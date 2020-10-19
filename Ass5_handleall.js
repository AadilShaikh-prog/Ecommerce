var exp = require('express');
var app = exp();

app.listen(8100,function(){
	console.log("Web Server Up and Running on port 8100")
});

app.get('/login/:name/:pwd',function(req,res){
	if(req.params.name == "object" && req.params.pwd == "knowit")
	{
			res.send("<h1> Welcome Know - IT </h1>");
	}
	else
	{
		res.send("<h1> Invalid User ! ! !  </h1>");
	}
	
});

app.get('/categories',function(req,res){
	
			res.sendFile(__dirname+"/cat.html");
	
	
});

app.get('*',function(req,res){
	
			res.send("Invalid Site ! ! ! ! ");
	
	
});