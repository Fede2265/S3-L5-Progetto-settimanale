function n(dato){ 
    document.getElementById("risultati").value+=dato;
}
 
function operazione() { 
 document.getElementById("risultati").value=eval(document.getElementById("risultati").value); 
}
 
function cancella() { 
  document.getElementById("risultati").value=""; 
}


