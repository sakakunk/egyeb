function $(id) {
	return document.getElementById(id);
}

function init() {
	console.log("window has loaded");
	$('send').addEventListener('mousedown', dnload, false);
}

window.addEventListener('load', init, false);

function dnload() {
	if($('inpt').value!=="") {
		$('let').style.display = "block";
		$('mylink').innerHTML = "LETÖLTÉS";
		$('mylink').href = $('inpt').value;
	}
	
}