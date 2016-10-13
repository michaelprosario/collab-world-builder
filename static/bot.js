

//http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgb(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


function Bot()
{
	this.angle = 0;
	this.positionX = 0;
	this.positionY = 0;
	this.positionZ = 20;
	this.drawColor = "purple";

	this.getDefaultMaterial = function()
	{
		var material = new THREE.MeshPhongMaterial( { color: this.drawColor, specular: 0x555555, shininess: 1 } )
		return material;
	}

	this.drawBoxAt = function(width,height,depth,x,y,z)
	{
		var geometry = new THREE.BoxGeometry( width, height, depth );
		var material = this.getDefaultMaterial();
		var cube = new THREE.Mesh( geometry, material );
		cube.position.x = x;
		cube.position.y = y;
		cube.position.z = z;
		scene.add( cube );
		objects.push(cube);
	}

	this.drawBox = function(width,height,depth)
	{
		if(!height)
			height = width;
	
		if(!depth)
			depth = width;

		var geometry = new THREE.BoxGeometry( width, height, depth );
		var material = this.getDefaultMaterial();
		var cube = new THREE.Mesh( geometry, material );
		cube.position.x = this.positionX + width/2;
		cube.position.y = this.positionY + height/2;
		cube.position.z = this.positionZ + depth/2;
		cube.rotation.y = this.angle;
		
		 

		scene.add( cube );
		objects.push(cube);
	}

	this.drawSphere = function(radius)
	{
		var geometry = new THREE.SphereGeometry( radius, 32, 32 );
		var material = this.getDefaultMaterial();
		var sphere = new THREE.Mesh( geometry, material );
		sphere.position.x = this.positionX;
		sphere.position.y = this.positionY;
		sphere.position.z = this.positionZ;		
		scene.add( sphere );		
	}

	this.drawSphereAt = function(radius,x,y,z)
	{
		var geometry = new THREE.SphereGeometry( 5, 32, 32 );
		var material = this.getDefaultMaterial();
		var sphere = new THREE.Mesh( geometry, material );
		sphere.position.x = x;
		sphere.position.y = y;
		sphere.position.z = z;		
		scene.add( sphere );		
	}



	this.drawCone = function(radius,height)
	{
		var geometry = new THREE.ConeGeometry( radius, height, 32 );
		var material = this.getDefaultMaterial();
		var obj = new THREE.Mesh( geometry, material );
		obj.position.x = this.positionX;
		obj.position.y = this.positionY;
		obj.position.z = this.positionZ;
		
		scene.add( obj );
	}

	this.drawCylinder = function(radius,height)
	{
		var geometry = new THREE.CylinderGeometry( radius,radius, height, 32 );
		var material = this.getDefaultMaterial();
		var obj = new THREE.Mesh( geometry, material );
		obj.position.x = this.positionX;
		obj.position.y = this.positionY;
		obj.position.z = this.positionZ;
		
		scene.add( obj );
		objects.push(obj);

	}


	/*
	this.drawText = function(strText)
	{
			var params =	{

					font: font

				}


		var geometry = new THREE.TextGeometry(strText,params);
		var material = this.getDefaultMaterial();
		var obj = new THREE.Mesh( geometry, material );
		obj.position.x = this.positionX;
		obj.position.y = this.positionY;
		obj.position.z = this.positionZ;
		
		scene.add( obj );
		//objects.push(obj);

	}*/


	this.moveUp = function(steps)
	{
		this.positionY += steps;
	}




	this.forward = function(steps)
	{
		deltaX = steps * Math.cos(this.angle);
		deltaZ = steps * Math.sin(this.angle);

		this.positionX += deltaX;
		this.positionZ += deltaZ;
	}

	this.moveLeft = function(steps)
 	{
		deltaX = steps * Math.cos(this.angle - (Math.PI/2));
		deltaZ = steps * Math.sin(this.angle- (Math.PI/2));

		this.positionX += deltaX;
		this.positionZ += deltaZ;
	}

	this.moveRight = function(steps)
	{
		this.moveLeft(steps * -1);
	}


	this.setAngle = function(degrees)
	{
		this.angle = degrees*Math.PI/180;
	}

	this.getAngle = function()
	{
		return 180*this.angle/Math.PI;
	}

	this.turn = function(angle)
	{
		var currentAngle = this.getAngle();
		this.setAngle(currentAngle + angle);
	}

	this.locations = new Array();
	this.saveLocation = function(locationName)
	{
		var aPoint = {}
		aPoint.x = this.positionX;
		aPoint.y = this.positionY;
		aPoint.z = this.positionZ;
		aPoint.angle = this.getAngle();
		this.locations[locationName] = aPoint;
	}

	this.moveToLocation = function(locationName)
	{
		var aPoint = this.locations[locationName];
		this.positionX = aPoint.x;
		this.positionY = aPoint.y;
		this.positionZ = aPoint.z;
		this.setAngle(aPoint.angle);

	}





	


}
