function $(id) {
	return document.getElementById(id);
}

function init() {
	console.log('window has loaded');
	console.log(dictionary.length);
	$('gametable').addEventListener('mousedown', start, false );
	$('gametable').addEventListener('mouseup', stop, false );
	$('gametable').addEventListener('mouseover', mover, false );
	$('newgame').addEventListener('mousedown', newgame, false);
	game();
}

window.addEventListener('load', init, false);

var tablecells=[];

var startIdo = 100;
var ido = startIdo;
var tablazat = [];
var dictionary = ["fatelep", "téglarakás", "űrállomás", "vodkanarancs", "kiskutya", "babfőzelék", "nyaraló", "golyóstoll", "hűtőszekrény", "cirmoscica", "alapítótag", "szélvédő", "majomkenyérfa", "alkotmányos", "egérpad", "zuhanyrózsa" , "kalapács", "ajtónyitó", "trolibusz", "világbajnokság", "papírzsebkendő", "magyarország", "betonkeverő", "deriválás", "integrálás", "igazolvány", "kakaóscsiga", "pénztárca", "vajaskenyér", "kókuszdió", "zseblámpa", "citromlé", "szappantartó", "karkötő", "stratégia", "szódavíz", "teleportálás", "vízforraló", "sportcipő", "mikulássapka", "kávésbögre", "tábortűz", "számológép", "számítógép", "vasárnap", "zsíroldó", "irattartó", "csatatér", "lépesméz", "zabpehely", "szárazkenyér", "logisztika"];
var randomWordIndex;
var randomWordPositions=[];
var selWordPos = [];
var mdown=false; // mouse hold down
var foundWords=0;
var gameOn=true;
var kijelol = "#FFAF00";

function fillTable() {
	for(var i=0;i<10;++i) {
		tablazat[i] = [];
		for(var j=0;j<10;++j) {
			tablazat[i][j]=randomLetter();
		}
	}
}

var possible = "AÁBCDEÉFGHIÍJKLMNOÓÖŐPQRSTUÚÜŰVWXYZ";
function randomLetter(){
    var text = "";
    text = possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}
function visszaszamlal() {
	$('elet').innerHTML ="<b>Élet: " + Math.round(ido / startIdo * 100 * 100) / 100 + " %</b>";
	$('red').style.width = ido / startIdo *100 + '%';
	ido= ido- startIdo*((1+ foundWords/3))/100;
	if(ido>=0) {
		setTimeout(visszaszamlal, 1000);
	}
	else {
		ido=0;
		$('red').style.width = 0 + '%';
		$('elet').innerHTML = "<b>Élet: " + ido + " %</b>";
		gameOn=false;
		selWordPos = [];
		$('halal').innerHTML="<h4>Játék Vége, megtalált szavak száma: " + foundWords + "</h4>";
		$('newgame').style.display = "block";
	}
}

function game() {
	visszaszamlal();
	newWord();
}

function newWord() {
	ido = Math.min(ido + startIdo * 0.1, startIdo);
	$('red').style.width = ido / startIdo *100 + '%';
	randomWordPositions=[];
	randomWordIndex=newRandomWordIndex();
	fillRandomWordPositions();
	fillTable();	
	$('word').innerHTML="<h4>" + dictionary[randomWordIndex] + "</h4>";
	createTable();
}
function newRandomWordIndex() {
	return Math.floor(Math.random()*dictionary.length);
}
function fillRandomWordPositions() {
	var rnd; // 0-3 szam, 0=jobbra, 1=fel, 2=balra, 3=le
	randomWordPositions[0]={x: Math.floor(Math.random()*10), y: Math.floor(Math.random()*10)};
	for(var i=1;i<dictionary[randomWordIndex].length;++i) {
		 var added=false;
		 var count=0;
		 do {
			rnd=Math.floor(Math.random()*4);
			if(rnd===0 && randomWordPositions[i-1].x+1<10 && !checkPos(i,{x: randomWordPositions[i-1].x+1 , y: randomWordPositions[i-1].y } ).fo) {
				randomWordPositions[i]= {x: randomWordPositions[i-1].x+1 , y: randomWordPositions[i-1].y };
				added=true;
			}
			else if(rnd === 1 && randomWordPositions[i-1].y-1>=0 &&  !checkPos(i,{x: randomWordPositions[i-1].x , y: randomWordPositions[i-1].y-1 } ).fo) {
				randomWordPositions[i]= {x: randomWordPositions[i-1].x , y: randomWordPositions[i-1].y-1 };
				added=true;
			}
			else if(rnd === 2 && randomWordPositions[i-1].x-1>=0 &&  !checkPos(i,{x: randomWordPositions[i-1].x-1 , y: randomWordPositions[i-1].y } ).fo) {
				randomWordPositions[i]= {x: randomWordPositions[i-1].x-1 , y: randomWordPositions[i-1].y };
				added=true;
			}
			else  if(rnd === 3 &&  randomWordPositions[i-1].y+1<10 &&  !checkPos(i,{x: randomWordPositions[i-1].x , y: randomWordPositions[i-1].y+1 } ).fo){
				randomWordPositions[i]= {x: randomWordPositions[i-1].x , y: randomWordPositions[i-1].y+1 };
				added=true;
			}
			count++;
		} while (!added && count < 100);
		if(count>=100) {
			newWord();
		}
	}
}

function checkPos(i, pos) {
	var found=false;
	for(var j=0;j<i && !found;++j) {
		found=randomWordPositions[j].x===pos.x && randomWordPositions[j].y===pos.y ;
	}
	return {fo: found, ind: j};
}
function createTable() {
	var put='<table id="t1" class="tab1" cellspacing=0 cellpadding=4>';
	for( var i=0;i<10;++i) {
		put+='<tr>';
		for(var j=0;j<10;++j) {
			if(checkPos(randomWordPositions.length, {x: i,y: j}).fo){ 
				put+='<td>'+ dictionary[randomWordIndex][checkPos(randomWordPositions.length, {x: i,y: j}).ind-1].toUpperCase() +'</td>';
			}
			else {
				put+='<td>'+tablazat[i][j]+'</td>';
			}
		}
		put+='</tr>'
	}
	put+='</table>';
	$('gametable').innerHTML=put;
	//tömb feltöltese a cella elemeivel hivatkozáshoz
	tablecells = $('gametable').getElementsByTagName('TD');
}

function start(e) {
	if(e.target.tagName ==='TD') {
		selWordPos = [];
		mdown = true;
		var td = e.target;
		var tdPoz = xyKoord(td);
		selWordPos.push(tdPoz);
		recolor({x: tdPoz.x, y: tdPoz.y}, kijelol);
	}
}
function mover(e) {
	if(gameOn) {
		if(e.target.tagName ==='TD') {
			if(mdown) {
				var td = e.target;
				var tdPoz = xyKoord(td);
				if(selWordPos.length>1 ) {
					if( selWordPos[selWordPos.length-2].x===tdPoz.x && selWordPos[selWordPos.length-2].y===tdPoz.y) { //vissza lepunk
						recolor({x: selWordPos[selWordPos.length-1].x, y: selWordPos[selWordPos.length-1].y}, '');
						selWordPos.splice(selWordPos.length-1, 1);
					}
					else {
						recolor({x: tdPoz.x, y: tdPoz.y}, kijelol);
						selWordPos.push(tdPoz);
					}
				}
				else{
					recolor({x: tdPoz.x, y: tdPoz.y}, kijelol);
					selWordPos.push(tdPoz);
				}
				if(selWordPos[0].x===tdPoz.x && selWordPos[0].y===tdPoz.y){
					recolor({x: selWordPos[0].x, y: selWordPos[0].y}, '');
					selWordPos.splice(0, 1);
				}
			}
		}
	}
}

function stop(e) {
		mdown = false;
		var td = e.target;
		var tdPoz = xyKoord(td);		
		if(selWordPos.length!==0) {
			if(checkSelectedWord()) {
				++foundWords;
				newWord();
			}
			else {
				ido=Math.max( 0, ido - startIdo *0.05);
				$('red').style.width = ido / startIdo *100 + '%';
				for(var i=0;i<selWordPos.length;++i) {
					recolor({x: selWordPos[i].x, y: selWordPos[i].y}, '');
				}
			}
		}
}

function checkSelectedWord() {
	if(selWordPos.length!==randomWordPositions.length) {
		return false;
	}
	var eq=true;
	for(var i=0;i<selWordPos.length && eq;++i) {
		eq= selWordPos[i].x===randomWordPositions[i].x && selWordPos[i].y === randomWordPositions[i].y;
	}
	return eq;
}
function xyKoord(td) {
	var y = td.cellIndex;
	var tr = td.parentNode;
	var x = tr.sectionRowIndex;
	return {
		x: x,
		y: y
		};
}
function recolor(obj, clr) {
	var index=obj.x*10+obj.y;
	tablecells[index].style.backgroundColor =clr;
}

function newgame() {
	tablecells=[];
	startIdo = 100;
	ido = startIdo;
	tablazat = [];
	randomWordPositions=[];
	selWordPos = [];
	mdown=false; // mouse hold down
	foundWords=0;
	gameOn=true;
	$('halal').innerHTML="";
	$('newgame').style.display = "none";
	game();
}