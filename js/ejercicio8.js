var numeros = parseInt(prompt("Introduce numero del 1 al 50"));

if (numeros > 0 && numeros <= 50) {
  for (let i = 0; i <= numeros; i++) {
    for (let repetir = 1; repetir <= i; repetir++) {
      document.write(repetir);
    }
    document.write("<br>");
  }
} else {
  alert("No introdujiste un numero del 1 al 50");
}
