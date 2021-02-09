function mostrar()
{
	var edad;
	var estCivil;
	estCivil = estadoCivil.value;
	edad = txtIdEdad.value;
	if(edad < 19 && estCivil != "Soltero")
	 {
		alert("Es muy pequeño para NO ser soltero.");
	 }
}
//mateo geminiani