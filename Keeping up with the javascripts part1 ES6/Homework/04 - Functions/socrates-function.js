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