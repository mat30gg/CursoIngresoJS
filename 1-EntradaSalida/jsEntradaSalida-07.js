/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
//mateo geminiani
function sumar()
{	
	var num1, num2;
	var suma;
	num1 = parseInt(txtIdNumeroUno.value);
	num2 = parseInt(txtIdNumeroDos.value);
	suma = num1 + num2;
	alert("La suma es "+suma);
}

function restar()
{
	var num1, num2;
	var resta;
	num1 = parseInt(txtIdNumeroUno.value);
	num2 = parseInt(txtIdNumeroDos.value);
	resta = num1 - num2;
	alert("La resta es "+resta);
}

function multiplicar()
{ 
	var num1, num2;
	var prod;
	num1 = parseInt(txtIdNumeroUno.value);
	num2 = parseInt(txtIdNumeroDos.value);
	prod = num1 * num2;
	alert("El producto de los dos numeros es "+prod);
}

function dividir()
{
	var num1, num2;
	var cociente
	num1 = parseInt(txtIdNumeroUno.value);
	num2 = parseInt(txtIdNumeroDos.value);
	cociente = num1 / num2;
	alert("El cociente de los dos numeros es "+cociente);
}

