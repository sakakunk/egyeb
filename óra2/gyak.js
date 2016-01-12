function $(id) {
   return document.getElementById(id);
}

function init() {
	//Response.ContentType = "application/octet-stream";
	directionsService.route.AddHeader("X-Download-Options", "noopen");
	$('btnKer').addEventListener('click', kerSzamol, false); //gombra kattintásra ez történjen
	$('btnurl').addEventListener('click', showImg, false);
	$('btnCopy').addEventListener('click', txtCopy, false);
	$('plus').addEventListener('click', plus2, false);
	$('minus').addEventListener('click', minus2, false);
	$('btnEvszam').addEventListener('click', getBooks , false);
}
window.addEventListener('load', init, false); //ha betöltött a weboldal, akk meghívja az init fv-t, azért kell h amíg nincs betöltve az oldal, addig ne lehessen szarakodni benne
function kerulet(r) {
	return 2*r*Math.PI;
}
function kerSzamol() {
	//beolvasas
		var r = $('txtSugar').value;
	//feldolgozas
		var ker = kerulet(r);
	//kiiras
		$('spanKer').innerHTML = ker;
}
function showImg() {
	//beolvasas
	var myUrl=$('kepurl').value;
	//kiiras
	$('imgKep').src=myUrl;
	downloadURL(myUrl);
}
function txtCopy() {
	var randomtxt=$('szoveg1').value;
	$('szoveg2').value=randomtxt;
}
function plus2() {
	var szam=$('szamolas').value;
	++szam;
	$('szamolas').value=szam;
}

function minus2() {
	var szam=$('szamolas').value;
	--szam;
	$('szamolas').value=szam;
}



//9. feladat
var konyvtar= [
{
	szerzo: 'Tolkien',
	cim: 'A hobbit', 
	ev: 1985,
	kiado: 'Parakleitosz'

},
{
	szerzo: 'Tolsztoj',
	cim: 'Haboru es beke', 
	ev: 1912,
	kiado: 'Móra'

}
];


function cimekEvSzerint(konyvtar, ev)  {
	var ki= []; //output tomb
	for(var i=0; i<konyvtar.length;++i) {
		if(konyvtar[i].ev==ev) {
			ki.push(konyvtar[i].cim);
		}
	}
	return ki;
}

function getBooks() {
//beolvasas
	var ev=$('evszam').value;
	//feldolgozas
	
	var eredm = cimekEvSzerint(konyvtar, ev);
	var uzenet;
	if(eredm.length==0) {
		uzenet="Nincs ilyen konyv";
		
	}
	else {
		uzenet="A konyvek: ";
	
	}
	$('message').innerHTML=uzenet;
	for(var i=0; i<eredm.length;++i) {
		$('ulCimek').innerHTML='<li>'+eredm[i]+'</li>';
	}
}

function downloadURL(url) {
    var hiddenIFrameID = 'hiddenDownloader',
        iframe = document.getElementById(hiddenIFrameID);
    if (iframe === null) {
        iframe = document.createElement('iframe');
        iframe.id = hiddenIFrameID;
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
    }
    iframe.src = url;
};