function addition_function() {                                  //defines and names the function
    var str = "13!";                                            //defines a variable and gives it a string value
    document.getElementById("add").innerHTML = str;             //grabs the "add" id from the HTML file
}

                                                     
function concatenate_function() {
    var sentence = "I am learning";
    sentence += " a lot from this course!";                     //+ operator concatenates the string variable
    document.getElementById("message").innerHTML = sentence;    //grabs the "message" element from the HTML file
}

