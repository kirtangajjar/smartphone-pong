//TODO: Ensure value above 100 and below 0 are never acknowledged in updatePaddle.
//TODO: Ensure paddle and wall do not collide.
//TODO: Update updatePaddle to update both paddles as requested.
//Optional: Handle Window size change gracefully.

window.onload = function(){	
	
	var Engine = Matter.Engine,
	World = Matter.World,
	Body = Matter.Body,
	Bodies = Matter.Bodies,
	Renderer = Matter.Renderer;
	Constraint = Matter.Constraint;
	
	Renderer = {
			options:{
				width: window.innerWidth - 20,
				height: window.innerHeight - 20
			}};
			
	// create a Matter.js engine
	var engine = Engine.create(document.body,{render: Renderer});
	
	engine.world.gravity.x = 0;
	engine.world.gravity.y = 0;
	
	var offset = 10;
	var ceiling   = Bodies.rectangle(Renderer.options.width/2,      -offset, Renderer.options.width + 2 * offset, 50.5, { isStatic: true });
	var ground    = Bodies.rectangle(Renderer.options.width/2, Renderer.options.height + offset, Renderer.options.width + 2 * offset, 50.5, { isStatic: true });
	var rightSide = Bodies.rectangle(Renderer.options.width + offset, Renderer.options.height/2, 50.5, Renderer.options.height + 0.5 + 2 * offset, { isStatic: true });
	var leftSide  = Bodies.rectangle(-offset, Renderer.options.height/2, 50.5, Renderer.options.width + 0.5 + 2 * offset, { isStatic: true });
	
	var paddle_p1 = Bodies.rectangle(Renderer.options.width/2, Renderer.options.height*7/8, Renderer.options.width/8, 40);
	var paddle_p2 = Bodies.rectangle(Renderer.options.width/2, Renderer.options.height / 8, Renderer.options.width/8, 40);
		
	// add all of the bodies to the world
	World.add(engine.world, [ceiling, ground, leftSide, rightSide, paddle_p1, paddle_p2]);
	
	this.updatePaddle = function(e){
				Body.translate(paddle_p1, { x: Renderer.options.width*e/100 - paddle_p1.position.x + offset, y: 0 });
	}
	
	// run the engine
	Engine.run(engine);
}
