/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
	var tipoIng;
	var precioIng;
	var cantidadesIng;
	var marcaIng;
	var fabricanteIng;
	var cantidadesBarbijo;
	var cantidadesJabon;
	var cantidadesAlcohol;
	var precioBarbijo;
	var precioAlcohol;
	var precioJabon;
	var alcoholMasBarato;
	var precioAlcoholMasBarato;
	var cantidadesAlcoholMasBarato;
	var promedioDeCompra;
	var totalcompra;

	cantidadesBarbijo = 0;
	cantidadesAlcohol = 0;
	cantidadesJabon = 0;
	precioBarbijo = 0;
	precioAlcohol = 0;
	precioJabon = 0;
	var con;
	con = 0;
	while(con != 5)
	{
		tipoIng = prompt("Ingrese tipo del producto (ingrese \"barbijo\", \"jabon\", \"alcohol\")");
		while(isNaN(tipoIng)==false || tipoIng != "barbijo" && tipoIng != "jabon" && tipoIng != "alcohol")
		{
			tipoIng = prompt("\\ERROR\\ Ingrese tipo del producto (ingrese \"barbijo\", \"jabon\", \"alcohol\")")
		}
		precioIng = prompt("Ingrese precio del producto.");
		while(isNaN(precioIng)==true || precioIng < 100 || precioIng > 300)
		{
			precioIng = prompt("\\ERROR\\ Ingrese precio del producto (entre 100 y 300)");
		}
		precioIng = parseInt(precioIng);
		cantidadesIng = prompt("Ingrese cantidades adquiridas.");
		while(isNaN(cantidadesIng)==true || cantidadesIng < 1 || cantidadesIng > 1000)
		{
			cantidadesIng = prompt("\\ERROR\\ Ingrese cantidades adquiridas. (no puede superar 1000)");
		}
		cantidadesIng = parseInt(cantidadesIng);
		marcaIng = prompt("Ingrese marca del producto");
		fabricanteIng = prompt("Ingrese fabricante del producto");

		switch(tipoIng)
		{
			case "barbijo":
				precioBarbijo = precioBarbijo + (precioIng * cantidadesIng);
				cantidadesBarbijo = cantidadesBarbijo + cantidadesIng;
			break
			case "jabon":
				precioJabon = precioJabon + (precioIng * cantidadesIng);
				cantidadesJabon = cantidadesJabon + cantidadesIng;
			break
			case "alcohol":
				precioAlcohol = precioAlcohol +  (precioIng * cantidadesIng);
				if(precioAlcoholMasBarato > precioIng || cantidadesAlcohol == 0)
				{
					alcoholMasBarato = fabricanteIng;
					cantidadesAlcoholMasBarato = cantidadesIng;
					precioAlcoholMasBarato = precioIng;
				}
				cantidadesAlcohol = cantidadesAlcohol + cantidadesIng;
		}

		con++
	}
	alert("El alcohol mas barato es fabricado por "+alcoholMasBarato+" y se compran "+cantidadesAlcoholMasBarato+" unidades");

	if(cantidadesAlcohol > cantidadesJabon && cantidadesAlcohol > cantidadesBarbijo)
	{
		promedioDeCompra = precioAlcohol / cantidadesAlcohol;
		alert("Se compran mas unidades de alcohol y su promedio de compra es "+promedioDeCompra+"$");
	}
	else
	{
		if(cantidadesBarbijo > cantidadesJabon)
		{
			promedioDeCompra = precioBarbijo / cantidadesBarbijo;
			alert("Se compran mas unidades de barbijo y su promedio de compra es "+promedioDeCompra+"$");
		}
		else
		{
			promedioDeCompra = precioJabon / cantidadesJabon;
			alert("Se compran mas unidades de jabon y su promedio de compra es "+promedioDeCompra+"$");
		}
	}

	alert("La cantidad de jabon que se compro fue "+ cantidadesJabon);
}
/*a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/