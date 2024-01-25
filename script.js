let num = prompt("adivina el numero secreto 1 al 100");
let numsecreto = 62;
const arrnum = [];

while(parseInt(num) !== numsecreto){
    
    num = prompt("Ups, el número secreto es incorrecto, vuelve a intentarlo.")
    arrnum.push(num) 

};
if(parseInt(num) == numsecreto){
    let escribir = document.getElementById("secretnum");
    escribir.innerHTML = `Felicidades, adivinaste el número secreto ${num} `

    document.write(`Tus intentos fueron los siguientes: <br> ${arrnum}`)
}


// let escribir = document.getElementById("secretnum");
// escribir.innerHTML = `Ups, el número secreto es incorrecto, vuelve a intentarlo. `
// escribir.innerHTML = `Felicidades, adivinaste el número secreto `
