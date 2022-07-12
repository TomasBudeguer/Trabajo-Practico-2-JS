let frase = prompt("Introduce un Texto:");
let reves = "";
for (let i = 0; i < frase.length; i++) {
    let caracter = frase.charAt(i);
    reves = caracter + reves;
}
document.write(reves);