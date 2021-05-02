// 1
var inputIn = document.getElementById("input-in"); // Type
var button = document.getElementById("button");  // Click
var outport = document.getElementById("outport");  // Out
var buttonClear = document.getElementById("button-clear"); // Clear

button.onclick = function()
{
	var text = inputIn.value;
	//console.log(text);
	inputIn.value = ""; // Empty
	outport.innerHTML = text;
	// PEREVEDI TUT PONATNO
}

buttonClear.onclick = function(){
	outport.innerHTML = ""; // Empty out
}

// 2
var inputIn_2 = document.getElementById("input-in-2"); // Type
var button_2 = document.getElementById("button-2");  // Click
var outport_2 = document.getElementById("outport-2");  // Out
var buttonClear_2 = document.getElementById("button-clear-2"); // Clear

button_2.onclick = function(){
	var text = inputIn_2.value;
	inputIn_2.value = ""; // Empty
	outport_2.innerHTML = text;
}

buttonClear_2.onclick = function(){
	outport_2.innerHTML = ""; // Empty out
}

//3
var inputIn_3 = document.getElementById("input-in-3"); // Type
var button_3 = document.getElementById("button-3");  // Click
var outport_3 = document.getElementById("outport-3");  // Out
var buttonClear_3 = document.getElementById("button-clear-3"); // Clear

button_3.onclick = function(){
	var text = inputIn_3.value;
	inputIn_3.value = ""; // Empty
	outport_3.innerHTML = text;
}

buttonClear_3.onclick = function(){
	outport_3.innerHTML = ""; // Empty out
}

//4
var inputIn_4 = document.getElementById("input-in-4"); // Type
var button_4 = document.getElementById("button-4");  // Click
var outport_4 = document.getElementById("outport-4");  // Out
var buttonClear_4 = document.getElementById("button-clear-4"); // Clear

button_4.onclick = function(){
	var text = inputIn_4.value;
	inputIn_4.value = ""; // Empty
	outport_4.innerHTML = text;
}

buttonClear_4.onclick = function(){
	outport_4.innerHTML = ""; // Empty out
}

//5
var inputIn_5 = document.getElementById("input-in-5"); // Type
var button_5 = document.getElementById("button-5");  // Click
var outport_5 = document.getElementById("outport-5");  // Out
var buttonClear_5 = document.getElementById("button-clear-5"); // Clear

button_5.onclick = function(){
	var text = inputIn_5.value;
	inputIn_5.value = ""; // Empty
	outport_5.innerHTML = text;
}

buttonClear_5.onclick = function(){
	outport_5.innerHTML = ""; // Empty out
}

var inp = document.getElementById("input-infr");
var butt = document.getElementById("place");
var out = document.getElementById("outp");

butt.onclick = function()
{
	out.innerHTML = "LOX";
}