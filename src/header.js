function renderHeader(){

    let content = document.querySelector("#content");

    let primaryContainer = document.createElement("div"); 
    primaryContainer.setAttribute("id", "primary-container");

    let sectionA = document.createElement("div");
    sectionA.setAttribute("id", "sectionA");

    // Heading:

    let heading = document.createElement("div");

    heading.setAttribute("id", "header");
    heading.innerText = "The Restaurant!";

    sectionA.appendChild(heading);

    // Tabs:

    let tabs = document.createElement("div");
    tabs.setAttribute("id", "tabs");

    let div1 = document.createElement("div");

    let home = document.createElement("button");

    home.setAttribute("id", "home-button");
    home.innerText = "Homepage";

    div1.appendChild(home);

    let div2 = document.createElement("div");

    let collection = document.createElement("button");

    collection.setAttribute("id", "collection-button");
    collection.innerText = "Checkout our Collection!";

    div2.appendChild(collection);

    let div3 = document.createElement("div");

    let contact = document.createElement("button");

    contact.setAttribute("id", "contact-button");
    contact.innerText = "Contact Us!";

    div3.appendChild(contact);

    tabs.appendChild(div1);
    tabs.appendChild(div2);
    tabs.appendChild(div3);

    sectionA.appendChild(tabs);

    let line = document.createElement("div");
    line.setAttribute("id", "line");

    primaryContainer.appendChild(sectionA);
    primaryContainer.appendChild(line);

    content.appendChild(primaryContainer);
}

export { renderHeader };