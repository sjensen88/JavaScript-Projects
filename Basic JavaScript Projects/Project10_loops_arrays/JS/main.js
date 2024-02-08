function countdown_Function() {
    var Digit = "";
    var X = 10;
    while (X > 0) {                                                     //function that utilizes a "while" loop
        Digit += "<br>" + X;
        X--;
    }
    document.getElementById("countdown").innerHTML = Digit;
}

function length_Function() {
    let text = "Hello, World!";
    let length = text.length;                                           //returns the length of the string (number of characters)
    document.getElementById("length").innerHTML = text.length;
}

var Vegetables = ["Tomato", "Broccoli", "Kale", "Eggplant", "Zucchini", "Carrot", "Cabbage"];
var Content = "";
var Y;
function for_Loop() {                                                   //function that utilizes a "for" loop
    for (Y = 0; Y < Vegetables.length; Y++) {
        Content += Vegetables[Y] + "<br>";
    }
    document.getElementById("List_of_Vegetables").innerHTML = Content;
}

function vacation_pics() {  
    var Vacation_Pic = [];                                              //creating an array
    Vacation_Pic[0] = "Mexico";
    Vacation_Pic[2] = "Turkey";
    Vacation_Pic[3] = "Spain";
    Vacation_Pic[4] = "the Philippines";
    Vacation_Pic[5] = "Nepal";
    document.getElementById("vacation").innerHTML = "In this photo, I was travelling in " + Vacation_Pic[0] + ".";
}

function constant_Function() {
    const Vehicle = { make: "Honda", model: "Civic", color: "black" };  //created a constant
    Vehicle.color = "silver";                                           //changed color from black to silver
    Vehicle.price = "$35,000";
    Vehicle.mileage = "2,200";
    document.getElementById("constant").innerHTML = "The cost of my " + Vehicle.color + " " + Vehicle.make + " " + Vehicle.model + " was "
        + Vehicle.price + "." + " It had " + Vehicle.mileage + " miles on it at the time of purchase.";
}

function keyword_Function() {
    var Z = 25;
    document.write(Z);
    {
        let Z = 4;                                          //utilizing the "let" keyword to demo block scope
        document.write("<br>" + Z);
    }
    document.write("<br>" + Z);
}

function return_Function(name) {
    return "Hello, " + name;                                //return statement with a string
}
document.getElementById("return_statement").innerHTML = return_Function("TTA instructors! This is my return statement.");

function add_Numbers(a, b) {
    return a + b;                                           //return statement with a math function
}
let sum = add_Numbers(5, 3);
console.log(sum);

let pet = {                                 //created an object
    species: "dog ",                        //established properties of said object
    breed: "Great Dane ",
    age: "2 ",
    color: "harlequin ",
    description: function () {              //method for the object
        return "My neighbor's new " + this.species + "is a " + this.age + " year-old " + this.breed + " with a " + this.color + "coat.";
    }
};
document.getElementById("Pet_Object").innerHTML = pet.description();

                                            //demonstrating the JS break statement:
for (let i = 1; i <= 5; i++) {              //program to print the value of variable i
    if (i === 3) {                          //this is the break condition: 
        break;                              //when i is equal to 3, the loop terminates.
    }
    console.log(i);                         //output is only going to include the first two iterations of the loop.                         
}


                                            //demonstrating the JS continue statement:
for (let i = 1; i <= 5; i++) {              //program to print the value of i
    if (i == 3) {                           //the continue condition: when i is equal to 3, 
        continue;                           //the third iteration of the loop is skipped 
    }                                       
    console.log(i);                         //the number 3 is NOT printed to the console while 4 and 5 are (b/c as long as i is less than or equal to 5).
}