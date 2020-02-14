var typen = document.getElementById("typen");
var btn = document.getElementById("btn");

btn.onclick = function(){
    var inp = parseFloat(document.getElementById('typen').value);
    var s = 2*Math.PI*inp;
    alert('omtrek:  ' + s)
}



