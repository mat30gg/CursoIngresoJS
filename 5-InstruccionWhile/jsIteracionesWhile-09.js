/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	var banderaDelPrimero;
	var banderaPar;
	var banderaNegativa;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	var menorPar;
	var mayorNegativo;

	menorPar="No hay pares";
	mayorNegativo="No hay negativos";
	banderaNegativa="primero";
	banderaPar="primero";
	banderaDelPrimero="primero";
	respuesta='si';
	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		
		if(numeroIngresado < 0)
		{
			if(banderaNegativa == "primero" || numeroIngresado > mayorNegativo)
			{
				mayorNegativo = numeroIngresado;
				banderaNegativa = "no";
			}
		}
		if((numeroIngresado%2)==0)
		{
			if(banderaPar == "primero" || numeroIngresado < menorPar)
			{
				menorPar = numeroIngresado;
				banderaPar = "no";
			}
		}

		if(banderaDelPrimero == "primero" || numeroIngresado > numeroMaximo)
		{
			numeroMaximo = numeroIngresado;
		}
		if(banderaDelPrimero == "primero" || numeroIngresado < numeroMinimo)
		{
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = "no";
		}
		respuesta=prompt("desea continuar? si/no");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
	alert(mayorNegativo);
	alert(menorPar);
}
//mateo geminiani