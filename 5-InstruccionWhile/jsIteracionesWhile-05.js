/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	while(sexoIngresado != "f" && sexoIngresado != "m")
	{
		sexoIngresado = prompt("ingrese f ó m .");
		sexoIngresado = sexoIngresado.toLowerCase();
	}
	txtIdSexo.value=sexoIngresado;
}//mateo geminiani