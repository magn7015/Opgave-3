interface Person {
    firstName: string;
    lastName: string;
}

let buttonElement: HTMLButtonElement = <HTMLButtonElement>document.getElementById("Transform")
buttonElement.addEventListener("click", textChanger);

function textChanger(): void {
let inPutElement: HTMLInputElement = <HTMLInputElement>document.getElementById("TextInput");
let inputString: string = inPutElement.value;


let selectElement: HTMLSelectElement = <HTMLSelectElement>document.getElementById("Selector");
let Selector: string = selectElement.value;

let resultElement: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("output");

if(Selector == "Uppercase"){
    let result = inputString.toUpperCase();
    resultElement.innerHTML = result;
}
else if(Selector == "Lowercase"){
    let result = inputString.toLowerCase();
resultElement.innerHTML = result;
}
}