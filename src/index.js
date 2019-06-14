
let textToProcess = document.getElementById("text");
let valueOffset = document.getElementById("offsetSelector");

/// TODAVÍA NO RESUELVO QUÉ VA  A HACER EL BOTÓN DE Panic
let getOut = () => {alert("enlazar a una página o un juego");
};
document.getElementById("panicButton").addEventListener("click", getOut);

let showEntry = () => {
  document.getElementById("product").style.display = "none";
  document.getElementById("entry").style.display= "block";
  document.getElementById("text").value= null;
  document.getElementById("offsetSelector").value= null;
};
document.getElementById("resetButton").addEventListener("click", showEntry);
//  document.getElementById("originalText")=  MARCAR CONTENIDO DE INICIO VACIO TAMBIÉN PARA resultText

let showEncode = () => {
  document.getElementById("entry").style.display = "none";
  document.getElementById("product").style.visibility = "visible";
  document.getElementById("originalText").value= textToProcess.value;
  document.getElementById("resultText").value = window.cipher.encode(valueOffset, textToProcess);
};
document.getElementById("encodeButton").addEventListener("click", showEncode);

let showDecode = () => {
  document.getElementById("entry").style.display = "none";
  document.getElementById("product").style.visibility = "visible";
  document.getElementById("originalText").value= textToProcess.value;
  document.getElementById("resultText").value = window.cipher.decode(valueOffset, textToProcess);
};
document.getElementById("decodeButton").addEventListener("click", showDecode);
