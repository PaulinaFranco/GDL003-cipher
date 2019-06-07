//ARCHIVO PARA LAS FUNCIONES

window.cipher = {
  decode: function(textToProcess) {
    console.log(textToProcess);
    let textSplit = textToProcess.split("");
    console.log(textSplit);
    // arrow function const funcion = () =>
    let check = textSplit.map((letra) => {
      return letra.charCodeAt();
    })
    console.log(check)
  }
  // AQUÍ UN OBJETO QUE CONSTA DE PROPIEDAD Y SU VALOR...

/*  //AÚN NO ENTIENDO ESTA FÓRMULA
function decode("textToProcess") {
  let textSplit = textToProcess.split(" ");
  let check = textSplit.map(1 => 1.charCodeAt());
}*/
  //string? array? y offset serían los parámetro
};
