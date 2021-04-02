function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));

    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://web.digitalinnovation.one/");
    window.location.href = "https://web.digitalinnovation.one/";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigada por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
   // alert("Trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
   // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
   // alert("Trocar texto");
}

function load(){
    alert("Pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*function soma(n1, n2){
    return n1 + n2
}*/

/*alert(soma(5,10));

var validar;
function validaIdade(idade){
       if (idade >= 18){
        validar = true
    } else {
        validar = false
    }
    return validar;
}

var idade = prompt ("Qual sua idade");
console.log(validaIdade(idade));
*/
/*function soma(n1, n2){
    return n1 + n2
}

alert(soma(5,10));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/
/*var d = new Date();
alert(d);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
alert(d.getMonth()+1);
*/
/*var count;
for(count=0;count<5;count++){
    alert(count);
}
*/

/*var count = 0;
while (count <5){
    console.log(count);
    count = count + 1;
}
*/

/*var idade = prompt("Qual é sua idade?");
if (idade >=18){
    alert("Maior de idade");
} else {
    alert("Menor de idade");
};
*/

/*//Lista de dicionários
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);*/


/*//Dicionário
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);*/

//var lista = ["maça","pêra","laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join(" - "));


/*var nome = "Evelynne Ribas";
var idade = 36;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert (idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão","Brasil"));
console.log(frase.toUpperCase);
alert(frase.replace("Japão", "Brasil"));*/