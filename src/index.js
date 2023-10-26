import { renderhome } from "./home";

let homeButton = document.querySelector("#home-button");
homeButton.addEventListener("click", () => {

    try{
    
        let sectionB = document.querySelector("#sectionB");
        sectionB.remove();

        let sectionC = document.querySelector("#sectionC");
        sectionC.remove();
    }

    catch(error){console.log("Handled!");}
    renderhome();

}, true);

// renderhome();