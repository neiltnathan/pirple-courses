/*
Homework Assignment #8: Events


Details:

 You can think of this homework as a warmup to project #1 (coming directly after this assignment). Don't worry too much about making this homework perfect, save your energy (and sanity) for the larger project. For this assignment we'll just be looking to see that you covered the basic functionality.

Your assignment is to create a tic-tac-toe game out of HTML, CSS and Javascript. You should have a single HTML page, one accompanying JS file, and one accompanying CSS file.

1. When the page loads, only the game board should be displayed (draw the game board any way you see fit).

2. When a user clicks within the game board (in an empty space) their mark (either "X" or "O" should appear there). "X" goes first. So the first valid click on the game board should produce an "X". The second should produce an "O", and then they should trade off.

 3. The "X" s should be red, and the "O"s should be black.

4. If someone wins (gets three in a row), you should make a dialog box appear on the screen that says either "X has won!" or "O has won!" And when the dialog box is closed, the game should be reset to its beginning state.

5. If all the areas of the board get filled but nobody wins, a dialog box appear on the screen that says either "Cats game!" And when the dialog box is closed, the game should be reset to its beginning state. (What does cat's game mean?)
*/


const sq = document.querySelectorAll(".board-div");
// console.log(sq)
//add event listener to all squares (divs) in grid
for (let prop of sq) {
    // console.log(prop.id)
    prop.addEventListener("click", addSymbol);
}

//message box functions delay the alert until the page has loaded
//message box for O
const alertO = function () {
    setTimeout(
        () => {
            alert("O has won");
            4000
        }
    );
    window.location.reload();
}

//message box for X
const alertX = function () {
    setTimeout(
        () => {
            alert("X has won");
            4000
        }
    );
    window.location.reload();
}

//message box for draw
const alertDraw = function () {
    setTimeout(
        () => {
            alert("Cats game");
            4000
        }
    );
    window.location.reload();
}

//variables
var symbol = "";
//all row, column & diagonal arrays initialised
var row1 = ["", "", ""], row2 = ["", "", ""], row3 = ["", "", ""], col1 = ["", "", ""], col2 = ["", "", ""], col3 = ["", "", ""], diag1 = ["", "", ""], diag2 = ["", "", ""]


function addSymbol(e) {

    //console logs the id of the div that is clicked
    console.log(e.target.id)

    //id of div that is clicked
    const sqID = e.target.id

    const element = document.getElementById(sqID);

    /* checks
    if the var symbol (X or Y) is "" and the selected element (div) is not disabled,
    if true sets the initial selection to 'X', the text in the selected square to 'X', sets the X text color to red and element.disabled to true (this will prevent currently selected square from being updated)
    else if the var symbol (X or Y) is "X" and the selected element (div) is not disabled,
    if true sets the next selection to 'O', symbol is used to track X and O,the text in the selected square is set to 'O', sets the O text color to black and element.disabled to true (this will prevent the currently selected square from being updated)
    else if
     else if the var symbol (X or Y) is "O" and the selected element (div) is not disabled,
    if true sets the next selection to 'X', symbol is used to track X and O,the text in the selected square is set to 'X', sets the X text color to red and element.disabled to true (this will prevent the currently selected square from being updated)
     */
    if (symbol === "" && !element.disabled) {
        element.innerText = "X";
        symbol = "X";
        element.style.color = "red";
        element.disabled = true;
    } else if (symbol === "X" && !element.disabled) {
        element.innerText = "O";
        symbol = "O";
        element.style.color = "black";
        element.disabled = true
    } else if (symbol === "O" && !element.disabled) {
        element.innerText = "X";
        symbol = "X";
        element.style.color = "red";
        element.disabled = true
    }



    /*
    Each row or column is an array.  There are 3 row, 3 column and 2 diagonal arrays.
    Each square in a row, column, diagonal has its own array index
    When a square is clicked it is identified by its id and is checked whether it has already been selected, if not then the current symbol X or Y is added to the array index for that square.
    */

    //top row
    if (sqID === "t-left" && row1[0] === "") {
        row1[0] = symbol
    } else if (sqID === "t-middle" && row1[1] === "") {
        row1[1] = symbol
    } else if (sqID === "t-right" && row1[2] === "") {
        row1[2] = symbol
    }

    console.log("row 1:", row1)

    /* the forEach loops through the currently selected row, column, diagonal array and counts the number of X's and O's it adds these as key value pairs to the count index  */

    var count1 = {};
    row1.forEach(function (x) { count1[x] = (count1[x] || 0) + 1; });
    console.log(count1)

    /* The X and O count of the selected row, column diagonal array is checked,
    if there are 3 X's or 3 O's then the "X has won" or "Y has won" is displayed. */

    if (count1.X === 3) {
        console.log("X has won")
        alertX();
    } else if (count1.O === 3) {
        console.log("O has won.")
        alertO();
    }

    /* To verify a 'draw'  X's and O's are counted for each row, column, diagonal.
    X and Y count values are extracted from the count object and are used in the Cats game section to check for a drawn game

    */

    let count1X = 0;
    let count1O = 0;
    let count1XO = 0;
    for (p in count1) {
        if (p === "X" && count1[p] !== undefined) {
            count1X += count1[p]
        }
        if (p === "O" && count1[p] !== undefined) {
            count1O += count1[p]
        }
        count1XO = count1X + count1O
    }
    console.log("XO Count 1:", count1XO)

    //____________________________________________________


    //middle row
    if (sqID === "m-left" && row2[0] === "") {
        row2[0] = symbol
    } else if (sqID === "m-middle" && row2[1] === "") {
        row2[1] = symbol
    } else if (sqID === "m-right" && row2[2] === "") {
        row2[2] = symbol
    }

    console.log("row 2:", row2)

    var count2 = {};
    row2.forEach(function (x) { count2[x] = (count2[x] || 0) + 1; });
    console.log(count2)

    if (count2.X === 3) {
        console.log("X has won")
        alertX();
    } else if (count2.O === 3) {
        console.log("O has won.")
        alertO();
    }


    let count2X = 0;
    let count2O = 0;
    let count2XO = 0;
    for (p in count2) {
        if (p === "X" && count2[p] !== undefined) {
            count2X += count2[p]
        }
        if (p === "O" && count2[p] !== undefined) {
            count2O += count2[p]
        }
        count2XO = count2X + count2O
    }
    console.log("XO Count 2:", count2XO)

    // _____________________________________________________________________________________________


    //bottom row
    if (sqID === "b-left" && row3[0] === "") {
        row3[0] = symbol
    } else if (sqID === "b-middle" && row3[1] === "") {
        row3[1] = symbol
    } else if (sqID === "b-right" && row3[2] === "") {
        row3[2] = symbol
    }

    console.log("row 3:", row3)

    var count3 = {};
    row3.forEach(function (x) { count3[x] = (count3[x] || 0) + 1; });
    console.log(count3)

    if (count3.X === 3) {
        console.log("X has won")
        alertX();
    } else if (count3.O === 3) {
        console.log("O has won.")
        alertO();
    }

    let count3X = 0;
    let count3O = 0;
    let count3XO = 0;
    for (p in count3) {
        if (p === "X" && count3[p] !== undefined) {
            count3X += count3[p]
        }
        if (p === "O" && count3[p] !== undefined) {
            count3O += count3[p]
        }
        count3XO = count3X + count3O
    }
    console.log("XO Count 3:", count3XO)

    // ___________________________________________________________________________________________


    //left column
    if (sqID === "t-left" && col1[0] === "") {
        col1[0] = symbol
    } else if (sqID === "m-left" && col1[1] === "") {
        col1[1] = symbol
    } else if (sqID === "b-left" && col1[2] === "") {
        col1[2] = symbol
    }

    console.log("col 1:", col1)

    var count4 = {};
    col1.forEach(function (x) { count4[x] = (count4[x] || 0) + 1; });
    console.log(count4)

    if (count4.X === 3) {
        console.log("X has won")
        alertX();
    } else if (count4.O === 3) {
        console.log("O has won.")
        alertO();
    }

    let count4X = 0;
    let count4O = 0;
    let count4XO = 0;
    for (p in count4) {
        if (p === "X" && count4[p] !== undefined) {
            count4X += count4[p]
        }
        if (p === "O" && count4[p] !== undefined) {
            count4O += count4[p]
        }
        count4XO = count4X + count4O
    }
    console.log("XO Count 4:", count4XO)
    // ___________________________________________________________________________________________

    //middle column
    if (sqID === "t-middle" && col2[0] === "") {
        col2[0] = symbol
    } else if (sqID === "m-middle" && col2[1] === "") {
        col2[1] = symbol
    } else if (sqID === "b-middle" && col2[2] === "") {
        col2[2] = symbol
    }

    console.log("col 2:", col2)

    var count5 = {};
    col2.forEach(function (x) { count5[x] = (count5[x] || 0) + 1; });
    console.log(count5)

    if (count5.X === 3) {
        console.log("X has won")
        alertX();
    } else if (count5.O === 3) {
        console.log("O has won.")
        alertO();
    }

    let count5X = 0;
    let count5O = 0;
    let count5XO = 0;
    for (p in count5) {
        if (p === "X" && count5[p] !== undefined) {
            count5X += count5[p]
        }
        if (p === "O" && count5[p] !== undefined) {
            count5O += count5[p]
        }
        count5XO = count5X + count5O
    }
    console.log("XO Count 5:", count5XO)

    // ___________________________________________________________________________________________

    //right column
    if (sqID === "t-right" && col3[0] === "") {
        col3[0] = symbol
    } else if (sqID === "m-right" && col3[1] === "") {
        col3[1] = symbol
    } else if (sqID === "b-right" && col3[2] === "") {
        col3[2] = symbol
    }

    console.log("col 3:", col3)

    var count6 = {};
    col3.forEach(function (x) { count6[x] = (count6[x] || 0) + 1; });
    console.log(count6)

    if (count6.X === 3) {
        console.log("X has won")
        alertX();
    } else if (count6.O === 3) {
        console.log("O has won.")
        alertO();
    }

    let count6X = 0;
    let count6O = 0;
    let count6XO = 0;
    for (p in count6) {
        if (p === "X" && count6[p] !== undefined) {
            count6X += count6[p]
        }
        if (p === "O" && count6[p] !== undefined) {
            count6O += count6[p]
        }
        count6XO = count6X + count6O
    }
    console.log("XO Count 6:", count6XO)

    // ___________________________________________________________________________________________

    //left diagonal
    if (sqID === "t-left" && diag1[0] === "") {
        diag1[0] = symbol
    } else if (sqID === "m-middle" && diag1[1] === "") {
        diag1[1] = symbol
    } else if (sqID === "b-right" && diag1[2] === "") {
        diag1[2] = symbol
    }

    console.log("Diagonal 1:", diag1)

    var count7 = {};
    diag1.forEach(function (x) { count7[x] = (count7[x] || 0) + 1; });
    console.log(count7)

    if (count7.X === 3) {
        console.log("X has won")
        alertX();
    } else if (count7.O === 3) {
        console.log("O has won.")
        alertO();
    }

    let count7X = 0;
    let count7O = 0;
    let count7XO = 0;
    for (p in count7) {
        if (p === "X" && count7[p] !== undefined) {
            count7X += count7[p]
        }
        if (p === "O" && count7[p] !== undefined) {
            count7O += count7[p]
        }
        count7XO = count7X + count7O
    }
    console.log("XO Count 7:", count7XO)

    // ___________________________________________________________________________________________

    //right diagonal
    if (sqID === "t-right" && diag2[0] === "") {
        diag2[0] = symbol
    } else if (sqID === "m-middle" && diag2[1] === "") {
        diag2[1] = symbol
    } else if (sqID === "b-left" && diag2[2] === "") {
        diag2[2] = symbol
    }

    console.log("Diagonal 2:", diag2)

    var count8 = {};
    diag2.forEach(function (x) { count8[x] = (count8[x] || 0) + 1; });
    console.log(count8)

    if (count8.X === 3) {
        console.log("X has won")
        alertX();
    } else if (count8.O === 3) {
        console.log("O has won.")
        alertO();
    }

    let count8X = 0;
    let count8O = 0;
    let count8XO = 0;
    for (p in count8) {
        if (p === "X" && count8[p] !== undefined) {
            count8X += count8[p]
        }
        if (p === "O" && count8[p] !== undefined) {
            count8O += count8[p]
        }
        count8XO = count8X + count8O
    }
    console.log("XO Count 8:", count8XO)

    // ___________________________________________________________________________________________


    //Cats game or drawn game

    /*  To be a drawn game there must be a count of 24 (that is 8 rows/columns/diagonals * 3)
    Also there cannot be a winner in any of the rows, columns and diagonals.
     */

    let totalXOCount = 0;
    totalXOCount = count1XO + count2XO + count3XO + count4XO + count5XO + count6XO + count7XO + count8XO

    console.log(totalXOCount)

    if (totalXOCount === 24 &&
        count1O !== 3 && count1X !== 3 &&
        count2O !== 3 && count2X !== 3 &&
        count3O !== 3 && count3X !== 3 &&
        count4O !== 3 && count4X !== 3 &&
        count5O !== 3 && count5X !== 3 &&
        count6O !== 3 && count6X !== 3 &&
        count7O !== 3 && count7X !== 3 &&
        count8O !== 3 && count7X !== 3) {

        alertDraw()
    }

}