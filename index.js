var count = 1; 

function getElem(tag,idName,className,innerTextName=""){
    let elem = document.createElement(tag);
    elem.setAttribute("class", className);
    elem.setAttribute("id", idName);
    elem.innerHTML = innerTextName;
    return elem;
}


document.getElementById("plusButton").addEventListener("click",()=>{
        let countVal = 0;       
        let wholeContainer = document.getElementById("wholeContainer");

        // var containerDiv = document.createElement("div");
        // containerDiv.setAttribute("class", "container");
        var containerDiv = getElem("div" , "divNumber#"+count,"container");

        // var incrementBtn = document.createElement("button");
        // incrementBtn.setAttribute("id", "increment#"+count);
        // incrementBtn.innerHTML = "+";
        var incrementBtn = getElem("button" , "increment#"+count,"temp","+");

        // var spanValue = document.createElement("span");
        // spanValue.setAttribute("id","value#"+count);
        // spanValue.innerHTML = countVal;
        var spanValue = getElem("span" , "value#"+count,"temp","0");
        
        // var decrementBtn = document.createElement("button");
        // decrementBtn.setAttribute("id", "decrement#"+count);
        // decrementBtn.innerHTML = "-";
        var decrementBtn = getElem("button" , "decrement#"+count,"temp","-");

        containerDiv.append(incrementBtn, spanValue, decrementBtn);
        wholeContainer.append(containerDiv);

        let addBtn = document.getElementById("increment#"+count);
        let subBtn = document.getElementById("decrement#"+count);
        let val = document.getElementById("value#"+count);

        addBtn.addEventListener("click", ()=>{
            countVal++;
            val.innerHTML = countVal;
        });

        subBtn.addEventListener("click", ()=>{
            countVal--;
            val.innerHTML = countVal;
        });
        count++;
})



