do {
  let dni = parseInt(prompt("Ingrese su numero de documento"));
  if (dni <= 99999999) {
    let resto = dni % 23;
    switch (resto) {
      case 0:
        alert("DNI: " + dni + ", Letra: T");
        break;
      case 1:
        alert("DNI: " + dni + ", Letra: R");
        break;
      case 2:
        alert("DNI: " + dni + ", Letra: W");
        break;
      case 3:
        alert("DNI: " + dni + ", Letra: A");
        break;
      case 4:
        alert("DNI: " + dni + ", Letra: G");
        break;
      case 5:
        alert("DNI: " + dni + ", Letra: M");
        break;
      case 6:
        alert("DNI: " + dni + ", Letra: Y");
        break;
      case 7:
        alert("DNI: " + dni + ", Letra: F");
        break;
      case 8:
        alert("DNI: " + dni + ", Letra: P");
        break;
      case 9:
        alert("DNI: " + dni + ", Letra: D");
        break;
      case 10:
        alert("DNI: " + dni + ", Letra: X");
        break;
      case 11:
        alert("DNI: " + dni + ", Letra: B");
        break;
      case 12:
        alert("DNI: " + dni + ", Letra: N");
        break;
      case 13:
        alert("DNI: " + dni + ", Letra: J");
        break;
      case 14:
        alert("DNI: " + dni + ", Letra: Z");
        break;
      case 15:
        alert("DNI: " + dni + ", Letra: S");
        break;
      case 16:
        alert("DNI: " + dni + ", Letra: Q");
        break;
      case 17:
        alert("DNI: " + dni + ", Letra: V");
        break;
      case 18:
        alert("DNI: " + dni + ", Letra: H");
        break;
      case 19:
        alert("DNI: " + dni + ", Letra: L");
        break;
      case 20:
        alert("DNI: " + dni + ", Letra: C");
        break;
      case 21:
        alert("DNI: " + dni + ", Letra: K");
        break;
      case 22:
        alert("DNI: " + dni + ", Letra: E");
        break;
      default:
        alert("Numero erroneo");
    }
  } else if (dni != undefined) {
    alert(Number(dni) + " No es un numero de documento");
  }
} while (confirm("¿Desea escribir otro numero de documento?"))
