function renderhome(){

    // Section B:

    let primaryContainer = document.querySelector("#primary-container");
    
    let sectionB = document.createElement("div");
    sectionB.setAttribute("id", "sectionB");
    
    let bulletPoints = document.createElement("div");
    bulletPoints.setAttribute("id", "bullet-points");

    let points = [
        
        "- We will serve you food for money!", 
        "- We are open 24/7!",
        "- You can expect fresh veggies & meat once every full moon!", 
        "- The customer is always right but we don't care!",
        "- You will always be greeted with an unconvincing welcoming smile!"
    ];

    for(let i=0; i<5; i++){

        let div = document.createElement("div");
        div.innerText = points[i];

        bulletPoints.appendChild(div);
    }
    
    sectionB.appendChild(bulletPoints);

    // Section C:

    let sectionC = document.createElement("div");
    sectionC.setAttribute("id", "sectionC");
    
    let reviews = document.createElement("div");
    reviews.setAttribute("id", "reviews");

    let reviewList = [
        
        {
            review: "\"I almost died! Thank God for health insurance.\"", 
            reviewer: "- Our First Customer", 
        },
        
        {
            review: "\"Great Restaurant!!! OMG!!!!\"",
            reviewer: "- Our Owner Trying to pose as a Customer",
        }
    ];


    for(let i=0; i<2; i++){

        let div1 = document.createElement("div");

        div1.classList.add("review");
        div1.innerText = reviewList[i].review;

        let div2 = document.createElement("div");

        div2.classList.add("reviewer");
        div2.innerText = reviewList[i].reviewer;

        let div = document.createElement("div");

        div.appendChild(div1);
        div.appendChild(div2);

        reviews.appendChild(div);
    }
    
    sectionC.appendChild(reviews);

    primaryContainer.appendChild(sectionB);
    primaryContainer.appendChild(sectionC);
}

export { renderhome };