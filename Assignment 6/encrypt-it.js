console.log("Window loaded!");
/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  //inits buttons 
  function init() {
    const encryptButton = document.getElementById("encrypt-it");
    const resetButton = document.getElementById("reset");
    encryptButton.addEventListener("click", encryptText);
    resetButton.addEventListener("click", handleReset);
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
  function encryptText() {
    const textArea = document.getElementById("input-text");
    const output = document.getElementById("result");
    const text = textArea.value.toLowerCase();
    let encryptedText = "";

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char >= 'a' && char < 'z') {
          char = String.fromCharCode(char.charCodeAt(0) + 1);
        }
        if (char == 'z'){
          char = 'a'
        }
        encryptedText += char;
    }

    output.textContent = encryptedText;
    console.log("Encrypted text: " + encryptedText);
}

function handleReset() {
    const textArea = document.getElementById("input-text");
    textArea.value = "";
    const output = document.getElementById("result");
    output.textContent = "";
    console.log("Text area cleared!");
}

})();
