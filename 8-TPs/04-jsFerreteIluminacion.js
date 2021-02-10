/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidad;
 	var marcaLampara;
 	var preciof;
 	cantidad = txtIdCantidad.value;
 	cantidad = parseInt(cantidad);
 	preciof = cantidad * 35;
 	marcaLampara = Marca.value;
 	if(cantidad > 5)
 	{
 		preciof = preciof * 0.5;
 	}
 	else
 	{
 		if(cantidad == 5)
 		{
 		 	if(marcaLampara == "ArgentinaLuz")
 		 	{
 		 	 	preciof = preciof * 0.6;
 		 	}
 		 	else
 		 	{
 		 	 	preciof = preciof * 0.7;
 		 	}
 		}
 		else
 		{
 			if(cantidad == 4)
 			{
 				if(marcaLampara == "ArgentinaLuz" || marcaLampara == "FelipeLamparas")
 				{
 				 	preciof = preciof * 0.75;
 				}
 				else
 				{
 				 	preciof = preciof * 0.80;
 				}
 			}
 			else
 			{
 			 	if(cantidad == 3)
 			 	{
 			 	 	if(marcaLampara == "ArgentinaLuz")
 			 	 	{
 			 	 	 	preciof = preciof * 0.85;
 			 	 	}
 			 	 	else
 			 	 	{
 			 	 	 	if(marcaLampara == "FelipeLamparas")
 			 	 	 	{
 			 	 	 	 	preciof = preciof * 0.90;
 			 	 	 	}
 			 	 	 	else
 			 	 	 	{
 			 	 	 	 	preciof = preciof * 0.95;
 			 	 	 	}
 			 	 	}
 			 	}
 			}
 		}
 	}

 	if(preciof > 120)
 	{
 		var ib;
 		ib = preciof * 0.1;
 		preciof = preciof + ib;
 		txtIdprecioDescuento.value = preciof;
 		alert("IIBB Usted pagó "+ib);
 	}
 	else
 	{
 	 	txtIdprecioDescuento.value = preciof;
 	}
}
//mateo geminiani