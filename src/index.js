/// LLAMANDO BOTONES

document.getElementById("encodeButton").addEventListener("click", showProduct);
document.getElementById("decodeButton").addEventListener("click", showProduct);
let textToProcess = document.getElementById("text");
let valueOffset = document.getElementById("offsetSelector");
/// TODAVÍA NO RESUELVO QUÉ VA  A HACER EL BOTÓN DE PÁNICO
document.getElementById("panicButton").addEventListener("click", function(){
  alert (textToProcess.value + valueOffset.value);
  let valueText = textToProcess.value;
    console.log(window.cipher.decode(valueText));
});
///FALTA ACTIVAR BOTÓN DE REGRESO -resetButton

//tengo problemas para mostrar elemento product
function showProduct (){
  document.getElementById("entry").style.display = "none";
    document.getElementById("product").style.visibility = "visible";
}
