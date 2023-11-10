
let grid = document.createElement("div")
grid.setAttribute("id", "grid")

let container = document.querySelector("#container");
container.append(grid)

const inputSize = document.getElementById("size");

let down = false;

const randomC = () => {
   let random =  Math.floor((Math.random() * 255)+1)
   return random;
}



console.log(randomC)
let labelSize = document.getElementById("labelSize")
labelSize.innerHTML = inputSize.value

let state = "regular";

let color = "black";

const colorChange = document.getElementById("color-wheel")

inputSize.addEventListener("mousedown", (event) => {
   down = true;
   labelSize.innerHTML = event.target.value
   grid.innerHTML = "";   
})

inputSize.addEventListener("mousemove", (event) => {
   if (!down) return;
   labelSize.innerHTML = event.target.value
   
})

inputSize.addEventListener("mouseup", () => {
   down = false;
})

colorChange.addEventListener('change', (event) => {
    color = event.target.value
   console.log(color)
});
console.log(colorChange)

grid.addEventListener("mouseover", gridMouseover, false);
// Function to toggle the "active" class on the buttons
function toggleActiveClass(button) {
   button.classList.toggle("active");
}

// Function to handle button clicks
function ActiveBtn(event) {
   const buttons = document.querySelectorAll('.button');

   for (let i = 0; i < buttons.length; i++) {
       if (buttons[i] !== event.target) {
           buttons[i].classList.remove('active');
       } else {
         buttons[i].classList.add('active')
       }
   }
   switch (event.target.id) {
       case 'color-mode':
           state = 'color';
           break;
       case 'rainbow-mode':
           state = 'rainbow';
           break;
       case 'eraser-mode':
           state = 'eraser';
           break;
   }
   console.log(state)
}

const settingButtons = document.querySelectorAll('.settings .button');
settingButtons.forEach(button => {
   button.addEventListener('click', ActiveBtn);
});

function changeColor(element) {
   if (state === "eraser") {
      element.setAttribute("style", "background-color:'transparent';");
     return;
   } else if (state === "color") {
      element.setAttribute(`style`, `background-color:${color};`);
      return;
    } else if (state === "rainbow") {
      element.setAttribute("style", `background-color:rgb(${randomC()},${randomC()},${randomC()});`);
      return;
    } 
}

function gridMouseover(event) {
   if (!event.target.classList.contains("grid-element")) {
     return;
   }
   changeColor(event.target);
    randomC();
 }

function setGridSize(x) {
   for(let i = 0;i<x * x; i++) {
      let gridEl = document.createElement("div")
      gridEl.classList.add("grid-element")
      grid.append(gridEl)
      grid.style = 
      `grid-template-columns: repeat(${x},1fr);
      grid-template-rows: repeat(${x},1fr);`
   } 
}

setGridSize();
function setSize() {
   if(grid.childElementCount == labelSize.innerHTML ** 2) {
      return;
   }
    else {
      setGridSize(0)
       setGridSize(labelSize.innerHTML);
   }
   return;
}


function setColor(event) {
   console.log(event.target.value)
}
