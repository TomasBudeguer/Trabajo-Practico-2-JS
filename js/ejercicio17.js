let frase = prompt('Escriba su frase: ')
let contador = 0
let posicion = 0
frase = frase.toLowerCase()
for(let i = 0; i < frase.length; i++){
    contador++;
    if( frase.charAt(i,frase.length)=== 'a' || frase.charAt(i,frase.length)=== 'e' || frase.charAt(i,frase.length)=== 'i' || frase.charAt(i,frase.length)=== 'o' || frase.charAt(i,frase.length)=== 'u'){
        posicion = contador
        i = frase.length
    }
}
document.write('posicion de vocal: ' + posicion)