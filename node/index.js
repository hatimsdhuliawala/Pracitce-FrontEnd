var http=require("http");
var server=http.createServer(function(request,response){
	response.end("Hiii Rakesh Whats up");
})
server.listen('3000',function(){
console.log("helloe world");	
})
