var div = document.createElement("div");
var para = document.createElement("p");


document.body.appendChild(div);
div.appendChild(para);
// var text = document.getElementsByTagName("p")[0];
charlist = ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "0", "=", "/", "reset"];
j = 0;

for (let i = 0; i < 16; i++) {
    var btn = document.createElement("button");
    btn.append(charlist[j]);
    div.appendChild(btn);
    btn.value=charlist[j];
    
    btn.addEventListener("click", function () {
        para.innerHTML+=this.value;
    });
    j++;

}

var buttonEgal = document.getElementsByTagName("button")[13];

buttonEgal.id = "egal";

var buttonReset = document.getElementsByTagName("button")[15];

buttonReset.id = "reset";



// para.innerHTML+=parseInt(this.value);