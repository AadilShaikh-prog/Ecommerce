var http = require('http');
var events = require('events');
var fs = require('fs');
var ee = new events.EventEmitter();
ee.addListener('logging',function (r)
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
			console.log("Logging of request done ! ! ! ");
		}
		else 
		{
			console.log("Error for logging of request  ! ! ! ");
		}
	});
});
ee.addListener('connecting',function(req,res)
{
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write("Request Logging is being done ! ! ! ");
	
});
var server = http.createServer( function (req,res)
{
	ee.emit('connecting',req,res);
	ee.emit('logging',req);	
	res.end();
});

	server.listen(9000);
	console.log("Server started");