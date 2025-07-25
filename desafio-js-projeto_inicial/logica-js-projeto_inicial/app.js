console.log('Boas-Vindas meu caro DEV!');

let nome = 'Calebe Lourenço Geronimo';
console.log(`Olá, ${nome}`);

alert(`Olá, ${nome}`);

let pergunta = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(pergunta);

let valor1 = 2;
let valor2 = 1;
let soma = valor1 + valor2;
let subtracao = valor1 - valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${soma}`);
console.log(`A diferença de ${valor1} e ${valor2} é igual a ${subtracao}`);

let idade = prompt('Digite sua idade');
if (idade >= 18){
    console.log('Você é maior de idade!');
}else{
    console.log('Você é menor de idade!');
}

let numero = prompt('Digite um número qualquer');
if (numero > 0){
    alert(`O número ${numero} é Positivo!`);
}else{
    alert(`O número ${numero} é Negativo!`);
}

let count = 1;
while(count <= 10){
    console.log(`Contagem ${count}`);
    count++;
}

let nota = 7;
if (nota >= 6){
    console.log(`Você foi APROVADO com a nota ${nota}`);
}else{
    console.log(`Você foi REPROVADO com a nota ${nota}`);
}


let numeroAleatorio = parseInt(Math.random() * 5) + 1;
console.log(`Esse foi o número que saiu: ${numeroAleatorio}`);

let numeroAleatorio2 = parseInt(Math.random() * 10) + 1;
console.log(`Esse foi o número que saiu: ${numeroAleatorio2}`);

let numeroAleatorio3 = parseInt(Math.random() * 1000) + 1;
console.log(`Esse foi o número que saiu: ${numeroAleatorio3}`);