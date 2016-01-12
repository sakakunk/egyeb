function $(id) {
	return document.getElementById(id);
}

function init() {
	console.log("window has loaded");
	$('send').addEventListener('click', readNum, false);
	document.addEventListener('keydown', readNum2, false);
	
}

window.addEventListener('load', init, false);

var res = [];
var abc = "0123456789";
var lob;
var hib;
var codesLength =2;

function readNum2(e) {
	console.log(e.which);
	if(e.which===13) {
		lob= $('kezd').value;
		hib = $('veg').value;
		codesLength = $('hossz').value;
		createCodes(codesLength);
		addToHtml();
	}
	
}
function readNum() {
		lob= $('kezd').value;
		hib = $('veg').value;
		codesLength = $('hossz').value;
		createCodes(codesLength);
		addToHtml();
}
function addToHtml() {
	var str="";
	
	for(var i=lob;i<hib;++i) {
		str+="<img src=http://kingsroad.hu/wp-content/uploads/2014/11/"  + res[i] + ".jpg>";
	}
	
	console.log("valami");
	$('images').innerHTML = str;
	$('done').innerHTML = "Kész";
}
function createCodes(len) {
	res=[];
	addEmpty(len);
	run(len, len);
}
function addEmpty(rek) {
	for(var i=0;i<Math.pow(abc.length, rek);++i) {
		res.push("");
	}
}
function run(rek, con) {
	var str="";
	if(rek===0) {
		console.log(res);
	}
	else {
		str = createStr(Math.pow(abc.length, rek-1)); 
		for(var i=0;i<res.length;) {
			for(var j=0;j<str.length;++j) {
				res[i]+=str[j];
				++i;
			}
		}
		run(rek-1, con); 
	}
}

function createStr(rek) {
	var str="";
	for(var i=0;i<abc.length;++i) {
		for(var j=0;j<rek;++j) {
			str+=abc[i];
		}
	}
	//console.log(str);
	return str;
}