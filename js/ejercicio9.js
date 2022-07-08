for(let numeros = 1; numeros <= 500; numeros++){
    document.write(numeros)
    if (numeros % 4 == 0) {
        document.write(" (Multiplo de 4)");
    }
    if (numeros % 9 == 0) {
        document.write(" (Multiplo de 9)");
    }
    if (numeros % 5 == 0) {
        document.write("<hr>");
    }
    document.write('<br>')
}