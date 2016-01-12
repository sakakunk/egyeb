function $(id) {
	return document.getElementById(id);
}

function init() {
	console.log("window has loaded");
	$('myImage').src=kepek[0];
	$('myImage').addEventListener('load', resizeDiv, false);
	$('myImage').addEventListener('mousedown', valt, false);
	$('jobbra').addEventListener('mousedown', elore, false);
	$('balra').addEventListener('mousedown', hatra, false);
	$('kis').addEventListener('mousedown', minusz, false);
	$('nagy').addEventListener('mousedown', plusz, false);
	document.addEventListener('keydown', valt2, false);
}

window.addEventListener('load', init, false);

function valt(e) {
	console.log(e);
	if(e.which==1) {
		elore();
	}
	
}


function valt2(e) {
	console.log(e.which);
	if(e.which==37) {
		hatra();
	}
	else if(e.which==39) {
		elore();
	}
}


function elore() {
	if(index===kepek.length-1) {
		index=0;
	}
	else {
		++index;
	}
	$('myImage').src=kepek[index];
}

function hatra() {
	if(index===0) {
		index=kepek.length-1;
	}
	else {
		--index;
	}
	$('myImage').src=kepek[index];
}

function resizeDiv() {
	console.log("resize");
	var img = $('myImage'); 
	myimgwidth = img.width;
	myimgheight = img.height;
	$('main1').style.width=myimgwidth+30 + "px";
	$('main1').style.height=myimgheight+30 + "px";
	$('red').style.width=myimgwidth + "px";
	$('red').style.height=myimgheight + "px";
}

function minusz() {
	$('myImage').width*=0.99;
	resizeDiv();
}

function plusz() {
	$('myImage').width*=1.01;
	resizeDiv();
}
var kepek = [ "http://hirdetes.com/wp-content/uploads/2012/02/598875-500x253.jpg", "http://mindmegette.hu/lapokkepek/cikkek/110000/110130_megmentettkenyerek_600_2.jpg", "http://kep.cdn.index.hu/1/0/373/3739/37398/3739834_3a61799b08112ce5ae4be7c16e8e7d04_wm.jpg", "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfa1/v/t1.0-1/10513538_791216524233786_4020581132922602665_n.jpg?oh=190ae2ec1c61d5eeba863da1dbf0c545&oe=54F853FE&__gda__=1424754740_de4795e616495385f636ac0caaf12fd3"
 ];

var index=0;
var myimgwidth;
var myimgheight;