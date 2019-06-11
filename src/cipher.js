//ARCHIVO PARA LAS FUNCIONES

window.cipher = {
  /*
  encode: function(textToProcess) {
            console.log(textToProcess);
            let textSplit = textToProcess.split("");
            console.log(textSplit);
    // arrow function const funcion = () =>*
            let valueOffset = document.getElementById("offsetSelector");
            let almostEncoded = textSplit.map((x) =>
            String.fromCharCode(x.charCodeAt() + valueOffset.value %26));

            console.log(almostEncoded);
            console.log(typeof almostEncoded);
            console.log(Array.isArray(almostEncoded));
            return almostEncoded;
          }, */

 decode: function(textToProcess) {
        console.log(textToProcess);
        let almostDecoded = textToProcess.split("");
        almostDecoded= String.fromCharCode(almostDecoded);
        console.log(almostDecoded);


          // arrow function const funcion = () =>*
          //  let valueOffset = document.getElementById("offsetSelector");
            }
          };

/*  //AÚN NO ENTIENDO ESTA FÓRMULA
function decode("textToProcess") {
  let textSplit = textToProcess.split(" ");
  let check = textSplit.map(1 => 1.charCodeAt());
}*/
  //string? array? y offset serían los parámetro
