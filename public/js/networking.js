//TODO: Remove QR code when connected
//TODO: Remove debug co-ordinates.

var io = io.connect();

io.on('connect', function() {
	
	// Hacking function to create a class 
	function Player(name) {
		this.name = name;
		this.socket_id 	= null,
		this.id = Math.random().toString(36).slice(2),
		
		this.ready = function(value) {
			
			if(value === true){
				document.getElementById(this.name + "_status").innerText = "Connected";
			}
			
			else if(value === false){
				document.getElementById(this.name + "_status").innerText = "Disconnected";
			}
		};
		
		//TODO: Replace it with canvas code 
		//to actually move the paddle
		this.move = function(direction) {
			updatePaddle(direction);
		}
		
		// Function to create and append a QR code.
		// Takes div as argument.
		this.appendQRCode = function(div) {
			var qrcode = new QRCode(div);
			qrcode.makeCode(window.location.href + io.id + '/' + this.id);
		};
	};
	
	// create two obejcts for two players
	var player1 = new Player("player1");
	var player2 = new Player("player2");
	
	//Create two QR codes
	player1.appendQRCode("player1_qr");
	player2.appendQRCode("player2_qr");
	
	//#DEBUG 
	document.getElementById("player1_status").innerText = io.id + '/' + player1.id;
	document.getElementById("player2_status").innerText = io.id + '/' + player2.id;
	
	io.on('controller_connected', function(controller_socket_id, controller_id) {
		
		if(player1.id === controller_id){
			player1.socket_id = controller_socket_id;
			player1.ready(true);
		}
		
		else if(player2.id === controller_id){
			player2.socket_id = controller_socket_id;
			player2.ready(true);
		}
		
		io.on('move', function(direction, controller_id) {
			if(player1.id === controller_id ){
				player1.move(direction);
			}
			
			else if(player2.id === controller_id ){
				player2.move(direction);
			}
		});
	});
	
	io.on('controller_disconnect', function(controller_socket_id){
		
		if(player1.socket_id === controller_socket_id){
			player1.ready(true);
		}
		
		if(player2.socket_id === controller_socket_id){
			player2.ready(false);
		}
	});
});
