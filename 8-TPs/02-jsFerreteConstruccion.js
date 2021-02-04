/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var largo, ancho, radio;
function Rectangulo () 
{
	var alambreRectangulo;
	largo = txtIdLargo.value;
	largo = parseInt(largo);
	ancho = txtIdAncho.value;
	ancho = parseInt(ancho);
	alambreRectangulo = (largo * ancho)*3;
	alert("Para un terreno rectangular de "+largo+" metros de largo y "+ancho+" metros de ancho se necesitan "+alambreRectangulo+" metros de alambre");
}
function Circulo () 
{
	var alambreCircular;
	radio = txtIdRadio.value;
	radio = parseFloat(radio);
	alambreCircular = (radio * 3.14159265359)*3;
	alert("Para un terreno circular con un radio de "+radio+" metros se necesitan "+alambreCircular+" metros de alambre");
}
function Materiales () 
{
	var bolsaCemento;
	var bolsaCal;
	largo = txtIdLargo.value;
	largo = parseInt(largo);
	ancho = txtIdAncho.value;
	ancho = parseInt(ancho);
	var areaRectangulo;
	areaRectangulo = largo * ancho;
	bolsaCal = areaRectangulo * 3;
	bolsaCemento = areaRectangulo * 2;
	alert("Para hacer un contrapiso en el terreno rectangular se necesitan "+bolsaCemento+" bolsas de cemento y "+bolsaCal+" bolsas de cal");
}