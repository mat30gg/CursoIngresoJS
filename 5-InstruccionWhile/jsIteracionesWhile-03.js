/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	var c = 0;
	claveIngresada = prompt("Ingrese la clave");
	while(claveIngresada != "utn750" && c != 2)
	{
		claveIngresada = prompt("Reingrese la clave.");
		c++;
	}
}
//mateo geminiani