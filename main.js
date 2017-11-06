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
  function SumaArray(numeros){
      let suma=0;
      for (let valor of numeros){
          suma=suma+valor;
      }
      return suma
  }
