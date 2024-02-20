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
        
        audio('./media/place.mp3');                                                 //plays placement sound
        if (activePlayer === 'O') {                                                 //checks to see if it's the computer's turn
            disableClick();                                                         //disables clicking for computer's turn
            setTimeout(function () { computersTurn(); }, 1000);                     //this function waits 1 sec before computer places an image and enables click
        }
        return true;                                                                //return true is needed for computersTurn() function to work.
    }

    function checkWinConditions() {                                                     //this function parses the selectedSquares array to search for win conditions.
        if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }         //drawLine function is called to draw a line on the screen if the condition is met.
        else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }    // X 3, 4, 5 condition
        else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }    // X 6, 7, 8
        else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }    // X 0, 3, 6
        else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }    // X 1, 4, 7
        else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }    // X 2, 5, 8
        else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }    // X 6, 4, 2
        else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }   // X 0, 4, 8
        else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }    // O 0, 1, 2 condition
        else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }    // O 3, 4, 5
        else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }    // O 6, 7, 8
        else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }    // O 0, 3, 6
        else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }    // O 1, 4, 7
        else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }    // O 2, 5, 8
        else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }    // O 6, 4, 2
        else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }   // O 0, 4, 8
        else if (selectedSquares.length >= 9) {                                         //this condition checks for a tie. If none of the above conditions are met and 9 squares are selected the code executes.
            audio('./media/tie.mp3');                                                   //tie game sound
            setTimeout(function () { resetGame(); }, 500);                              //sets a .3 second timer before the resetGame is called.
        }

        function arrayIncludes(squareA, squareB, squareC) {                         //checks if an array includes 3 strings. used to check for each win condition.
            const a = selectedSquares.includes(squareA);                            //these 3 variables will be used to check for 3 in a row.
            const b = selectedSquares.includes(squareB);
            const c = selectedSquares.includes(squareC);
            if (a === true && b === true && c === true) { return true; }            //if the 3 variables we pass are all included in our array then
        }                                                                           //true is returned and our else if condition executes the drawLine() function.
    }

    function computersTurn() {                                                      //this function results in random square selected by the computer
        let success = false;                                                        //this boolean is needed for our while loop
        let pickASquare;                                                            //this variable stores a random number 0-8.
        while (!success) {                                                          //this condition allows our while loop to keep trying if a square is selected already                                                   
            pickASquare = String(Math.floor(Math.random() * 9));                    //a random number between 0 and 8 is selected
            if (placeXOrO(pickASquare)) {                                           //if random no. evaluated  returns true, the square hasn't been selected yet.
                placeXOrO(pickASquare);                                             //this line calls the function
                success = true;                                                     //this changes our boolean and ends the loop.
            };
        }
    }
}

function disableClick() {                                                           //makes our body element temporarily unclickable
    body.style.pointerEvents = 'none';
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);           //makes clickable after 1 second
}

function audio(audioURL) {                                                          //takes a string parameter of the path set earlier for placement sound
    let audio = new Audio(audioURL);                                                //creates a new audio object and pass the path as a parameter.      
    audio.play();                                                                   //play method plays the audio sound.
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2) {                          //utilizing HTML canvas to draw win lines
    const canvas = document.getElementById("win-lines");                            //grabs the HTML canvas element
    const c = canvas.getContext('2d');                                              //gives us access to methods and properties to use on canvas
    let x1 = coordX1,                                                               //indicates where the start of a lines x axis is
        y1 = coordY1,                                                               //indicates where the start of a lines y axis is
        x2 = coordX2,                                                               //indicates where the end of a lines x axis is
        y2 = coordY2,                                                               //indicates where the end of a lines y axis is
        x = x1,                                                                     //this variable stores temporary x axis data we update in our animation loop
        y = y1;                                                                     //this var stores temp y axis data we update in our animation loop
    
    function animateLineDrawing() {                                                 //this function interacts with the canvas
        const animationLoop = requestAnimationFrame(animateLineDrawing);            //this variable creates a loop
        c.clearRect(0, 0, 608, 608);                                                //this method clears content from the last loop iteration
        c.beginPath();                                                              //this method starts a new path
        c.moveTo(x1, y1);                                                           //this method moves us to a starting point in our line
        c.lineTo(x, y);                                                             //this method indicates the end point in our line
        c.lineWidth = 10;                                                           //sets the width of the line
        c.strokeStyle = 'rgba(75, 0, 251, .8)';                                    //sets the color of the line
        c.stroke();                                                                 //this method draws everything we laid out above
        if (x1 <= x2 && y1 <= y2) {                                                 //this condition checks if we've reached the endpoints
            if (x < x2) { x += 10; }                                                //this condition adds 10 to the previous end x endpoint
            if (y < y2) { y += 10; }                                                //this condition adds 10 to the previous end y endpoint
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }        //this condition is similar to the one above; it is necessary for the 6, 4, 2 win conditions.
        }
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

    function clear() {                                                              //clears our canvas after our win line is drawn
        const animationLoop = requestAnimationFrame(clear);                         //this line starts our animation loop
        c.clearRect(0, 0, 608, 608);                                                //this line clears our canvas
        cancelAnimationFrame(animationLoop);                                        //this line stops our animation loop
    }

    disableClick();                                                                 //disallows clicking while the win sound is playing
    audio('./media/winGame.mp3');                                                   //plays the win sounds
    animateLineDrawing();                                                           //calls our main animation loop
    setTimeout(function () { clear(); resetGame(); }, 1000);                        //this line waits 1 second, then clears canvas, resets game, and allows clicking again.
}

function resetGame() {                                                              //resets the game in the event of a tie or a win
    for (let i = 0; i < 9; i++) {                                                   //this for loop iterates through each HTML square element
        let square = document.getElementById(String(i));                            //this variable gets the HTML element i.
        square.style.backgroundImage = '';                                          //removes our elements backgroundImage
    }
    selectedSquares = [];                                                           //resets our array so it is empty and we can start over
}