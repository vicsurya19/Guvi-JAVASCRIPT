var div = document.createElement("div");
var input=document.createElement("input")
document.getElementById("butt").addEventListener("onclick", onclick);
function swap(){
    var s=document.getElementById("a");
    var t=document.getElementById("b");
    var i=s.innerHTML;
    var j=t.innerHTML;
    s.innerHTML=j;
    t.innerHTML=i;
}
