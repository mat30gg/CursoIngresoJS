function mostrar()
{
	var destinoIngresado;
	destinoIngresado =txtIdDestino.value;
	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			alert("FRIO");
			break
		case "Cataratas":
		case "Mar del plata":
			alert("CALOR");
	}
}
//mateo geminiani