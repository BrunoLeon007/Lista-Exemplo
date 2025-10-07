const btnEx01 = document.querySelector("#ex01")
const btnEx02 = document.querySelector("#ex02")
const btnEx03 = document.querySelector("#ex03")
const btnEx04 = document.querySelector("#ex04")
const btnEx05 = document.querySelector("#ex05")
const btnEx06 = document.querySelector("#ex06")
const btnEx07 = document.querySelector("#ex07")
const btnEx08 = document.querySelector("#ex08")
const btnEx09 = document.querySelector("#ex09")
const btnEx10 = document.querySelector("#ex10")
const btnEx11 = document.querySelector("#ex11")
const btnEx12 = document.querySelector("#ex12")
const btnEx13 = document.querySelector("#ex13")
const btnEx14 = document.querySelector("#ex14")
const btnEx15 = document.querySelector("#ex15")
const btnEx16 = document.querySelector("#ex16")
const btnEx17 = document.querySelector("#ex17")
const btnEx18 = document.querySelector("#ex18")
const btnEx19 = document.querySelector("#ex19")
const btnEx20 = document.querySelector("#ex20")





function ex01() {
    var idade = Number(prompt(" Verificação de idade, por gentileza, Informe sua idade:"))
if ( idade <= 17){
    alert("Voê é menor de idade!");
}else {
    alert("Você é maior de idade!");
}
}

btnEx01.addEventListener('click', ex01)

function ex02() {
    const nome1 = prompt("Digite o nome da primeira pessoa:");
const idade1 = Number(prompt(`Digite a idade de ${nome1}:`));

const nome2 = prompt("Digite o nome da segunda pessoa:");
const idade2 = Number(prompt(`Digite a idade de ${nome2}:`));

// Compara as idades e exibe o resultado
if (idade1 > idade2) {
  alert(`${nome1} é mais velho(a) que ${nome2}.`);

} else if (idade2 > idade1) {
  alert(`${nome2} é mais velho(a) que ${nome1}.`);
  
} else {
  alert(`${nome1} e ${nome2} têm a mesma idade.`);
}
}

btnEx02.addEventListener('click', ex02)
function ex03() {
    var numero = Number(prompt("Informe um número para verificar se o mesmo é Positivo, Negativo ou Zero:"))

if(numero > 0) {
    alert("Positivo");

} else if( numero < 0 ){

alert("Negativo");

} else {
alert("Numero corresponde a zero");

}
}
btnEx03.addEventListener('click', ex03)

function ex04() {
    var idade = Number(prompt("Insira quantos anos possui para verificar sua faixa etária de idade:"))

if (idade >= 0 && idade <= 12) {
  alert("Você é uma criança.");

} else if (idade >= 13 && idade <= 17) {
  alert("Você é um adolescente.");

} else if (idade >= 18 && idade <= 64) {
  alert("Você é um adulto.");

} else if (idade >= 65) {
  alert("Você é um idoso.");
  
} else {
  alert("Idade inválida. Por favor, insira uma idade válida.");
}
}
btnEx04.addEventListener('click', ex04)

function ex05() {
    var numero = Number(prompt("Digite um numero inteiro: "));
var numero2 = Number(prompt("Digite outro numero inteiro: "));
if (numero > numero2) {
    alert("O maior numero é: " + numero);
} else {
    alert("O maior numero é: " + numero2);
}
}
btnEx05.addEventListener('click', ex05)

function ex06() {
    var nota = Number(prompt("Digite a primeira nota do aluno: "));
var nota2 = Number(prompt("Digite a segunda nota do aluno: "));
var nota3= Number(prompt("Digite a terceira nota do aluno: "));
var media = (nota + nota2 + nota3) / 3;
if (media >= 7) {
    alert("Aprovado com a media: " + media.toFixed(2));
} else {
    alert("Reprovado com a media: " + media.toFixed(2));
}
}
btnEx06.addEventListener('click', ex06)
function ex07() {
    var numero = Number(prompt("Digite um numero inteiro para verificar se o mesmo é um numero Par ou Impar: "));
if (numero % 2 == 0) {
    alert("O numero " + numero + " é Par");
}else {
    alert("O numero " + numero + " é Impar");
}
}
btnEx07.addEventListener('click', ex07)

function ex08() {
    var salario = Number(prompt("Informe seu salario para que seja realizada o calculo de bônus: "));
if(salario >= 2000) {
 alert("Seu bônus será de 20%: " + (salario * 0.2));
} else if(salario < 2000 && salario ) {
    alert("Seu bônus será de 5%: " + (salario * 0.05));
} else {
   
}
}
btnEx08.addEventListener('click', ex08)

function ex09() {
    var mes = prompt("Digite o nome do mês:");

if (mes === "janeiro" || mes === "março" || mes === "maio" || mes === "julho" || mes === "agosto" || mes === "outubro" || mes === "dezembro") {
  dias = 31;
} else if (mes === "abril" || mes === "junho" || mes === "setembro" || mes === "novembro") {
  dias = 30;
} else if (mes === "fevereiro") {
  dias = "28 ou 29 (dependendo se é ano bissexto)";
} else {
  dias = "Mês inválido. Por favor, insira um mês válido.";
}

alert(`O mês de ${mes} possui ${dias} dias.`);

}
btnEx09.addEventListener('click', ex09)

function ex10() {
   var numero = Number(prompt("Digite o primeiro numero inteiro para que seja exibido em ordem crescente: "));
var numero2 = Number(prompt("Digite o segundo numero inteiro para que seja exibido em ordem crescente: "));
var numero3 = Number(prompt("Digite o terceiro numero inteiro para que seja exibido em ordem crescente: "));

if (numero < numero2 && numero < numero3 && numero2 < numero3) {
    alert("Os números em ordem crescente são: " + numero + ", " + numero2 + ", " + numero3);

} else if (numero < numero3 && numero3 < numero2) {
    alert("Os números em ordem crescente são: " + numero + ", " + numero3 + ", " + numero2);

} else if (numero2 < numero && numero < numero3) {
    alert("Os números em ordem crescente são: " + numero2 + ", " + numero + ", " + numero3);

} else if (numero2 < numero3 && numero3 < numero) {
    alert("Os números em ordem crescente são: " + numero2 + ", " + numero3 + ", " + numero);
    
} else {
    alert("Os números em ordem crescente são: " + numero3 + ", " + numero + ", " + numero2);
}
}
btnEx10.addEventListener('click', ex10)

function ex11() {
   var faltas = Number(prompt("Digite o número de faltas do aluno: "));

if (faltas >= 15) {
    alert("O aluno está reprovado.");
} else {
    alert("O aluno está aprovado.");
}
}
btnEx11.addEventListener('click', ex11)

function ex12() {
    var produto = Number(prompt("Digite o codigo do produto:"));
var produto2 = Number(prompt("Digite o codigo do produto:"));
var quantidade = Number(prompt("Digite a quantidade do produto:"));
var produtoPreco= 10;
var produto2Preco= 15; 


if (produto === 1) {
    var total = quantidade * produtoPreco;
    alert("O total a ser pago é: R$ " + total);
} else if (produto === 2) {
    var total = quantidade * produto2Preco;
    alert("O total a ser pago é: R$ " + total);
} else {
    alert("Produto inválido.");
}
}
btnEx12.addEventListener('click', ex12)

function ex13() {
    var idade = Number(prompt("Digite a sua idade:"));
var sexo = prompt("Digite seu Sexo (M/F):")

if (sexo === "F" && idade >= 60) {
    alert("Você é idosa e pode se aposentar.");
} else if (sexo === "M" && idade >= 65) {
    alert("Você é idoso e pode se aposentar.");
}else {
   alert ("Você não pode se aposentar ainda.");
}
}
btnEx13.addEventListener('click', ex13)

function ex14() {
   var peso = Number(prompt("Digite seu peso em kg:"));
var altura = Number(prompt("Digite sua altura em metros:"));
var imc =  (altura * altura) / peso;

if (imc < 18.5) {
    alert("Abaixo do peso");

} else if (imc >= 18.5 && imc < 25) {
    alert("Peso normal");

} else if (imc >= 25 && imc < 30) {
    alert("Acima do peso");

} else {
    alert("Obesidade");
}
}
btnEx14.addEventListener('click', ex14)

function ex15() {
    var nomeAluno = prompt("Digite o nome do aluno:");
var disciplina = prompt("Digite a disciplina:");
var nota = Number(prompt("Digite sua nota para verificar situação de aprovado ou reprovado:"));

if(nota >=7){
    alert("Parabéns " + nomeAluno + "! Você foi aprovado em " + disciplina + " com a nota " + nota);
}else {
    alert("Que pena " + nomeAluno + "! Você foi reprovado em " + disciplina + " com a nota " + nota);
}
}
btnEx15.addEventListener('click', ex15)

function ex16() {
   var promocao = prompt("O preço das maçãs é de R$ 0,50 cada se a quantidade for menor que 12 e R$ 0,40 cada se a quantidade for igual ou maior que 12.  Digite 'OK' para continuar sua compra ou 'Cancelar' para encerrar sua compra")
var quantidade = Number(prompt("Digite a quantidade de maçãs que deseja comprar:"))

var preco;

if (quantidade < 12) { preco = 0.50; // Preço unitário para menos de 12 maçãs
    
} else {preco = 0.40;} // Preço unitário para 12 ou mais maçãs


var total = quantidade * preco; // Calcula o valor total
alert(`Você comprou ${quantidade} maçãs. O valor total a ser pago é R$ ${total.toFixed(2)}.`);
}
btnEx16.addEventListener('click', ex16)

function ex17() {
    // Programa para calcular quantos salários mínimos o funcionário recebe
const salarioMinimo = parseFloat(prompt("Digite o valor do salário mínimo (em R$):"));
const salarioFuncionario = parseFloat(prompt("Digite o valor do salário do funcionário (em R$):"));

// Calcula quantos salários mínimos o funcionário recebe
const quantidadeSalarios = salarioFuncionario / salarioMinimo;

// Exibe o resultado
alert(`O funcionário recebe ${quantidadeSalarios.toFixed(2)} salários mínimos.`);
}
btnEx17.addEventListener('click', ex17)

function ex18() {
    const nome = prompt("Digite o nome do aluno:");
const turno = prompt("Digite o turno (M para Matutino, V para Vespertino):");

if (turno === "M") {
  alert(`Bom dia, ${nome}!`);
} else if (turno === "V") {
  alert(`Boa tarde, ${nome}!`);
} else {
  alert("Turno inválido. Use M para Matutino ou V para Vespertino.");
}
}
btnEx18.addEventListener('click', ex18)

function ex19() {
    // Programa para verificar se a pessoa pode votar
const idade = parseInt(prompt("Digite a sua idade:"));

if (idade >= 18 && idade <= 70) {
  alert("O voto é obrigatório.");
} else if ((idade >= 16 && idade < 18) || idade > 70) {
  alert("O voto é facultativo.");
} else {
  alert("Você ainda não pode votar.");
}
}
btnEx19.addEventListener('click', ex19)
function ex20() {
    // Programa para calcular a média de três números e exibir o resultado
const num1 = parseInt(prompt("Digite o primeiro número:"));
const num2 = parseInt(prompt("Digite o segundo número:"));
const num3 = parseInt(prompt("Digite o terceiro número:"));

const media = (num1 + num2 + num3) / 3;

if (media >= 7) {
  alert(`A média é ${media.toFixed(2)}. Aprovado!`);
} else {
  alert(`A média é ${media.toFixed(2)}. Reprovado.`);
}
}
btnEx20.addEventListener('click', ex20)

