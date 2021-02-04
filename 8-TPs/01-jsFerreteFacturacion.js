/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var prec1, prec2, prec3;
function Sumar () 
{
	var suma;
	prec1 = txtIdPrecioUno.value;
	prec1 = parseInt(prec1);
	prec2 = txtIdPrecioDos.value;
	prec2 = parseInt(prec2);
	prec3 = txtIdPrecioTres.value;
	prec3 = parseInt(prec3);
	suma = prec1 + prec2 + prec3;
	alert("La suma de los precios sin iva es $"+suma);
}
function Promedio () 
{
	var sumapromedio;
	prec1 = txtIdPrecioUno.value;
	prec1 = parseInt(prec1);
	prec2 = txtIdPrecioDos.value;
	prec2 = parseInt(prec2);
	prec3 = txtIdPrecioTres.value;
	prec3 = parseInt(prec3);
	sumapromedio = (prec1 + prec2 + prec3)/3;	
	alert("El promedio de los precios es de $"+sumapromedio);
}
function PrecioFinal () 
{
	var sumaFinal;
	prec1 = txtIdPrecioUno.value;
	prec1 = parseInt(prec1);
	prec2 = txtIdPrecioDos.value;
	prec2 = parseInt(prec2);
	prec3 = txtIdPrecioTres.value;
	prec3 = parseInt(prec3);
	sumaFinal = (prec1 + prec2 + prec3)*1.21;
	alert("El precio final es de $"+sumaFinal);
}