/*
Details:

Let's look at a popular logical argument (a syllogism)

All men are mortal
Socrates is a man.
Therefore, socrates is mortal.

Using "if statements" and any other logical operators and data-types you see fit, recreate this logical argument. Your code should make clear that "socrates" is part of a collection of items referred to as "men", and that all members of this collection are mortal. You should also then demonstrate that since Socrates is part of this collection, it follows that he is mortal as well.


Extra Credit:

Got the hang of creating a logical argument? Want to try another one? Try this one as well:

This cake is either vanilla or chocolate.
This cake is not chocolate.
Therefore, this cake is vanilla.
*/


//Socrates  syllogism

const Socrates = 'man';
const men = 'mortal';

if (Socrates === 'man') {

    console.log("Socrates as man is a member of men");

    if (men === 'mortal') {
        console.log("Socrates is  mortal");
    }

}


// Cake  syllogism

const cake = "vanilla";

if ((cake === "vanilla" || cake === "chocolate") && (cake !== "chocolate")) {
    console.log("this cake is vanilla")
} else {
    console.log("this cake is not vanilla")
}



