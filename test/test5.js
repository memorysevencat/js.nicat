
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

const net = require('net');
const port = 9000;
const host = '192.168.1.253';
const client= new net.Socket();
const child_process = require("child_process");

var _client=[];

const serverport = 8080;
const server = require('http').createServer();
const io = require('socket.io')(server);

if (cluster.isMaster) {
  require('os').cpus().forEach(function () {
    cluster.fork();
  });
} else if (cluster.isWorker) {
	io.on('connection', (client)=>{
	  client.on('event', (data)=>{});
	  client.on('disconnect', ()=>{
	  	_client.splice(_client.indexOf(client),1);
	  });
	  _client.push(client);
	  console.log("HOST:"+client.handshake.address+" PORT:"+serverport+" WID:"+cluster.worker.id+" TIME:"+client.handshake.time)
	});
	server.listen(serverport);
	
	client.setEncoding('binary');
	client.connect(port,host,()=>{
		client.on('data',(data)=>{
			//console.log(data)
			closure(_client,data);
		});
	});

}

process.on('uncaughtException',  (err)=> {
    console.log('Caught exception: ' + err);
});

function closure(_args,_datas) {
    function _func() {
		for (let i = 0,l = _args.length; i < l; i++) {
			process.nextTick(child_closure(_args[i],_datas));
  		};
    }
    return _func();
}

function child_closure(__args,__datas){
    function _cs(){

        __args.emit('event', { some: __datas });
    }
    return _cs;
}
