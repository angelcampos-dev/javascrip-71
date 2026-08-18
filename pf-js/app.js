/**
 * condicionales
 * serie de condiciones para que algo suceda
 * en programacion para el manejo de estas
 * condicionales tenemos:
 * !el bloque if else
 * ?bloque if pregunta por una condicion sea
 * ?verdadera ejecuta un bloque de codigo y si es falso no ejecuta nada
 * ?else maneja la ejecucion de codigo en caso negativo
 * 
 * lo que se coloca dentro de if debe ser algo que genere
 * un valor true o false (tipo de dato boolean)
 */

//converti de texto a numero
/**
 * si se trata de convertir algo que no es un numero como 
 * resultado obtienes NaN not a number
 
const birthYear = Numberprompt("ingesa fecha de nacimiento")
let birthYearPlusTen = Number(birthYear) + 10;
console.log(birthYear);
console.log(birthYearPlusTen);

*/


/**
 * todo: operadores logicos
 * sirven para hacer operaciones cuyo resultado es verdadero o falso
 * == igualdad en programacion
 * mayo que > 
 * 2 > 1 == true
 * 1<2 == falso
 * 0 > 0 == falso
 * 
 * menor que <
 * 2 < 1 == falso
 * 3 < 5 == verdadero
 * 2 < 2 == falso
 * 
 * igualdad ==
 * 2 == 2 == verdadero 
 * 3 == 1 == falso
 * 
 * mayor o igual que >=
 * 2 >= 2  ==true
 * 2 >= 1 ==true
 * 2 >= 3 ==false
 * 
 * menor o igual que <=
 * 4 <= 4 ==true
 * 4 <= 5 ==true
 * 7 <= 5 ==false
 * 
 * diferente de !=
 * 
 * 5 != 4 ==true
 * 5 != ==falso
 * 99 != 100 ==true
 * 
 * negacion (not) !
 * !true ==falso
 * !false ==verdadero
 * !4 <= 4 == (era verdadero) pero da falso
 * 
 * 
 * AND && es un operador que devulve
 * ? verdadero solo si ambos lados de las expreion son verdadero
 * ? si un lado es falso el resultado es falso
 *  true && true == true
 * treu && fals == false
 * 
 * age >= 6 && age <= 12
 * age 7 == verdadero
 *  
 * 
 * OR || es un operador que devuelve
 * ?falso si ambos lados de las expreciones son falso
 * ?si un lado de la exprecion es verdadero devuelve verdadero
 * 
 * age > 20 || age < 100
 * age 101 == verdadero
 * 
 * age 18 == true
 * 
 */

const year = Number(prompt("ingresa el año actual"))
const birthYear = Number(prompt("ingresa el año de tu cumplaños"))
let edad = Number (year) - (birthYear)
console.log(edad)
alert(" usted tiene " + edad + " años ")


if(edad >= 18) {
    alert("bienvenido eres mayor de edad ");
} else if (edad >= 12 && edad <= 17) {
    alert("felicidades eres un adolecente")
} else if (edad >= 6 && edad <= 11) {
    alert("felicisades sigues en el kinder")
} else {
    alert("estas muy bb o no has nacido")
}







