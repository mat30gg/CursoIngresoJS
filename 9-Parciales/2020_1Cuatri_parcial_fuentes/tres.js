function mostrar()
{
	var contador;
	var c;
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperaturaCorporal;

	var masTempera;
	var nombreMasTempera;
	var mayoresViudos;
	var solterosYviudos;
	var terceraCon38;
	var sumaSolteros;
 	var promedioSolteros;


	solterosYviudos = 0;
	mayoresViudos = 0;
	terceraCon38 = 0;
	c=0;
	contador = prompt("Cuantas personas abordan el avion"); 
	while(isNaN(contador)==true)
	{
		contador = prompt("Cuantas personas abordan el avion");
	}
	contador = parseInt(contador);
	while(c != contador)
	{
		nombre = prompt("Nombre:");
		while(isNaN(nombre)==false)
		{
			nombre = prompt("Nombre:");
		}
		edad = prompt("Edad:");
		while(isNaN(edad)==true)
		{
			edad = prompt("Edad:");
		}
		edad = parseInt(edad);
		sexo = prompt("Sexo (M o F):");
		while(sexo != "M" && sexo != "F")
		{
			sexo = prompt ("Sexo (M o F):");
		}
		estadoCivil = prompt("Estado civil:");
		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt("Estado civil:");
		}
		temperaturaCorporal = prompt("Temperatura corporal:");
		while(isNaN(temperaturaCorporal)==true)
		{
			temperaturaCorporal = prompt("Temperatura corporal:");
		}
		if(c == 0 || masTempera < temperaturaCorporal)
		{
			nombreMasTempera = nombre; 
		}
		switch(estadoCivil)
		{
			case "soltero":
			solterosYviudos++;
			sumaSolteros = sumaSolteros + edad;
			break
			case "viudo":
			solterosYviudos++;
			if(edad > 17)
			{
				mayoresViudos++;
			}
		}
		if(edad > 59 && temperaturaCorporal > 38)
		{
			terceraCon38++;
		}
		c++;
	}
	promedioSolteros = sumaSolteros / contador;

	alert("La persona con mas temperatura es "+nombreMasTempera);
	alert("La cantidad de mayores que estan viudos es de "+mayoresViudos);
	alert("La cantidad de solteros y/o viudos que hay es de "+solterosYviudos);
	alert("La cantidad de personas de tercera edad que tienen mas de 38° de temperatura corporal es "+terceraCon38);
	alert("El promedio de edad entre los hombres solteros es "+promedioSolteros);
}
/*En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros. */