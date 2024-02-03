var X = 128                                     //assigned a global variable for add and subtract functions
function Add_numbers_1() {
    document.write(12 + X + "<br>");            //inserted <br> for line breaks
}
function Subtract_numbers_1() {
    document.write(X - 56 + "<br>");
}
Add_numbers_1();
Subtract_numbers_1();


var Y = 48                                      //assigned a global variable for multiplication and division functions
function Multiply_numbers_1() {
    document.write(Y * 2 + "<br>");
}
function Divide_numbers_1() {
    document.write(Y / 8 + "<br>");
}
Multiply_numbers_1();
Divide_numbers_1();


function Add_numbers_2() {
    var Z = 128                                 //assigned a local variable
    console.log(Z + 12 + "<br>");               //created intentional error using console.log() method to debug
}
function Subtract_numbers_2() {
    document.write(Z - 56 + "<br>");
}
Add_numbers_2();
Subtract_numbers_2();


function get_Time() {
    if (new Date().getHours() < 11) {           //created function that returns a greeting if current time is earlier than 11am
        document.getElementById("Good_Morning").innerHTML = "Good morning! Have a great day!";
    }
}

function Height_Function() {
    Height = document.getElementById("Height").value;   //defines the height value based on user input
    if (Height >= 150) {                                //conditional if statement
        Height = "You are tall enough to safely enjoy this ride!";  //output if user height is over 150cm
    }
    else {                                              //if the if statement is false, perform this function
        Height = "Sorry, you are not tall enough to ride.";         //output if user height is less than 150cm
    }
    document.getElementById("How_tall_are_you?").innerHTML = Height;
}

function Time_Function() {
    var Time = new Date().getHours();               //grabs current time from computer
    var Reply;
    if (Time < 12 == Time > 0) {                    //if statement which sets parameters for morning time
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {             //else if statement which sets parameters for aftenoon time
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";              //if previous statements are false, run this fu
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}