/*
Homework Assignment #6: Loops

Details:


You're about to do an assignment called "Fizz Buzz", which is one of the classic programming challenges. It is a favorite for interviewers, and a shocking number of job-applicants can't get it right. But you won't be one of those people. Here are the rules for the assignment (as specified by Imran Gory):

Write a program that prints the numbers from 1 to 100.

But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".

For numbers which are multiples of both three and five print "FizzBuzz".

The one hint you'll likely need is:

There is a Javascript operator called "remainder" but often referred to as "modulus" or "modulo". It is represented by the percentage sign (%) and it gives you the remainder left over after division. So for example:

 6 % 3

Equals zero. Because after dividing 6 by 3, there is zero leftover. Whereas:

6 % 4

Equals 2. Because after dividing 6 by 4, there are 2 left over from the six.

If that was confusing, don't worry. It will make more sense as you use it. The point is: the remainder operator is useful for finding out if X is a multiple of Y. If it is, then X % Y will yield zero. Knowing this should help you complete this assignment without any issue.


Extra Credit:

Instead of only printing "fizz", "buzz", and "fizzbuzz", add a fourth print statement: "prime". You should print this whenever you encounter a number that is prime (divisible only by itself and one). As you implement this, don't worry about the efficiency of the algorithm you use to check for primes. It's okay for it to be slow.

*/

//FizzBuzz Prime

for (let i = 1; i <= 100; i++) {

    arr = [];
    for (let j = i; j >= 1; j--) {

        //defines how many factors there are in i
        if (i % j === 0) {
            arr.push(j)
        }
    }

    //if the value i has two factors, itself and 1 then prime is returned
    if (arr.length === 2) {
        console.log("Prime")
    }

    //checks if i is divisible by 3 or 5 and if true returns Fizzbuzz
    else if (i % 3 === 0 && i % 5 === 0) {
        console.log('Fizzbuzz');

        //checks if i is divisible by 3 and if true returns Fizz
    } else if (i % 3 === 0) {
        console.log("Fizz")

        //checks if i is divisible by 5 and if true returns Buzz
    } else if (i % 5 === 0) {
        console.log("Buzz")

    } else {
        console.log(i)
    }

}
