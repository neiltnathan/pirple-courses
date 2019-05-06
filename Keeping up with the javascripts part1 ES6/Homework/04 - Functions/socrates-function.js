/*
Homework Assignment #4: Functions


Details:

Let's go back to your syllogism (logical argument) examples from Homework #3. Now it's time to turn those loose bits of logic into functions. Rather than having procedure that demonstrates that Socrates is mortal, you should create a function that accepts a name and returns a boolean (True or False) representing whether that name identifies a man who is mortal or not. Your function to gracefully handle unexpected inputs (such as an unrecognized name or a name that is a not a string at all) without throwing an exception.


Extra Credit:

If you did the extra credit on Homework #3, let's turn that example into a function as well. It should accept in 2 arguments:

1. An array of all cake possibilities (vanilla or chocolate)

2. A boolean representing whether or not the cake is chocolate.

It should return a string indicating the actual flavor of the cake.
*/


//Socrates isMortal function

const characters = [
    {
        name: "Socrates",
        isAMan: true
    },
    {
        name: "MickeyMouse",
        isAMan: false
    },
    {
        name: "Neil",
        isAMan: true
    },
    {
        name: "DonaldDuck",
        isAMan: false
    }

]

function isMortal(names = [{ name: "Socrates", isAMan: true }]) {
    names.forEach(function (arrayItem) {

        if (arrayItem.isAMan) {
            console.log(`${arrayItem.name} is mortal`)
        } else {
            console.log(`${arrayItem.name} is not mortal`)
        }
    })
}

isMortal(characters)


//isChocolate cake function

const flavours = [
    {
        flavour: "vanilla",
        isChocolate: false
    },
    {
        flavour: "chocolate",
        isChocolate: true
    },
    {
        flavour: "strawberry",
        isChocolate: false
    }

]

function isChocolate(flavours = [{ flavour: "chocolate", isChocolate: true }]) {

    flavours.forEach(function (arrayItem) {

        if (arrayItem.isChocolate) {
            console.log(`This is a ${arrayItem.flavour} cake`)
        } else {
            console.log(`This is not a chocolate cake it is a ${arrayItem.flavour} cake`)
        }
    })

}

isChocolate(flavours)