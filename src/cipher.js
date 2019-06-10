//ARCHIVO PARA LAS FUNCIONES

window.cipher = {
  encoding: function(textToProcess) {
    ///
    console.log(textToProcess);
    const textSplit = textToProcess.split("");
    ///
    console.log(textSplit);
    // arrow function const funcion = () =>*
    let letters = textSplit.map((x) => {
    return x.charCodeAt();
    })
    ///
  console.log(letters);
  }
  // AQUÍ UN OBJETO QUE CONSTA DE PROPIEDAD Y SU VALOR...

/*  //AÚN NO ENTIENDO ESTA FÓRMULA
function decode("textToProcess") {
  let textSplit = textToProcess.split(" ");
  let check = textSplit.map(1 => 1.charCodeAt());
}*/
  //string? array? y offset serían los parámetro
};
