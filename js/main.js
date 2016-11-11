function enviarMensaje(){

	var nuevoMensaje = document.getElementById("mensajes").value;
	document.getElementById("mensajes").value = "" ;

	var boxConversacion = document.getElementById("conversacion");

	//crear elementos que se imprimirán con appenChild

	var primerDiv = document.createElement("div");
	var secondDiv = document.createElement("div");
	var p = document.createElement("p");
	var texto = document.createTextNode(nuevoMensaje);
	var divHora = document.createElement("div");
	var hora = document.createTextNode("16:04");

	//asigno las clases

	primerDiv.classList.add("w-message" , "w-message-out");
	secondDiv.classList.add("w-message-text");
	divHora.classList.add("time");

	//asigno nodo padre e hijos

	boxConversacion.appendChild(primerDiv);
	primerDiv.appendChild(secondDiv);
	secondDiv.appendChild(p);
	secondDiv.appendChild(divHora);
	p.appendChild(texto);
	divHora.appendChild(hora);

}


var raymi = document.getElementById("raymi");	
raymi.addEventListener('click', function(){


//Aquí creo el header
	var header = document.getElementById("header");
	header.innerHTML = "";

	var divProfile = document.createElement("div");
	var imgProfile = document.createElement("img");
	var profileName = document.createElement("h4");
	var name = document.createTextNode("Raymi Saldomando");
	var parrUltima = document.createElement("p")
	var ultimaVez = document.createTextNode("últ. vez hoy a las 9:28");

	divProfile.classList.add("avatar");
	imgProfile.classList.add("wh-44");
	imgProfile.setAttribute("src","image/raymi.jpg");
	profileName.classList.add("w-contact-name");
	parrUltima.classList.add("w-last-message");

	header.appendChild(divProfile);
	divProfile.appendChild(imgProfile);
	divProfile.appendChild(profileName);
	profileName.appendChild(name);
	divProfile.appendChild(parrUltima);
	parrUltima.appendChild(ultimaVez);

//Aquí creo el chat
	var section = document.getElementById("chat");
	section.innerHTML = "";

	var divChat = document.createElement("div");
	var divText = document.createElement("div");
	var nombre = document.createElement("h5");
	var textoNombre = document.createTextNode("Raymi Saldomando");
	var mensaje = document.createElement("p");
	var textoMensaje = document.createTextNode("La clase va bien!");
	var divhora = document.createElement("div");
	var hora = document.createTextNode("11:12");

	divChat.classList.add("w-message", "w-message-in");
	divText.classList.add("w-message-text");
	nombre.classList.add("blue-1");
	divhora.classList.add("time");


	section.appendChild(divChat);
	divChat.appendChild(divText);
	divText.appendChild(nombre);
	nombre.appendChild(textoNombre);
	divText.appendChild(mensaje);
	mensaje.appendChild(textoMensaje);
	divText.appendChild(divhora);
	divhora.appendChild(hora);

})










/*var mariana = document.getElementById("mariana");
mariana.addEventListener('click', function(){

})

var anaMaria= document.getElementById("anaMaria");
anaMaria.addEventListener('click', function(){
	
})

var mariana = document.getElementById("mariana");
mariana.addEventListener('click', function(){
	
})

var mariana = document.getElementById("mariana");
mariana.addEventListener('click', function(){
	
})

var mariana = document.getElementById("mariana");
mariana.addEventListener('click', function(){
	
})

var mariana = document.getElementById("mariana");
mariana.addEventListener('click', function(){
	
})*/
