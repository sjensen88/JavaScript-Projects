document.write(typeof "Hello!");        //outputs "string"

document.write(typeof 8);               //outputs "number"

document.write("10" + 5);
    typeof(10);                         //typeof operator displays a number value from a string variable

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

document.write(10 == 10);               //output true

document.write(10 == 2);                //output false

A = 20;
B = 20;
document.write(A === B);                //matching data type and values, output true

C = 20;
D = "20";
document.write(C === D);                //diff data types with matching values, output false

E = 14;
F = 27;
document.write(E === F);                //matching data types, diff values, output false

document.write(5 > 2 && 10 > 3);        //both true, output true

document.write(5 > 2 && 6 > 10);        //only one is true, output false

document.write(2 < 6 || 4 > 7);         //one is true, output true

document.write(2 > 6 || 4 > 7);         //neither are true, output false

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);  //NOT operator: 20 > 10 is true, so false output
}

function doublenot_Function() {
    document.getElementById("doubleneg").innerHTML = !(5 > 10); //NOT operator: 5>10 is false, double negative = true output
}

