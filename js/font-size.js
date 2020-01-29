function resizeText(multiplier) {
    var elem = document.getElementById("ministry-text");
    var currentSize = elem.style.fontSize || 1;
    elem.style.fontSize = ( parseFloat(currentSize) + (multiplier * 0.2)) + "em";
	localStorage.setItem('currentSize',currentSize);
}

document.getElementById("plustext").addEventListener("click", function() {resizeText(1);});
document.getElementById("minustext").addEventListener("click", function() {resizeText(-1);});

window.onload = function(){
    var g = localStorage.getItem('currentSize');
    document.getElementById("ministry-text").style.fontSize = g;
}