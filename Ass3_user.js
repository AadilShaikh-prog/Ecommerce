//Modifying this for git use
var exp= require('express');
var app = exp();
app.listen(8100,function (){
	console.log("Web Server Up and Running on port 8100");
});

app.get('/login',function (req,res){
	if(req.query.name == "object" && req.query.pwd == "knowit")
	{
		res.send("<h1> Welcome Know - IT </h1>");
	}
	else
	{
		res.send("<h1> Invalid User ! ! !  </h1>");
	}
	
});
