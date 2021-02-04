/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe, descontado, descuento;
	importe = txtIdImporte.value;
	importe = parseInt(importe);
	descuento = importe * 0.25;
	descontado = importe - descuento; //-(importe/4)//* 0.75;
	txtIdResultado.value = descontado;
}
//mateo geminiani
