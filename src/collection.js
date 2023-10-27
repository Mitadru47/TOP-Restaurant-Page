function renderCollection(){

    let primaryContainer = document.querySelector("#primary-container");

    let sectionC = document.createElement("div");
    sectionC.setAttribute("id", "sectionC");

    let secondaryContainer = document.createElement("div");
    secondaryContainer.setAttribute("id", "secondary-container");

    // Food:
    
    let foodItems = document.createElement("div");
    foodItems.setAttribute("id", "foodItems");

    let foodList = [
        
        {
            name: "Undercooked Meat",
            price: "$87.99",
        },

        {
            name: "Dry Twigs", 
            price: "$27.99", 
        },

        {
            name: "Bunless Burger", 
            price: "$37.99", 
        },

        {
            name: "$5 Ramen", 
            price: "$17.99", 
        }
        
    ];

    for(let i=0; i<foodList.length; i++){

        let div1 = document.createElement("div");

        div1.classList.add("itemName");
        div1.innerText = foodList[i].name;

        let div2 = document.createElement("div");

        div2.classList.add("itemPrice");
        div2.innerText = foodList[i].price;

        let div = document.createElement("div");

        div.appendChild(div1);
        div.appendChild(div2);

        foodItems.appendChild(div);
    }

    // Drinks:

    let drinks = document.createElement("div");
    drinks.setAttribute("id", "drinks");

    let drinksList = [

        {
            name: "1987 Tap Water Vintage",
            price: "$57.99",
        },

        {
            name: "Vinegar on Ice",
            price: "$17.99",
        }

    ];

    for(let i=0; i<drinksList.length; i++){

        let div1 = document.createElement("div");

        div1.classList.add("itemName");
        div1.innerText = drinksList[i].name;

        let div2 = document.createElement("div");

        div2.classList.add("itemPrice");
        div2.innerText = drinksList[i].price;

        let div = document.createElement("div");

        div.appendChild(div1);
        div.appendChild(div2);

        drinks.appendChild(div);
    }

    secondaryContainer.appendChild(foodItems);
    secondaryContainer.appendChild(drinks);
    
    sectionC.appendChild(secondaryContainer);
    primaryContainer.appendChild(sectionC);
}

export { renderCollection };