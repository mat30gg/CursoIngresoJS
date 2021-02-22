function mostrar()
{
	var mesDelAño;
	mesDelAño =txtIdMes.value;
	switch(mesDelAño)
	{
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio.");
			break
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Marzo":
			alert("Falta para el invierno.");
			break
		default:
			alert("Ya pasamos el frio, ahora calor!!!.");
	}
}
//mateo geminiani