//LLAMANDO BOTONES PARA CIFRAR Y DESCIFRAR EN INTRO
document.getElementById("encodeButton").addEventListener("click", encodeFunction);
document.getElementById("decodeButton").addEventListener("click", decodeFunction);

//FUNCIÓN CIFRAR
function encodeFunction() {
  alert = "check";
  //MOSTRANDO SECCIÓN DE RESULTADOS
  document.getElementById("result").style.display = "block";
  //OCULTANDO SECCIÓN INTRO
  document.getElementById("entry").style.display = "none";
};


//FUNCIÓN DESCIFRAR
function decodeFunction() {
  alert = "check";
  //MOSTRANDO SECCIÓN DE RESULTADOS
  document.getElementById("result").style.display = "block";
  //OCULTANDO SECCIÓN INTRO
  document.getElementById("entry").style.display = "none";
};
