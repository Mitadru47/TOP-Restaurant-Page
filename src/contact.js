function renderContact(){

    let primaryContainer = document.querySelector("#primary-container");

    let sectionC = document.createElement("div");
    sectionC.setAttribute("id", "sectionC");

    let secondaryContainer = document.createElement("div");
    secondaryContainer.setAttribute("id", "secondary-container");
    
    let contactItems = document.createElement("div");
    contactItems.setAttribute("id", "contactItems");

    // Block 1:

    let div1 = document.createElement("div");

    div1.classList.add("contactLine1");
    div1.innerText = "Contact Us Anytime!";

    let div2 = document.createElement("div");

    div2.classList.add("contactLine2");
    div2.innerText = "Please don't";

    let block1 = document.createElement("div");

    block1.appendChild(div1);
    block1.appendChild(div2);

    // Block 1.5:
    let blockSeparator = document.createElement("div");

    // Block 2:

    let div3 = document.createElement("div");

    div3.classList.add("contactLine2");
    div3.innerText = "fakeEmail@definitelyNotFake.email";

    let div4 = document.createElement("div");

    div4.classList.add("contactLine2");
    div4.innerText = "(007) 420-1234";

    let block2 = document.createElement("div");

    block2.appendChild(div3);
    block2.appendChild(div4);

    contactItems.appendChild(block1);
    contactItems.appendChild(blockSeparator);
    contactItems.appendChild(block2);
    
    secondaryContainer.appendChild(contactItems);
    sectionC.appendChild(secondaryContainer);
    
    primaryContainer.appendChild(sectionC);
}

export { renderContact };