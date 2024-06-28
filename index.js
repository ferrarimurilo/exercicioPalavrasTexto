const prompt = require("prompt-sync")({sigint:true})

console.log("Vamos contar quantas vezes cada palavra diferente aparece no texto: ");

let texto = prompt("Digite um texto com quantas palavras quiser: ");

let palavras = texto.split(' ');

console.log(texto);
console.log(palavras);

