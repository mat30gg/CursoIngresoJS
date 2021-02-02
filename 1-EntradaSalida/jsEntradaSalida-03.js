/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nom;
	//nombreIngresado=txtIdNombre.value
	nom=document.getElementById('txtIdNombre').value;
	//txtIdNombre
	var edad =prompt("Ingrese su edad: ");
	alert("Su nombre es "+nom+" y tiene "+edad+" años.");

}


