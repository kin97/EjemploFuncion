"use strict"
/**
 * @fileOverview este archivo contiene ejemplos de funciones con for
 * @author Oscar Casal
 * @version 1.0
 */

/**
 * @description SumaArray suma los valores de un array
 * @param {Array} numeros array de numeros
 * @returns {number}
 */
function SumaArray(numeros) {
    let suma = 0;
    for (let valor of numeros) {
        suma = suma + valor;
    }
    return suma
}
/**
 * @description esta funcion suma los valores de un array segun su posicion
 * @param {Array} numeros 
 * @returns {Number}
 */
function SumaArray2(numeros) {
    let suma = 0;
    for (let pos in numeros) {
        suma = suma + numeros[pos];
    }
    return suma;
}
/**
 * @description esta funcion suma los valores de un array segun su posicion en el cunjunto
 * @param {Array} numeros
 * @returns {Number} 
 */
function SumaArray3(numeros){
    let suma=0
    for (let i=0;i<numeros.length;i++){
        suma=suma+numeros[i]
    }
    return suma
}
let sumaValor = SumaArray3([2, 3, 4, 5])
console.log(sumaValor)