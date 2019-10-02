let input: HTMLInputElement = <HTMLInputElement> document.getElementById("input");
let select: HTMLSelectElement = <HTMLSelectElement> document.getElementById("select");
let button: HTMLButtonElement = <HTMLButtonElement> document.getElementById("button");
let output: HTMLDivElement = <HTMLDivElement> document.getElementById("output");

button.addEventListener("click", function(){

output.innerHTML = input.value;
    
    switch(select.selectedIndex){
        case 0: output.innerHTML = output.innerText.toUpperCase();
        break;
        case 1: output.innerHTML = output.innerText.toLowerCase();
        break;
    }
});