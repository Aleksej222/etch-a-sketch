function randomColor()
{
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
}

window.addEventListener("load",function()
 {
     
    document.body.style.background = randomColor();

 });

 const container = document.getElementById("container");
 let slider = document.getElementById("slider");
 let valueText = document.querySelector(".value");
 let value = document.getElementById("slider").value;
 
 function makeRows()
 {
     for (let i=0; i<value*value; i++)
     {
        container.style.setProperty('--value', value);
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";

        cell.addEventListener( 
            "mouseover", function () {        
               cell.style.background = "red";
            }
        )       
     }
 };

 function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

 slider.addEventListener('input', function(){
    let val = document.getElementById("slider").value;
    valueText.textContent = val;
    removeAllChildNodes(container);

    container.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`);
    for (let i=0; i<val*val; i++)
    {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";

        cell.addEventListener( 
            "mouseover", function () {        
               cell.style.background = "red";
            }
        )      
    }

 })

const reset = document.getElementById("reset");

reset.addEventListener("click", function(){
    let cell = container.children;
    for (let i=0; i<256; i++)
    {
        cell[i].style.background = "white";
    }
})

const rainbow = document.getElementById("rainbow");

rainbow.addEventListener("click", function(){
    let cell = container.children;
    
    for (let i=0; i<256; i++)
    {
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = randomColor();
        })
    }
})

let colorPicker = document.getElementById('colorPicker')

colorPicker.addEventListener("input", function(){
    let cell = container.children;
    let color = colorPicker.value;

    for (let i=0; i<256; i++)
    {
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = color;
        })
    }
})

makeRows();