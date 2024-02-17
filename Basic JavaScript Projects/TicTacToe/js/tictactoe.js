let activePlayer = 'X';                                                             //keeps track of whose turn it is
let selectedSquares = [];                                                           //stores an array of moves, used to determine win conditions

function placeXOrO(squareNumber) {                                                  //function for placing X or O in square
    if (!selectedSquares.some(element => element.includes(squareNumber))) {         //ensures a square hasn't been selected already.
        let select = document.getElementById(squareNumber);                         //.some() method is used to check each element of the selectSquare array to see if it contains the square number clicked on.
        if (activePlayer === 'X') {                                                 //this condition checks who's turn it is                                       
            select.style.backgroundImage = 'url("./images/x.png")';                 //if activePlayer = X, the x.png is placed in HTML
        } else {
            select.style.backgroundImage = 'url("./images/o.png")';                 //if activePlayer = O, the o.png is placed in HTML
        }
        selectedSquares.push(squareNumber + activePlayer);                          //squareNumber and activePlayer are concatenated and added to array
        checkWinConditions();                                                       //calls function to check for win conditions
        if (activePlayer === 'X') {                                                 //condition is for changing the active player
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }
        
        audio('./media/place.mp3');                                                     //plays placement sound
        if (activePlayer === 'O') {                                                     //checks to see if it's the computer's turn
            disableClick();                                                             //disables clicking for computer's turn
            setTimeout(function () { computersTurn(); }, 1000);
        }
        return true;
    }

    function computersTurn() {
        let success = false;
        let pickASquare;
        while (!success) {
            pickASquare = String(Math.floor(Math.random() * 9));
            if (placeXOrO(pickASquare)) {
                placeXOrO(pickASquare);
                success = true;
            };
        }
    }
}
