console.log("start");

// Inputs
var inputIn = document.getElementById("bl__place__input");
var inputIn1 = document.getElementById("bl__place__input1");
var inputIn2 = document.getElementById("bl__place__input2");

var inputIn3 = document.getElementById("bl__place1__input");
var inputIn4 = document.getElementById("bl__place1__input1");
var inputIn5 = document.getElementById("bl__place1__input2");

var inputIn6 = document.getElementById("bl__place2__input");
var inputIn7 = document.getElementById("bl__place2__input1");
var inputIn8 = document.getElementById("bl__place2__input2");

// Outports
var outport = document.getElementById("outport");
var outport1 = document.getElementById("outport1");
var outport2 = document.getElementById("outport2");

var outport3 = document.getElementById("outport3");
var outport4 = document.getElementById("outport4");
var outport5 = document.getElementById("outport5");

var outport6 = document.getElementById("outport6");
var outport7 = document.getElementById("outport7");
var outport8 = document.getElementById("outport8");

var buttonSubmitAll = document.getElementById("button-Submit_all");
var buttonClearAll = document.getElementById("button-Clear_all");

function submitAll()
{
	// Text in var
	var inputText = inputIn.value;
	var inputText1 = inputIn1.value;
	var inputText2 = inputIn2.value;
	var inputText3 = inputIn3.value;

	var inputText4 = inputIn4.value;
	var inputText5 = inputIn5.value;
	var inputText6 = inputIn6.value;

	var inputText7 = inputIn7.value;
	var inputText8 = inputIn8.value;


	// Input value in <div>
	outport.innerHTML = inputText;
	outport1.innerHTML = inputText1;
	outport2.innerHTML = inputText2;

	outport3.innerHTML = inputText3;
	outport4.innerHTML = inputText4;
	outport5.innerHTML = inputText5;

	outport6.innerHTML = inputText6;
	outport7.innerHTML = inputText7;
	outport8.innerHTML = inputText8;

	console.log("Click");
}

function slearAll()
{
	// Clear value
	inputIn.value = "";
	inputIn1.value = "";
	inputIn2.value = "";

	inputIn3.value = "";
	inputIn4.value = "";
	inputIn5.value = "";

	inputIn6.value = "";
	inputIn7.value = "";
	inputIn8.value = "";

	console.log("Click");
}