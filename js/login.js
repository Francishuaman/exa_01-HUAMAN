var total= 0;
var stotal2 = 0
var subtotal=0;
var t=0;


function promedio(precio,cantidad){

	var precio = (cantidad*precio);
	 t = subtotal+precio;
     subtotal = t
	document.getElementById("Total").innerHTML = t;
}
function igv(){
	var ig = t + 1.4;

}

function Login(){ 
var usuario= document.getElementById('usuario').value;
var pass= document.getElementById('contra').value;
var name="francishuaman";
var apell="123456789";
if (usuario==(name) && pass==(apell)) { 
	alert("En hora buena");
	window.location("segunda.html");
} 
else
{  
    alert("Ingrese los datos correctos");
 }
} 
var i=0;
var ts=0;
function formulario(){
 var x=document.getElementById("frame");
 	x.setAttribute('src','formulario.html');
 	

}
function agregar(){
	i++;
	var w = document.getElementById("producto");
	w.remove(w.selectedIndex);
	var nucodi=document.getElementById("codigo").value;
	var no=document.getElementById("nombre").value;
	var fe=document.getElementById("fecha").value;
	var canti=document.getElementById("cantidad").value;
	var pre=document.getElementById("precio").value;
	var produc=document.getElementById("producto").value;
	var tb = document.getElementById("data");
	ts=(parseInt(canti)*parseFloat(pre));
	var fila="<tr><td>"+i+"</td><td>"+nucodi+"</td><td>"+no+"</td><td>"+fe+"</td><td>"+produc+"</td><td>"+canti+"</td><td>"+ts+"</td><td><a href='#' onclick='editar(this)'><img src='iconos/e.png'><a href='#' onclick='eliminar(this)'><img src='iconos/d.png'></td>";
    var fil = document.createElement("tr");
   	fil.innerHTML=fila;
	tb.appendChild(fil);
	promedio(pre,canti);
	limpiar();
	alert("Compra agregado correctamente al carrito...titi jaja xd");
	
}
function limpiar(){
    document.getElementById("codigo").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("producto").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("precio").value = "";
}
function eliminar(p){   
    var opcion = confirm("¿Desea eliminar esta compra del carrito?");
    if (opcion == true) {
        var i = p.parentNode.parentNode.rowIndex;
        document.getElementById("data").deleteRow(i);
        alert("Eliminado correctamente");        
    } else {
        alert("¡Ups!..Ocurrió un error");     
    }
}
function editar(p){
ri = p.parentNode.parentNode.rowIndex;
document.getElementById("codigo").value = document.getElementById("data").rows[ri].cells[1].innerText;
document.getElementById("nombre").value = document.getElementById("data").rows[ri].cells[2].innerText;
document.getElementById("fecha").value = document.getElementById("data").rows[ri].cells[3].innerText;
document.getElementById("producto").value = document.getElementById("data").rows[ri].cells[4].innerText;
document.getElementById("cantidad").value = document.getElementById("data").rows[ri].cells[5].innerText;
document.getElementById("precio").value = document.getElementById("data").rows[ri].cells[6].innerText;
}
function modificar(){   
	var opcion = confirm("¿Desea modificar?");
    if (opcion == true) {
        data.rows[ri].cells[1].innerHTML = document.getElementById("codigo").value;
        data.rows[ri].cells[2].innerHTML = document.getElementById("nombre").value;
        data.rows[ri].cells[3].innerHTML = document.getElementById("fecha").value;
        data.rows[ri].cells[4].innerHTML = document.getElementById("producto").value;
        data.rows[ri].cells[5].innerHTML = document.getElementById("cantidad").value;
        data.rows[ri].cells[6].innerHTML = document.getElementById("precio").value;

        alert("Modificado correctamente");
    } else {
        mensaje("¡Ups!..Ocurrió un error");               
    }	
    limpiar(); 
 }
