function $(id) {
	return document.getElementById(id);
}

function init() {
	console.log('Window has loaded.');
	document.addEventListener('keydown', mozgat, false);
	document.addEventListener('keyup', megallit, false);
	canvas = $('canvas');
	ctx = canvas.getContext('2d'); // 2D-s lesz
	
	images.ship.src= 'ship.png';
	images.asteroid.src= 'asteroid.jpg';
	images.bg.src= 'bg.jpg';
	images.exp.src= 'explosion.jpg';
	images.gov.src= 'go.png';
	
	gameloop();
}

window.addEventListener('load', init, false);


var canvas;
var ctx;
var lastTime= Date.now();
var bumm= false;

var images = {
	ship: new Image(), 
	asteroid: new Image(), 
	exp: new Image(), 
	bg: new Image(), 
	gov: new Image()
};

var ship = {
	x: 150, 
	y: 250,
	width: 20,
	height: 50,
	vx: 100,  // sebesség, pixel/sec
	irany: 0
};

var asteroids = [];
var score =0;
var highscore = 0;


function gameloop() {
	if(!bumm) {
		//amikor lehet, hívja meg ezt, ez lesz a játék végtelen ciklusáért felelõs
		window.requestAnimationFrame(gameloop);
		//adatok frissítése
		update();
		// adatok kirajzolása
		draw();
	}
	
	else {
		gameover();
	}
	
}

function update() {
	//console.log(Date.now());
	//kiszamoljuk h az update 2 hívása között mennyi idö telt el
	var now = Date.now();
	var delta = now - lastTime;
	lastTime = now;
	// hajo mozgatasa
	ship.x += ship.vx * delta * ship.irany / 1000;
	if(ship.x<0) {
		ship.x=0;
	}
	else if( ship.x+ship.width > canvas.width) {
		ship.x=canvas.width-ship.width;
	}
	//asteroida hozzaadasa
	if(Math.random() < .03) {
		asteroids.push({
			x: veletlen(0, canvas.width),
			y: -50,
			width: veletlen(5,20),
			height: veletlen(2, 30),
			vx: 0,  // vizszintes
			vy: veletlen(10,100)  // vuggoloeges
		});
	}
	// aszteroida mozgatasa
	for(var i= asteroids.length-1; i>= 0; --i) {
		var ast = asteroids[i];
		ast.x += ast.vx * delta / 1000;
		ast.y += ast.vy * delta / 1000;
		if(isCollusion(ast, ship)) {
			bumm = true;
		}
		if(ast.y > canvas.height) {
			score++;
			asteroids.splice(i, 1); // kivesszük az i-edik elemtõl számolva az 1 hosszú részt
		}
	}
	var s1 = $('score');
	s1.innerHTML='Pont: ' + score + ', Rekord: ' + highscore;
}

function isCollusion (r1, r2) {
	return !(
		r2.y + r2.height < r1.y ||
		r1.x + r1.width < r2.x ||
		r1.y + r1.height < r2.y ||
		r2.x + r2.width < r1.x
	);
}
 function veletlen(a,b) {
	return a + Math.floor(Math.random()*b);
 }
function draw() {
	//ûr
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, canvas.width, canvas.height); // balfelsõ koordináták, és mekkora méretben
	
	ctx.drawImage(images.bg, 0, 0, canvas.width, canvas.height);
	//hajó
	ctx.fillStyle = bumm ? 'red' : '#999999';
	ctx.fillRect(ship.x, ship.y, ship.width, ship.height);
	ctx.drawImage(images.ship, ship.x, ship.y, ship.width, ship.height);
	
	//aszteroidák
	ctx.fillStyle = 'brown';
	for(var i=0; i< asteroids.length; ++i) {
		var ast = asteroids[i];
		ctx.fillRect(ast.x, ast.y, ast.width, ast.height);
		ctx.drawImage(images.asteroid, ast.x, ast.y, ast.width, ast.height)
	}
	if(bumm) {
		ctx.drawImage(images.gov, 85, 120, 140, 40);
		//console.log('itt');
	}
}
function mozgat(e) {
	//e.preventDefault();
	var kod = e.which;
	//console.log(e.which);
	if(kod === 37) {
		ship.irany = -1; // gyorsítás =- helyett -=, másiknál ugyan úgy
	}
	else if(kod === 39) {
		ship.irany = 1;
	}
}

function megallit() {
	ship.irany=0;
}

function gameover() {
	document.addEventListener('keydown', gameover2, false);
	
}
function gameover2(e) {
	console.log(e.which);
	var kod = e.which;
	
	if(kod===13 && bumm) {
		bumm=false;
		if(highscore<score) {
			highscore=score;
		}
		score=0;
		window.requestAnimationFrame(gameloop);
		asteroids= [];
		update();
		draw();
	}
}