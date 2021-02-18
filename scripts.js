console.log("Primer punto:");

let frase1EnSnakeCase = "soy_una_frase_en_snake_case";
let palabrasSueltas1 = frase1EnSnakeCase.split('_');

let i;
for (i = 1; i < palabrasSueltas1.length; i++) {
    palabrasSueltas1[i] = palabrasSueltas1[i].charAt(0).toUpperCase() + palabrasSueltas1[i].slice(1);
}

let frase1EnCamelCase = palabrasSueltas1.join('')

console.log(frase1EnCamelCase);

console.log("Segundo punto:");

let frase2EnCamelCase = "soyUnaFraseEnCamelCase";
let palabrasSueltas2 = []

function isUpperCase(letra) {
    return (letra >= 'A') && (letra <= 'Z');
}

for (i = 0; i < frase2EnCamelCase.length; i++) {
    if (isUpperCase(frase2EnCamelCase[i])) {
        palabrasSueltas2.push(frase2EnCamelCase.charAt(0).toLowerCase() + frase2EnCamelCase.slice(1, i));
        frase2EnCamelCase = frase2EnCamelCase.slice(i);
        i = 0;
    } else if (i === frase2EnCamelCase.length - 1) {
        palabrasSueltas2.push(frase2EnCamelCase.charAt(0).toLowerCase() + frase2EnCamelCase.slice(1));
    }
}

let frase2EnSnakeCase = palabrasSueltas2.join('_')

console.log(frase2EnSnakeCase);
