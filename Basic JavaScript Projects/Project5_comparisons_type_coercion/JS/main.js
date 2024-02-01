document.write("10" + 5);
    typeof(10);                        //typeof operator converts the string "10" to a number


num = "24" + 5;
    document.write(typeof(num));        //coercion from number to string


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
    document.getElementById("Test7").innerHTML = console.log(sqrt);
}

document.write(10 == 10);


document.write(5 > 2 && 4 > 10);

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10;)
}