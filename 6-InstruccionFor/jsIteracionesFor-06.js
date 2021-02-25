function mostrar()
{
	var cantidad;
	var c;
	c = 0;
	cantidad = prompt("Ingrese un numero");
	for(f=1;f!=cantidad;f++)
	{
		if(f%2==0)
		{
			c++;
		}
	}
	document.write(c)

}//FIN DE LA FUNCIÓN