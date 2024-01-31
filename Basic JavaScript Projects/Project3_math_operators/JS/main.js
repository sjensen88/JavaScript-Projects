function addition_Function() {                                                  //naming the function
    var addition = 5 + 5;                                                       //naming the variable
    document.getElementById("math1").innerHTML = "5 + 5 = " + addition;         //grabs the "math1" id from the HTML file
}


function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("math2").innerHTML = "5 - 2 = " + subtraction;
}

function multiplication() {
    var simple_multi = 6 * 8;
    document.getElementById("math3").innerHTML = "6 x 8 = " + simple_multi;
}

function division() {
    var simple_div = 48 / 6;
    document.getElementById("math4").innerHTML = "48 / 6 = " + simple_div;
}

function more_math() {
    var simple_math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("math5").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_math;
}

function modulus_operator() {
    var simple_math = 25 % 6;                                                      //% finds the remainder of the division equation
    document.getElementById("math6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_math;
}

function negation_operator() {
    var x = 10;                                                                     //returns the negative form of the variable
    document.getElementById("math7").innerHTML = -x;
}

function increment_operator() {
    var y = 100;
    y++;
    document.getElementById("math8").innerHTML = y++;
}

function decrement_operator() {
    var z = 123.45;
    z--;
    document.getElementById("math9").innerHTML = z--;
}

window.alert(Math.random());

function square_root() {
    let n = Math.sqrt(9);
    document.getElementById("math10").innerHTML = n;
}
