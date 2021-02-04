/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//mateo geminiani
	var suma;
	var num1, num2;
	num1 = parseInt(txtIdNumeroUno.value);
	num2 = parseInt(txtIdNumeroDos.value);
	suma = num1 + num2;
	alert("la suma es: "+suma);
}
