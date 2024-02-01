function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";                     //utilizing ternary values
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {
    var Age, Can_vote;                                                                          //naming variables
    Age = document.getElementById("Age").value;                                                 //grabs the "Age" id from HTML file
    Can_vote = (Age < 18) ? "Sorry, you are not old enough to" : "Congratulations, you can";    //utilizing ternary values
    document.getElementById("Vote").innerHTML = Can_vote + " vote!";                            //displays result of function based on user input
}


function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
var Steph = new Vehicle("Honda", "Civic Sport", 2021, "Black");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
        " manufactured in " + Erik.Vehicle_Year;
}

function newkeyFunction() {
    document.getElementById("New_and_This").innerHTML =
        "Steph drives a " + Steph.Vehicle_Color + "-colored " + Steph.Vehicle_Make + " " + Steph.Vehicle_Model +
        " manufactured in " + Steph.Vehicle_Year;
}

function Pet(Species, Breed, Age, Color) {                          //constructor function using "this"
    this.Pet_Species = Species;
    this.Pet_Breed = Breed;
    this.Pet_Age = Age;
    this.Pet_Color = Color;
}

var John = new Pet("Cat", "Siamese", 5, "Silver");                  //constructor variables using "new"
var Jane = new Pet("Dog", "Rottweiler", 2, "Black");
var Bob = new Pet("Cat", "Persian", 9, "White");
var Nancy = new Pet("Dog", "Golden Retriever", 13, "Brown");

function petFunction() {
    document.getElementById("Pet").innerHTML =                  
        "Nancy has a " + Nancy.Pet_Color + ", " + Nancy.Pet_Age + " year-old " + Nancy.Pet_Breed;   //displays results from the constructor function
}

function nested_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 1;
        function Plus_one() {
            Starting_point += 1;
        }
        Plus_one();
        return Starting_point;
    }
}

