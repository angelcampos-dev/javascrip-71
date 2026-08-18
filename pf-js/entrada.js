/**
 * Prompt:
 * 1.- Hay que asiganar su uso a una variable
 * para luego usar el valor que ingreo el usuario
 *  1.2 usar el valor imediatamente
 * !importante
 * 1.- no se recomienda su uso en aplicacion en produccion(al publico)
 * 2.- bloquea el codigo, esto quiere decir que el codigo
 * que este debajo de donde escribirmos el uso de prompt no se 
 * va a ejecutar, hasta que el usuario ingrese algo.
 * 3.-no se puede personalizar.
 
const edad = prompt("ingresa tu edad", 16);
const name = prompt("ingresa tu nombre");
console.log (edad);
console.log (" hola soy " + name + "\ny tengo " + edad + " años");
alert("")
*/
/**
 * Pedir un prompt para obtener una serie o pelicula favoritos
2. Un prompt para obtener un personaje de esa serie, el favorito
3. un prompt para obtener porque es el favorito
En la serie x sale el personaje x y es mi favorito por x
 */
const serie = prompt("ingresa tu serie favorita");
const personaje = prompt("ingrese el personaje fav de la serie");
const caracteristica = prompt("¿por que te gusta ese personaje?");
console.log (" En la serie " + serie + (" sale el personaje " + personaje + (" y es mi favorito por que " + caracteristica)))
alert(" En la serie " + serie + (" sale el personaje " + personaje + (" y es mi favorito por que " + caracteristica)))