/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo, aumentado, extra;
	sueldo = txtIdSueldo.value;
	sueldo = parseInt(sueldo);
	extra = sueldo * 0.1;
	aumentado = sueldo + extra;//*1.1; //+ (sueldo/10);
	txtIdResultado.value = aumentado;
}
//mateo geminiani
