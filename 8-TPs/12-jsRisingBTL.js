/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive. txtIdEdad.value
B.	Sexo, “M” para masculino y “F” para femenino txtIdSexo.value
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos txtIdEstadoCivil.value
D.	Sueldo bruto, no menor a 8000. txtIdSueldo.value
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda. txtIdLegajo.value
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados. txtIdNacionalidad.value
 */
function ComenzarIngreso () 
{
	var h;
	h = 0;
 	while(h < 18 || h > 90 || isNaN(h)==true)
 	{
 		h = prompt("Ingrese edad entre 18 y 90 años");
 	}
 	txtIdEdad.value = h;
 	while(h != "F" && h != "M" || isNaN(h)==false)
 	{
 		h = prompt("Ingrese sexo M para masculino y F para femenino");
 	}
 	txtIdSexo.value = h;
 	while(h < 1 || h > 4 || isNaN(h)==true)
 	{
 		h = prompt("Ingrese estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
 	}
 	txtIdEstadoCivil.value = h;
 	while(h < 8000 || isNaN(h)==true)
 	{
 		h = prompt("Ingrese sueldo bruto, no menor a 8000.");
 	}
 	txtIdSueldo.value = h;
 	h = 0;
 	while(h < 999 || h > 9999)
 	{
 		h = prompt("Ingrese número de legajo, numérico de 4 cifras, sin ceros a la izquierda.");
 	}
 	txtIdLegajo.value = h;
 	while(h != "A" && h != "E" && h != "N")
 	{
 		h = prompt("Ingrese nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
 	}
 	txtIdNacionalidad.value = h;
}
