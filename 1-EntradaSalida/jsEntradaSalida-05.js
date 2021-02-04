/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombrePer = txtIdNombre.value;
	var edadPer = txtIdEdad.value;
	var apellPer = prompt("Ingrese apellido");
	alert("Usted se llama "+nombrePer+" "+apellPer+" y tiene "+edadPer+" años");

}
