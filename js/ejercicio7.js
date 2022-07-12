let numeros = parseInt(prompt("Introduzca un numero del 1 al 50"));

if (numeros <= 50) {
  for (let i = numeros; i >= 1; i--) {
    for (let repetir = i; repetir >= 1; repetir--) {
      document.write(i);
    }
    document.write("<br>");
  }
} else {
  alert("No introdujiste un numero del 1 al 50");
}
