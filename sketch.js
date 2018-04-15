// canvas
var width = 900;
var height = 600;
// var videoPeaton;

// street variables
var street_width = 50;
var street_height = 600;
var white_lines_y = 298;
var vertical_white_lines_x = 298;
// car variables
var nxcars = 1; //number of cars in x direction
var nycars = 0; //number of cars in y direction
var horizontal_cars = [];
var car_width = 20;
var car_height = 10;
var horizontal_x = 10;
var horizontal_y = 300;

// street light variables
var xstreetlight;
var ystreetlight;
var horizontal_streetlight_on = true;
var vertical_streetlight_on = false;
var light=1;

// variables for people
var npeople;
var nh=0


function setup() {
	createCanvas(900,600);
	//background(51);
	//screen capture for the jaywalkers detection
	// videoPeaton = createCapture(VIDEO);
	// videoPeaton.size(320,240)

	//xstreetlight = new StopLight(300, 0, 50, height, 0.1);
	xstreetlight = new StopLight(street_height/2-100, 0, 70, height, 0.2);

	reset();
}

function draw() {
	//testing
	stroke(0);
	fill(0,0,0);
	ellipse(20,10,30,50);
	rect(15, 10, 55, 55);
	noFill();
	rect(30, 20, 55, 55);
	// noFill();
	// rect(street_width/2-50, 0, 50, height, 0.1);
	// Fondo Simulación
	fill(100,255,100);
	rect(0,0,600,600);
	// Personas
	//drawPersons
	// Calles
	drawStreets();
	//semaforos
	noStroke();
	line(street_height/2, 0, street_height/2, height);
	// Coches
	//xstreetlight.display();
	drawStopLights();
	drawCars();
	drawPeople();
	keyPressed();

}
function keyPressed() {
	console.log(keyCode);
	if (keyCode === 37) {
		light = 1;
	} else if (keyCode === 39) {
		light = 2;
	} else if (keyCode === 40) {
		light = 3;
	}
	else if(keyCode===1)
	{
		npeople = 1;
	} else if(keyCode === 113) {
		npeople=1;
	} else if(keyCode === 119) {
		npeople= 2;
	} else if(keyCode === 101) {
		npeople = 3;
	}
}
function drawStopLights(){

	if (light===1){
		fill(150);
		rect (100, 50, 100, 200);

		fill(255,0,0);
		ellipse ( 150,100,55,55);

		fill(255, 255, 153);
		ellipse ( 150,160,55,55);

		fill(152, 230, 152);
		ellipse (150,220,55,55);
	}

	if (light===2){
		fill(150);
		rect (100, 50, 100, 200);

		fill(255, 133, 102);
		ellipse ( 150,100,55,55);

		fill(255, 255, 0);
		ellipse ( 150,160,55,55);

		fill(152, 230, 152);
		ellipse (150,220,55,55);
	}

	if (light===3){
		fill(150);
		rect (100, 50, 100, 200);

		fill(255, 133, 102);
		ellipse ( 150,100,55,55);

		fill(255, 255, 153);
		ellipse ( 150,160,55,55);

		fill(51, 204, 51);
		ellipse (150,220,55,55);
	}
}
function drawPeople(){
	if(light!==1){
		if(npeople === 1){
			fill(255, 51, 204);
			ellipse (street_height/2 - 20,street_height/2 +40-nh ,10,15);
			console.log(nh)
		}
		if(npeople === 2){
			fill(255, 51, 204);
			ellipse (street_height/2 - 20,street_height/2 +40-nh ,10,15);
			fill(249, 55, 196);
			ellipse (street_height/2 - 30,street_height/2 +40-nh ,10,15);
		}
		if(npeople === 3){
			fill(255, 51, 204);
			ellipse (street_height/2 - 20,street_height/2 +40-nh ,10,15);
			fill(249, 55, 196);
			ellipse (street_height/2 - 30,street_height/2 +40-nh ,10,15);
			fill(260, 50, 201);
			ellipse (street_height/2 - 40,street_height/2 +40-nh ,10,15);
		}
	}

	if(light===1){
		nh+=0.1;
		if(npeople === 1){
			fill(255, 51, 204);
			ellipse (street_height/2 - 20,street_height/2 +40-nh ,10,15);
			console.log(nh)
		}
		if(npeople === 2){
			fill(255, 51, 204);
			ellipse (street_height/2 - 20,street_height/2 +40-nh ,10,15);
			fill(249, 55, 196);
			ellipse (street_height/2 - 30,street_height/2 +40-nh ,10,15);
		}
		if(npeople === 3){
			fill(255, 51, 204);
			ellipse (street_height/2 - 20,street_height/2 +40-nh ,10,15);
			fill(249, 55, 196);
			ellipse (street_height/2 - 30,street_height/2 +40-nh ,10,15);
			fill(260, 50, 201);
			ellipse (street_height/2 - 40,street_height/2 +40-nh ,10,15);
		}
	}
}
function drawStreets(){

	stroke(0);
	fill(0,0,0);
	rect(285,0,street_width,street_height);
	rect(0,285,street_height,street_width);
	// Partes Blancas
	stroke(255);
	fill(255,255,255);
	rect(0,white_lines_y,30,4);
	rect(60,white_lines_y,30,4);
	rect(120,white_lines_y,30,4);
	rect(180,white_lines_y,30,4);
	rect(240,white_lines_y,30,4);
	rect(360,white_lines_y,30,4);
	rect(420,white_lines_y,30,4);
	rect(480,white_lines_y,30,4);
	rect(540,white_lines_y,30,4);
	rect(vertical_white_lines_x,0,4,30);
	rect(vertical_white_lines_x,60,4,30);
	rect(vertical_white_lines_x,120,4,30);
	rect(vertical_white_lines_x,180,4,30);
	rect(vertical_white_lines_x,240,4,30);
	rect(vertical_white_lines_x,360,4,30);
	rect(vertical_white_lines_x,420,4,30);
	rect(vertical_white_lines_x,480,4,30);
	rect(vertical_white_lines_x,540,4,30);
}

function reset(){
	for (var i = 0; i < nxcars; i++)
	{
		horizontal_cars.push(new Car(0, 300));
	}

}


var StopLight = function(x, y, w, h, c) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.c = c;
}

// Is the Mover in the Liquid?
StopLight.prototype.contains = function(m) {
	var l = m.position;
	return l.x > this.x && l.x < this.x + this.w &&
	l.y > this.y && l.y < this.y + this.h;
}


StopLight.prototype.display = function() {
	//noStroke();
	stroke(0);
	fill(50);
	rect(this.x, this.y, this.w, this.h);
};
function Car(x,y) {
	this.position = createVector(x,y);
	this.velocity = createVector(0,0);
	this.acceleration = createVector(0,0);
}
function drawCars(){

	for (var i = 0; i < horizontal_cars.length; i++) {
		// Is the car in the stoplight?
		//
		if (xstreetlight.contains(horizontal_cars[i])) {
			// Calculate breaking force
			if(light===2 || light===1){
				var dragForce = createVector(-0.276, 0);
				// Apply breaks
				horizontal_cars[i].applyForce(dragForce);
				//if car is about to stop
				if(light===1){
					if (horizontal_cars[i].position.x > (street_height/2-35) ) {
						horizontal_cars[i].velocity = createVector(0,0);
						horizontal_cars[i].acceleration.mult(0);
					}
				}
			}
		}
		else{
			var acc = createVector(0.1, 0);
			// Apply acceleration
			horizontal_cars[i].applyForce(acc);
		}
		if (light ===3 && horizontal_cars[i].velocity.x===0 ) {
			var acc = createVector(0.1, 0);
			// Apply acceleration
			horizontal_cars[i].applyForce(acc);
			horizontal_cars[i].velocity = createVector(0.1,0);
		}

		// Update and display
		horizontal_cars[i].checkEdges();
		horizontal_cars[i].update();
		horizontal_cars[i].display();
	}
}
Car.prototype.applyForce = function(force) {
	var f = p5.Vector.div(force,1);
	this.acceleration.add(f);
};

Car.prototype.update = function() {

	this.velocity.add(this.acceleration);
	this.position.add(this.velocity);
	this.acceleration.mult(0);
};

Car.prototype.display = function() {
	stroke(0);
	strokeWeight(2);
	fill(255,127,255);
	rect(this.position.x,this.position.y,car_width,car_height);

};

Car.prototype.checkEdges = function() {
	if (this.position.x > (600)) {
		this.velocity = createVector(0,0);
		this.acceleration.mult(0);

	}
};
