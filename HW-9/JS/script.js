function f1(){
	var c_1 = document.querySelector("#one");
	c_1.innerHTML += " hello";
}

f1();

function f2(){
	var c_1 = document.querySelector("#two");
	c_1.innerHTML += " hello";
}

f2();

var c = document.querySelector("#three");

//==================================================>

function f3(){
	c.innerHTML += " hello";
}

var c = document.querySelector("#three");
f3();
c = document.querySelector("#four");
f3();

//==================================================>

function f4(element_1){
	//element
	var d = document.querySelector("#" + element_1)
	d.innerHTML+= " its work"
}
f4("one")
f4("two")
//f4("one")