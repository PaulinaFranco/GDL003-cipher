/// LLAMANDO BOTONES

document.getElementById("encodeButton").addEventListener("click", showEncode);
document.getElementById("decodeButton").addEventListener("click", showDecode);
let textToProcess = document.getElementById("text");
let valueOffset = document.getElementById("offsetSelector");
/// TODAVÍA NO RESUELVO QUÉ VA  A HACER EL BOTÓN DE PÁNICO
document.getElementById("panicButton").addEventListener("click", function(){
  alert (textToProcess.value + valueOffset.value);
let valueText = textToProcess.value;
console.log(window.cipher.encode (textToProcess));
});
///FALTA ACTIVAR BOTÓN DE REGRESO -resetButton


//tengo problemas para mostrar elemento product
function showEncode (){
  document.getElementById("entry").style.display = "none";
  document.getElementById("product").style.visibility = "visible";
  document.getElementById("originalText").value= textToProcess.value;
  document.getElementById("resultText").value = window.cipher.encode (textToProcess);
};

function showDecode (){
  document.getElementById("entry").style.display = "none";
  document.getElementById("product").style.visibility = "visible";
  document.getElementById("originalText").value= textToProcess.value;
  document.getElementById("resultText").value = window.cipher.decode (textToProcess);
};
