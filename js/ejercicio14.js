let frase = prompt("Introduce una cadena de texto:");
for (let i = 0; i < frase.length; i++) {
  let caracter = frase.charAt(i);
  document.write(caracter + "-");
}
