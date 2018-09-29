 var socket = new WebSocket('wss://pk.ciwong.com/', ["protocol1"]);
 var client = startScan();
 var robotTimer = '';
 var resource = [];
 var gamer = [];


 socket.addEventListener('open', function (event) {
   console.log('websocket is open now.')
   sendMsg({
     code: 0,
     client: client,
     msg: 'apply game'
   })
 })

 socket.addEventListener('message', function (event) {
   var data = event.data;
   console.log(data.msg)
   var obj = JSON.parse(data);
   switch (obj.code) {
     case 0:
       waitingGame(obj)
       break;
     case 1:
       startGame(obj)
       break;
     case 2:
       getMsg(obj)
       break;
     case 3:
       leaveGame(obj)
       break;
     default:
       waitingGame(obj)
   }
 })

 function sendMsg(message) {
   socket.send(JSON.stringify(message))
 }

 function waitingGame(data) {
   client.houseId = data.houseId;
   withRobot();
 }

 function startGame(data) {
   console.log(data)
   resource = data.resource;
   gamer = data.gamer;

   playing();
 }

 function leaveGame(data) {
   console.log('Game over!')
 }

 function withRobot() {
   robotTimer = setTimeout(function () {
     var message = {
       code: 3,
       houseId: client.houseId,
       userId: client.userId
     }
     sendMsg(message)
   }, 5000)
 }

 function playing() {
   var user_tmp = userHeaderTmp(gamer, client);
   clearTimeout(robotTimer);
   endScan();

   vsShow();
   userHeaderShow(user_tmp);

   resourceShow(resource);

 }

 function getMsg(data) {
   console.log(data)
 }

});