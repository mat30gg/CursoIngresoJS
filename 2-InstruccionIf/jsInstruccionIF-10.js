function mostrar()
{
	var nota;
	nota = (Math.random()*10) + 1;
	if(nota > 8)
	 {
	 	alert("EXCELENTE");
	 }
	 else
	 {
	 	if(nota > 3)
	 	 {
	 	 	alert("APROBÓ");
	 	 }
	 	 else
	 	 {
	 	 	alert("Vamos, que la proxima se puede");
	 	 }
	 }
}
//mateo geminiani