import { renderHome } from "./home";
import { renderCollection } from "./collection";
import { renderContact } from "./contact";
import { renderHeader } from "./header";

renderHeader();
renderHome();

let homeButton = document.querySelector("#home-button");
homeButton.addEventListener("click", () => {

    try{
    
        let sectionB = document.querySelector("#sectionB");
        sectionB.remove();
    
    }

    catch(error){console.log("Section B - Handled!");}

    try{

        let sectionC = document.querySelector("#sectionC");
        sectionC.remove();
    }

    catch(error){console.log("Section C - Handled!");}
    renderHome();

}, true);

let collectionsButton = document.querySelector("#collection-button");
collectionsButton.addEventListener("click", () => {

    try{
    
        let sectionB = document.querySelector("#sectionB");
        sectionB.remove();
    
    }

    catch(error){console.log("Section B - Handled!");}

    try{

        let sectionC = document.querySelector("#sectionC");
        sectionC.remove();
    }

    catch(error){console.log("Section C - Handled!");}
    renderCollection();

}, true);

let contactButton = document.querySelector("#contact-button");
contactButton.addEventListener("click", () => {

    try{
    
        let sectionB = document.querySelector("#sectionB");
        sectionB.remove();
    
    }

    catch(error){console.log("Section B - Handled!");}

    try{

        let sectionC = document.querySelector("#sectionC");
        sectionC.remove();
    }

    catch(error){console.log("Section C - Handled!");}
    renderContact();

}, true);