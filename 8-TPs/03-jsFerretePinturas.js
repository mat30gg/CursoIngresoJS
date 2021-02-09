/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

function FahrenheitCentigrados () 
{
	var temperaturaFahrenheit, temperaturaCelsius;
	temperaturaFahrenheit = txtIdTemperatura.value;
	temperaturaFahrenheit = parseInt(temperaturaFahrenheit);
	temperaturaCelsius = (temperaturaFahrenheit - 32)* 5/9;
	alert(temperaturaFahrenheit+" °F = "+temperaturaCelsius+" °C");
}

function CentigradosFahrenheit () 
{
	var temperaturaFahrenheit, temperaturaCelsius;
	temperaturaCelsius = txtIdTemperatura.value;
	temperaturaCelsius = parseInt(temperaturaCelsius);
	temperaturaFahrenheit = (temperaturaCelsius * 9/5) +32;
	alert(temperaturaCelsius+" °C = "+temperaturaFahrenheit+" °F");
}
//mateo geminiani