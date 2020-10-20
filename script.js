function clicking() {
    document.getElementById('thanks').innerHTML = 'Thanks for clicking!';
    //console.log(document.getElementById('thanks'));
    //alert('Thanks for clicking!');
}

function redirect() {
    //window.open('https://www.google.com/');
    window.location.href = 'https://www.google.com/'; // Abre a nova janela na mesma página
}

function exchange(elemento) {
    elemento.innerHTML = 'Thanks for hovering!';
    //document.getElementById('mousemove').innerHTML = 'Thanks for hovering!';
    //alert("Passou");
}

function comeback(elemento) {
    elemento.innerHTML = 'Mouse over here';
    //document.getElementById('mousemove').innerHTML = 'Mouse over here';
}

function load() {
    alert("Page loaded");
}

function functionChange(elemento) {
    console.log(elemento.value);
}


/*
function validatesAge(age){
    var validate;
    if (age >= 18) {
        validate = true;
    } else {
        validate = false;
    }
    return validate;
}
var age = prompt('How old are you?');
console.log(validatesAge(age));
*/



/*
function summation(n1, n2) {
    return n1 + n2;
}
alert(summation(5, 10));
*/

/*
function setReplace(phrase, name, new_name) {
    return phrase.replace(name, new_name);
}

alert(setReplace('Hello World!', 'World', 'Brazil'))
*/

/*
var d = new Date();
alert(d.getMinutes());
alert(d.getHours());
alert(d.getMilliseconds());
alert(d.getDay());
*/

/*
.getMonth()+1 (Trás o mês local)
.getMinutes() (Trá a quantidade de minutos)
*/ 


/*
var count;
for(count = 0; count <= 5; count ++) {
    console.log(count);
}
*/


/*
var count = 0;
while (count <= 5) {
    alert(count);
    console.log(count);
    count ++;
}
*/

/*
var age = prompt('How old are you?');
if (age >= 18) {
    alert('Age of majority');
}else {
    alert('Under age');
}
/*


// Class 2
/*
var fruits = [{name:'apple', color:'red'}, {name:'grape', color:'violet'}];
console.log(fruits);
alert(fruits[1].name);


//Dicionário
var fruit = {name:'apple', color:'red' }
console.log(fruit.name);
*/


/*
var list = ['maçã', 'pêra', 'laranja'];
//list.push('uva');//Adiciona um novo elemento no Array
//list.pop();//Exclui um elemento do Array
console.log(list);
console.log(list.toString());
console.log(list.join(' | '));


.lenght     (mostra a quantidade de elementos dentro do Array)
.reverse()  (Reverte a ordem dos elementos dentro do Array)
.toString() (Converte os elementos em String, ao adicionar um parâmetro[], ele retorna um dos caracteres numerados nele)
.join()     (Converte os elementos em String, e altera o caracter que divide(ex: | / -))
*/


// Class 1
/*var name = "Gustavo Iafelix";
var num1 = 18;
var num2 = 10;
var phrase = 'Hello World!';

//alert(age + age_2);

alert(`Welcome, ${name}! You are ${age} years old.`);
alert("Hello World!"); 

console.log(name);//impressão no console da variável(name)
console.log(num1 + num2);//soma das variáveis
console.log(phrase.replace('Hello', 'Welcome to'));//altera o conteúdo demarcado no primeiro parâmetro pelo subsequente
console.log(phrase.toUpperCase());//Altera o conteúdo na impressão para letras maiúsculas
console.log(phrase.toLowerCase());//Altera o conteúdo na impressão para letras minúsculas
*/
