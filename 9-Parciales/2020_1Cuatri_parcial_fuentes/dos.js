function mostrar()
{
	var contador;
	var c;
	var tipoIng;
	var cantIng;
	var precioIng;
	var descuentoTotal;
	var arenaBolas;
	var calBolas;
	var cementoBolas;
	var arenaPresio;
	var calPresio;
	var cementoPresio;
	var precioTotal;
	var masCaro;
	var tipoMasCaro

	arenaBolas = 0;
	calBolas = 0;
	cementoBolas = 0;
	arenaPresio = 0;
	c = 0;
	precioTotal = 0;
	descuentoTotal = 0;

	contador = prompt("Cuantos productos va a comprar");
	while(c != contador)
	{
		tipoIng = prompt("Ingrese material de construccion");
		while(isNaN(tipoIng)==false || tipoIng != "arena" && tipoIng != "cal" && tipoIng != "cemento")
		{
			tipoIng = prompt("\\ERROR\\ Ingrese material de construccion (arena;cal;cemento)");
		}
		cantIng = prompt("Ingrese cantidad de compra");
		while(isNaN(cantIng)==true)
		{
			cantIng = prompt ("\\ERROR\\ Ingrese cantidad de compra");
		}
		cantIng = parseInt(cantIng);
		precioIng = prompt("Ingrese el precio de compra");
		while(isNaN(precioIng)==true || precioIng < 1)
		{
			precioIng = prompt ("\\ERROR\\ Ingrese el precio de compra");
		}


		switch(tipoIng)
		{
			case "arena":
				arenaBolas = arenaBolas + cantIng;
				arenaPresio = arenaPresio + precioIng;
				if(arenaPresio > masCaro || c == 0)
				{
					tipoMasCaro = tipoIng;
					masCaro = precioIng;
				}
			break
			case "cal":
				calBolas = calBolas + cantIng;
				calPresio = calPresio + precioIng;
				if(calPresio > masCaro || c == 0)
				{
					tipoMasCaro = tipoIng;
					masCaro = precioIng;
				}
			break
			case "cemento":
				cementoBolas = cementoBolas + cantIng;
				cementoPresio = cementoPresio + precioIng;
				if(cementoPresio > masCaro || c == 0)
				{
					tipoMasCaro = tipoIng;
					masCaro = precioIng;
				}
		}
		precioTotal = precioTotal + (precioIng * cantIng);
		c++;
	}

	if((cementoBolas + calBolas + arenaBolas) > 30)
	{
		descuentoTotal = precioTotal * 0.75;
	}
	else
	{
		if((cementoBolas + calBolas + arenaBolas) > 10)
		{
			descuentoTotal = precioTotal * 0.85;
		}
	}

	alert("El importe total a pagar (sin descuentos) es de "+precioTotal+"$");
	alert("EL importe total a pagar (con descuentos) es de "+descuentoTotal+"$");
	if(arenaBolas > calBolas && arenaBolas > cementoBolas)
	{
		alert("El material con mas bolsas es la arena");
	}
	else
	{
		if(calBolas > cementoBolas)
		{
			alert("El material con mas bolsas es la cal");
		}
		else
		{
			alert("El material con mas bolsas es el cemento");
		}
	}
	alert("El tipo mas caro es "+tipoMasCaro);
}
/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
	Tipo validad("arena";"cal";"cemento")
	Cantidad de bolsas,
	Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro */