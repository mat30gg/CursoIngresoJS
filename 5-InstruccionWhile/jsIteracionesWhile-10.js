/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{ 
	var respuesta;
	var numeroIngresado;
	var sumaPositivos;
	var sumaNegativos;
	var cantidadPosi;
	var cantidadNega;
	var ceros;
	var pares;
	var promedioPosi;
	var promedioNega;

	sumaNegativos=0;
	sumaPositivos=0;
	cantidadNega=0;
	cantidadPosi=0;
	ceros=0;
	pares=0;
	promedioPosi=0;
	promedioNega=0;

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado = prompt("ingrese numero");
		numeroIngresado = parseInt(numeroIngresado);
		if(numeroIngresado == 0)
		{
			ceros++;
		}
		else
		{
			if(numeroIngresado > 0)//suma positivos y ++
			{
				sumaPositivos = sumaPositivos + numeroIngresado;
				cantidadPosi++;
			}
			if(numeroIngresado < 0)//suma negativos y ++
			{
				sumaNegativos = sumaNegativos + numeroIngresado;
				cantidadNega++;
			}
		}
		if(numeroIngresado%2==0)
		{
			pares++;
		}
		respuesta=prompt("desea continuar?");
	}
	if(sumaPositivos != 0)
	{
		promedioPosi = sumaPositivos/cantidadPosi;
	}
	if(sumaNegativos != 0)
	{
		promedioNega = sumaNegativos/cantidadNega;
	}
	document.write("la suma de negativos es: "+sumaNegativos);
	document.write("<br>la suma de positivos es: "+sumaPositivos);
	document.write("<br>la cantidad de negativos es: "+cantidadNega);
	document.write("<br>la cantidad de positivos es: "+cantidadPosi);
	document.write("<br>la cantidad de ceros es: "+ceros);
	document.write("<br>la cantidad de pares es: "+pares);
	document.write("<br>el promedio de negativos es: "+promedioNega);
	document.write("<br>el promedio de positivos es: "+promedioPosi);
	document.write("<br>la diferencia entre negativos y positivos es: "+(sumaPositivos-sumaNegativos));
	//document.write("la suma de negativos es: "+sumaNegativos+"<br>la suma de positivos es: "+sumaPositivos+"<br>la cantidad de negativos es: "+cantidadNega+"<br>la cantidad de positivos es: "+cantidadPosi+"<br>la cantidad de ceros es: "+ceros+"<br>la cantidad de pares es: "+pares+"<br>el promedio de negativos es: "+promedioNega+"<br>el promedio de positivos es: "+promedioPosi+"<br>la diferencia entre negativos y positivos es: "+(sumaPositivos-sumaNegativos))
}
//mateo geminiani