/*
Homework Assignment #5: Switch Statements


Details:

Create a function called "timeAdder" that can add two time values together. For example, it should be able to add 25 hours and 3 days together.

The function should accept 4 parameters:

value1, label1, value2, label2

- value1 and value2 should accept positive integers

- label1 and label2 should accept any of the following strings: "seconds", "minutes", "hours", "days", "second", "minute", "hour", "day"

For example your function may be called in any of the following ways:

timeAdder(1,"minute",3,"minutes")

timeAdder(5,"days",25,"hours")

timeAdder(1,"minute",240,"seconds")



Requirements:

1. Your function should include at least one switch

2. Your function must accept any possible combination of inputs

3. If the inputs are valid, it should return an array with 2 variables inside of it: value3, and  label3. For example:

return [5,"minutes"];

The exact label you choose to return for label3 ("minutes" for example) is up to you.

4. If the inputs are invalid or impossible, it should return false. Here are examples of impossible and invalid inputs:

timeAdder(5,"hour",5,"minutes") // This is impossible because "hour" is singular and 5 is plural

timeAdder(false,false,5,"minutes") // This is invalid because the first 2 arguments are not the correct types

timeAdder({},"days",5,"minutes") // This is invalid because the first argument is the wrong type

Extra Credit:

Rather than returning an arbitrary label for label3, return the largest label that can be used with an integer value

For example if someone calls:

timeAdder(20,"hours",4,"hours")

You could return: [1,"day"] rather than [24,"hours"]

But if they called

timeAdder(20,"hours",5,"hours")

You would return [25,"hours"] because you could not use "days" with an integer value to represent 25 hours.*/


// helper function returns the time unit divisor(number of seconds) depending on time unit
const numberOfSeconds = (value) => {
    const timeUnit = value
    switch (timeUnit) {
        case "second": return 1;
        case "seconds": return 1;
        case "minute": return 60;
        case "minutes": return 60;
        case "hour": return 3600;
        case "hours": return 3600;
        case "day": return 86400;
        case "days": return 86400;
        default: return 1;
    }
}

// helper function to provide the largest time unit where the value is an integer
const largestTimeUnitLabel = (numSeconds) => {
    const numberSecs = numSeconds;
    switch (true) {
        //largest time unit - second
        case numberSecs < 2: return "second";

        //largest time unit - seconds
        case numberSecs >= 2 && numberSecs < 60: return "seconds";

        //largest time unit - minute
        case (numberSecs >= 60 && numberSecs < 120) && (numberSecs % 60 === 0): return "minute";
        case (numberSecs >= 60 && numberSecs < 120) && (numberSecs % 1 === 0): return "seconds";

        //largest time unit - minutes
        case (numberSecs >= 120 && numberSecs < 3600) && (numberSecs % 60 === 0): return "minutes";
        case (numberSecs >= 120 && numberSecs < 3600) && (numberSecs % 1 === 0): return "seconds";

        //largest time unit - hour
        case (numberSecs >= 3600 && numberSecs < 7200) && (numberSecs % 3600 === 0): return "hour";
        case (numberSecs >= 3600 && numberSecs < 7200) && (numberSecs % 60 === 0): return "minutes";
        case (numberSecs >= 3600 && numberSecs < 7200) && (numberSecs % 1 === 0): return "seconds";

        //largest time unit - hours
        case (numberSecs >= 7200 && numberSecs < 86400) && (numberSecs % 3600 === 0): return "hours";
        case (numberSecs >= 7200 && numberSecs < 86400) && (numberSecs % 60 === 0): return "minutes";
        case (numberSecs >= 7200 && numberSecs < 86400) && (numberSecs % 1 === 0): return "seconds";

        //largest time unit - day
        case (numberSecs >= 86400 && numberSecs < 172800) && (numberSecs % 86400 === 0): return "day";
        case (numberSecs >= 86400 && numberSecs < 172800) && (numberSecs % 3600 === 0): return "hours";
        case (numberSecs >= 86400 && numberSecs < 172800) && (numberSecs % 60 === 0): return "minutes";
        case (numberSecs >= 86400 && numberSecs < 172800) && (numberSecs % 1 === 0): return "seconds";

        //largest time unit - days
        case (numberSecs >= 172800) && (numberSecs % 86400 === 0): return "days";
        case (numberSecs >= 172800) && (numberSecs % 3600 === 0): return "hours";
        case (numberSecs >= 172800) && (numberSecs % 60 === 0): return "minutes";
        case (numberSecs >= 172800) && (numberSecs % 1 === 0): return "seconds";
    }

}

//main function timeAdder
const timeAdder = (value1 = 60, label1 = "minutes", value2 = 60, label2 = "minutes") => {

    //label input validation
    if ((typeof label1 !== 'string') || label1 === null || label1 === "" || typeof label1 === "undefined") {
        console.log("label must be of a string type");
        return;
    }

    if ((typeof label2 !== 'string') || label2 === null || label2 === "" || label2 === undefined) {
        console.log("label must be of a string type");
        return;
    }

    // convert labels to lowercase
    labl1 = label1.toLowerCase();
    labl2 = label2.toLowerCase();

    //value integer validation
    if (!Number.isInteger(value1)) {
        console.log("value1 is not an integer value");
        return;
    }

    if (!Number.isInteger(value2)) {
        console.log("value2 is not an integer value");
        return;
    }


    //label validation
    const labels = ["seconds", "minutes", "hours", "days"];
    const singleLabels = ["second", "minute", "hour", "day"];

    if (value1 === 1 && (!singleLabels.includes(labl1))) {
        console.log("for a value of 1 label must be of singular type; second, minute, hour, day ");
        return;
    } else if (value1 > 1 && (!labels.includes(labl1))) {
        console.log("label must be one of the following: seconds, minutes, hours, days");
        return;
    }

    if (value2 === 1 && (!singleLabels.includes(labl2))) {
        console.log("label must be of singular type; second, minute, hour, day ");
        return;
    } else if (value2 > 1 && (!labels.includes(labl2))) {
        console.log("label must be one of the following: seconds, minutes, hours, days");
        return;
    }

    //calculate the number of seconds for value1
    const secondsperUnit1 = numberOfSeconds(labl1);
    const value1Seconds = value1 * secondsperUnit1;
    console.log(`value 1: ${value1Seconds} seconds`);

    //calculate the number of seconds for value2
    const secondsperUnit2 = numberOfSeconds(labl2);
    const value2Seconds = value2 * secondsperUnit2
    console.log(`value 2: ${value2Seconds} seconds`);

    //calculate the total number of seconds value1 + value2
    const totalSeconds = value1Seconds + value2Seconds;
    console.log(`Total seconds ${totalSeconds} seconds`)

    //calculate the total time in the largest time unit where the value is an integer
    const label3 = largestTimeUnitLabel(totalSeconds);
    const value3 = totalSeconds / numberOfSeconds(label3)

    console.log(`Total: ${value3} ${label3}`)

}

timeAdder(60, "minutes", 540, "seconds");
timeAdder(5, "days", 25, "hours");
timeAdder(20, "hours", 5, "hours");
timeAdder(20, "hours", 4, "hours");