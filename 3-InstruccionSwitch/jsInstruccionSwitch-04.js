function mostrar()
{
	var mesDelAño;
	mesDelAño = txtIdMes.value;
	switch(mesDelAño)
	{
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("El mes tiene 30 dias");
			break
		case "Febrero":
			alert("El mes tiene 28 dias");
			break
		default:
			alert("El mes tiene 31 dias");
	}
}
//mateo geminiani