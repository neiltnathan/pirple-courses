
/*
USE CASES
const is used in the case where the assigned value will remain constant - does not change.  For example if a const is assigned a conversion factor.  The value of the conversion factor will always be the same.

let is used when the assigned value to a variable could change.  For example in the case where a married woman may change her family name to that of her husbands

var should no longer be used in ES6.
An example of a outlier use case is provided below


JAVASCRIPT HOISTING

In JavaScript global scoped variables are hoisted to the top of the scope

In JavaScript function scoped variables are hoisted to the top of the function scope.

It is the variable declaration that is hoisted and not the assignment.

In ES5 if a variable (var) is referenced before it is declared then the variable declaration is hoisted in JavaScript and  an 'undefined' error is returned.

In ES6 if a variable (let) is referenced before it is declared then the variable declaration is also hoisted in JavaScript, however a let variable is not initialised until their definition is evaluated and in this case a 'reference' error is returned.

*/

//const use case

function Convertkgtolb(kg) {
    const kgtolbconversionfactor = 2.2046;
    console.log(`${kg} kilograms is equal to ${kg * (kgtolbconversionfactor)} pounds `)
}
Convertkgtolb(10);


//let use case

function MarriedName(firstName, oldFamilyName, newFamilyName, married) {

    let fName = firstName;
    let familyName = oldFamilyName;

    if (married) {
        familyName = newFamilyName;
        console.log(`${fName}s' full name is ${fName} ${familyName}`);
    } else {
        console.log(`${fName}s' full name is ${fName} ${familyName}`);
    }
}

MarriedName("Rachael", "Smith", "Jones", false);

/* In the code below if let is used instead of var for the incrementor then an error is returned as the second console.log(i) is outside of the let variable block scope.  var is function scoped and is seen by the second console.log(i) */

function increment() {
    for (var i = 0; i < 10; i++) {
        console.log(i)
    }
    console.log(i)
}

increment();
