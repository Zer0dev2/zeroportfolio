function show(){
	var navbar= document.getElementById("menu");
	var button = document.getElementById("btn");

	if ( navbar.style.display==="none") {
		navbar.style.display="flex";
		document.getElementById("btn").innerHTML="X";
		button.style.fontSize="1.7rem";

	}
	else{
		navbar.style.display="none";
		document.getElementById("btn").innerHTML="Menu";
		button.style.fontSize="1.1rem";


	}
}