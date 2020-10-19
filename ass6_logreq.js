var fs=require('fs');
var ev=require('events');
var u=require('url');
var ee=new ev.EventEmitter();
ee.addListener('connecting',function(r,res)
{
	res.writeHead(200,{'Content-type':'text/html'});
	res.write("<h1>Welcome to login page</h1>");
});
ee.addListener('loginreq',function(r,res)
{
	if(r.url == '/favicon.ico')
	{
		return;
	}
	var ul=u.parse(r.url,true);
	if(ul.query.name=='aadil'&&ul.query.pwd=='aadil123')
	{
		res.write("<h1>Welocme "+ul.query.name+"</h1>");
	}
});
ee.addListener('logininfo',function(r)
{
	if(r.url == '/favicon.ico')
	{
		return;
	}
	var str = "Request logged in at "+new Date().toString()+"for request url "+r.url+"\n";
	fs.appendFile('log.txt',str,function(err)
	{
		if(!err)
		{
			console.log("request logging in file");
		}
	});
});
var http=require('http');
var ser=http.createServer(function (req,res){
	ee.emit('connecting',req,res);
	ee.emit('loginreq',req,res);
	ee.emit('logininfo',req);
	res.end();	
})
ser.listen(9000);
console.log("server started");