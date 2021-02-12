function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	estacionIngresada =txtIdEstacion.value;
	destinoIngresado = txtIdDestino.value
	switch(estacionIngresada)
	{
		case "Invierno":
		switch(destinoIngresado)
		{
			default:
				alert("No se viaja");
				break
			case "Bariloche":
				alert("Se viaja");
		}
		break

		case "Verano":
		switch(destinoIngresado)
		{
			default:
				alert("No se viaja");
				break
			case "Mar del plata":
			case "Cataratas":
				alert("Se viaja");
		}
		break

		case "Otoño":
			alert("Se viaja");
		break

		case "Primavera":
		switch(destinoIngresado)
		{
			case "Bariloche":
				alert("No se viaja");
				break
			default:
				alert("Se viaja");
		}
	}
}
//mateo geminiani