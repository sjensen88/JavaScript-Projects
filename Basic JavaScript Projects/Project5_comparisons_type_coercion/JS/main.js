document.write("10" + 5);
    typeof(10);                        //typeof operator converts the string "10" to a number


document.write("24" + 5);
    typeof("The answer is ") + num;    //coercion from number to string


function my_Function() {
    document.getElementById("Test").innerHTML = 0 / 0;
}


function true_Function() {
    document.getElementById("Test2").innerHTML = isNaN("This is a string");
}

function false_Function() {
    document.getElementById("Test3").innerHTML = isNaN("56");
}

function inf_Function() {
    document.write(2E310);
}

function neginf_Function() {
    document.write(-3E310);
}

function boolean_Function() {
    document.write(10>2);
}


function simple_Function() {
    let num = 16;
    let sqrt = Math.sqrt(num);
    console.log(sqrt);
}


