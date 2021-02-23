/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	var c = 0;
	claveIngresada = prompt("Ingrese la clave");
	while(claveIngresada != "utn750" && c != 3)
	{
		claveIngresada = prompt("Reingrese la clave.");
		c++;
	}
	if(c==3)
	{
		alert("Se le ha denegado el servicio");
	}
}
//mateo geminiani