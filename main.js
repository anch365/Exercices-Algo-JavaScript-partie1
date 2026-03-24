//////// EXERCICE 1: AFFICHAGE SIMPLE //////////

let words = "Hello, world !";
console.log(words);

let words1 = "Bienvenue dans le monde de la programmation!"
console.log(words1);

///// EXERCICE 2: ADDITION DE DEUX NOMBRES ///////

let nombre1 = 5;
let nombre2 = 10;

console.log(nombre1+nombre2);

///// EXERCICE 3: AFFICHAGE D'UNE LISTE SIMPLE ///////

let fruits = ["Pomme", "Banane", "Cerise"];

fruits.forEach(fruit => {
    console.log(fruit);  
});

// EXERCICE 4: AFFICHAGE DES NOMBRES PAIRS //////

 for (let index = 1; index <= 20; index++) {
    if (index % 2 === 0) {
        console.log(index);
    }  
 }

//// EXERCICE 5: COMPTEUR DE VOYELLES ////


//// EXERCICE 6: COMPTER LES LETTRES ////

// const stockage = "Je cherche des bons outils pour le développement web";

// EXERCICE 7: FILTRER LES NOMBRES POSITIFS ET NEGATIFS ////
let numbers = [1, -5, 3, -9, 2, -7, 4, -2, 8, -3, 45, -65];
let positifs = [];
let negatifs = [];

numbers.forEach(number => {
    if (number >= 0) {
      positifs.push(number)    
    }

     if (number < 0) {
         negatifs.push(number)      
    }   
});
console.log("positifs", positifs);
console.log("négatifs", negatifs);

// EXERCIE 8: TROUVER LE NOMBRE MAXIMUM ////
let nombres = [1, 5, 3, 9, 2]
let plusGrand = nombres[0]

nombres.forEach(nombre => {
     if (nombre > plusGrand) {
        plusGrand = nombre;
         }
});   

 console.log(plusGrand);
       
