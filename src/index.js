//Actividad 1: Ahora en el archivo index.js, que se encuentra en la raíz del directorio src, 
//importe la función createMenu, y ejecute la función.

import firstLaboratoryProblem from "./problems/firstLaboratoryProblem";
firstLaboratoryProblem();

//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------

//Actividad 2: y en el archivo index.js, corra el siguiente.

//import main from "./problems/destructuring";
//main();

//-----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------

//ACTIVIDAD 4

//1.- Descending Order
//Your task is to make a function that can take any non-negative 
//integer as an argument and return it with its digits in descending 
//order. Essentially, rearrange the digits to create the highest possible number.

//Examples:

//Input: 42145 Output: 54421
//Input: 145263 Output: 654321
//Input: 123456789 Output: 987654321

const listNumbers = [4,2,1,4,5];
const Orderfuncion = listNumbers.sort((a,b) => {
        return b-a;
});
console.log(Orderfuncion);

//-----------------------------------------------------------------------------------------------------------

// 2.- You might know some pretty large perfect squares. But what about the NEXT one?
//Complete the findNextSquare method that finds the next integral perfect square after the one 
//passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) 
//is also an integer.
//If the parameter is itself not a perfect square then -1 should be returned. You may assume the 
//parameter is non-negative.

//Examples:

//findNextSquare(121) --> returns 144
//findNextSquare(625) --> returns 676
//findNextSquare(114) --> returns -1 since 114 is not a perfect square

function preg2 (sq){
    let primervalor;
    let valor2;
    if(Math.sqrt(sq)%1 ===0){
         primervalor=Math.sqrt(sq)
         valor2=primervalor+1
    }else{
        return -1 + "  since  " + sq + "  is not a perfect square";
    }
    return valor2*valor2;
}
console.log(preg2(114));

// -----------------------------------------------------------------------------------------------------------------

