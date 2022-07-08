let concatenada = "";
do {
  let texto = prompt("Introduce una cadena detexto");
  if (concatenada == "") {
    concatenada = concatenada + texto;
  } else {
    concatenada = concatenada + "-" + texto;
  }
} while (confirm("¿Desea seguir escribiendo?"));

document.write(concatenada);
