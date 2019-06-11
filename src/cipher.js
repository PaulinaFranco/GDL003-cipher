//ARCHIVO PARA LAS FUNCIONES

window.cipher = {
    encode: function(textToProcess) {
            console.log(textToProcess.value);
            let textSplit = textToProcess.value.split("");
            console.log(textSplit);
    // arrow function const funcion = () =>*
            let valueOffset = document.getElementById("offsetSelector");
            let almostEncoded = textSplit.map((x) =>
            String.fromCharCode(x.charCodeAt() + valueOffset.value %26));

            console.log(almostEncoded);
            console.log(typeof almostEncoded);
            console.log(Array.isArray(almostEncoded));
            return almostEncoded.join("");
          },


 decode: function(textToProcess) {
        console.log(textToProcess.value);
        let textSplit = textToProcess.value.split("");
        console.log(textSplit);
        let valueOffset = document.getElementById("offsetSelector");
        let almostDecoded = textSplit.map((x) =>
        String.fromCharCode(x.charCodeAt() - valueOffset.value %26));
        console.log(almostDecoded);
        return almostDecoded.join("");
}
};
          // arrow function const funcion = () =>*
          //  let valueOffset = document.getElementById("offsetSelector");

/*  //AÚN NO ENTIENDO ESTA FÓRMULA
function decode("textToProcess") {
  let textSplit = textToProcess.split(" ");
  let check = textSplit.map(1 => 1.charCodeAt());
}*/
  //string? array? y offset serían los parámetro
