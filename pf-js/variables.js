/**
 * en javascript hat tres formas para variables
 * !existe una formmula que no se recomienda su uso
 * !var
 * Al proceso de creas una variable y darle un valor se
 * le llama asigancion.
 * 
 * A las variables que se asignan (pueden cambiar en un 
 * futuro si el valor que tiene) se declaran:
 * ? let nombreVariable = valor; 
 * 
 * *el operador = se conoce como operardor de 
 * asignacion
 * una vez creada una vareable podemos usarla 
 * en otros lugares del codigo ulitizando su nombre, las variables
 * al ser utilizadas no van entre comillas """"
 */
let nombre = "miguel";//tipo string
console.log(nombre);

/**
 * las variables que no pueden ser reasignada (su valor no puede 
 * cambiar)se declaran :
 *  ! const nombreVariable = valor;
 * 
 * NOTA: palabras reservadas: son palabras que utilizan el
 * lenguaje de programacion y si ententas en otros lados 
 * pueden generar errores
 * 
 */
const birthYear = 1998; //tipo numero
console.log(birthYear);

/**
 * Reasignando una variable ( cambiando el valor que tiene)
 * cuando reasignamos una variaboe (una variable ya creada)
 * !ya no es necesario poner let 
 * 
 */
nombre = "angel";
name = "miguel"
console.log(nombre);
console.log(name)
/**
 * seccion de prueba
 * const birthYear = 1996
 * da error
*const birthYear = 1996

 */
/**
 * concatenar
 * nos permite pegar el valor de una variable 
 * a un texto
 */
console.log("hola soy "+ nombre + " y estoy en gen con " + name + " naci en el año "
    + birthYear
);
