function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var tarifa;
	estacionIngresada =txtIdEstacion.value;
	destinoIngresado = txtIdDestino.value;
	tarifa = 15000;
	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					tarifa = tarifa * 1.20;
					break

				case "Cataratas":
				case "Cordoba":
					tarifa = tarifa * 0.90;
					break

				case "Mar del plata":
					tarifa = tarifa * 0.80;
			}
			break

		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					tarifa = tarifa * 0.80;
					break

				case "Cataratas":
				case "Cordoba":
					tarifa = tarifa * 1.10;
					break

				case "Mar del plata":
					tarifa = tarifa * 1.20;
			}
			break

		case "Otoño":
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					tarifa = tarifa * 1.10;
			}
	}

	alert("La tarifa a pagar es de $"+ tarifa);
}
//mateo geminiani