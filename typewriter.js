"use strict";

window.addEventListener("DOMContentLoaded", init);

//global variabel typerwriter læses fra #'et typerwriter i HTML'en
let typewriter = document.querySelector("#typewriter").textContent;

//global variablen dest er her hvor vores indhold(textContent)placeres igen
//efter endt gennemløb i loop'et
let dest = document.querySelector("#typewriter");

//variablen counter starter på position 0 i vores string
let counter = 0;

//
function init() {
  console.log("init");
  dest.textContent = "";

  //functionen loop fires
  loop();
}
//Denne function løber vores sting igennem som et loop,
//så længe at vores string er > end vores counter
function loop() {
  if (typewriter.length > counter) {
    counter++;

    //længden af vores string(typewriter)
    let textLength = typewriter.slice(0, counter);

    //
    dest.textContent = textLength;
    setTimeout(loop, 400);
  }
}
