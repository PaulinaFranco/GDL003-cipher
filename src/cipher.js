window.cipher = {
    encode:
        (valueOffset, textToProcess) => {
        console.log(textToProcess.value);
        let textSplitECD = textToProcess.value.split("");
        console.log(textSplitECD);
        let almostEncoded = textSplitECD.map((x) =>
          String.fromCharCode(x.charCodeAt() + valueOffset.value%26)) ;

          //let alreadyEncoded =  String.fromCharCode
        console.log(almostEncoded);
        console.log(typeof almostEncoded);
        console.log(Array.isArray(almostEncoded));
        return almostEncoded.join("");
      },

    decode:
       (valueOffset, textToProcess) => {
          console.log(textToProcess.value);
        let textSplitDCD = textToProcess.value.split("");
          console.log(textSplitDCD);
        let almostDecoded = textSplitDCD.map((x) =>
        String.fromCharCode(x.charCodeAt() - valueOffset.value %26));
          console.log(almostDecoded);
        return almostDecoded.join("");
}
};
