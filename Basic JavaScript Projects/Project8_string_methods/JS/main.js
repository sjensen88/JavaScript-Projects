function complete_Sentence() {
    var part_1 = "Here I am ";
    var part_2 = "demonstrating ";
    var part_3 = "how to concatenate ";
    var part_4 = "multiple string values "; 
    var part_5 = "using JavaScript.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4, part_5);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "The technology you use impresses no one. The experience you create with it is everything.";
    var Section = Sentence.slice(40);
    document.getElementById("Slice").innerHTML = Section;
}

function upper_Method() {
    let text1 = "Hello, World!";
    let text2 = text1.toUpperCase();                            //utilizing toUpperCase() method on a string var
    document.getElementById("Uppercase").innerHTML = text2;
}

function search_Method() {
    let text = "Hello, world, welcome to the universe.";
    text.search("world");                                                   //this function locates a word in the text
    document.getElementById("Hello").innerHTML = text.search("world");      //output is going to be "world"'s position in the string, so 7
}

function string_Method() {
    var X = 256;
    document.getElementById("num_to_string").innerHTML = X.toString();      //this function returns a number as a string
}

function precision_Method() {
    var Y = 29846.1537850812903637;
    document.getElementById("Precision").innerHTML = Y.toPrecision(12);     //reduces the number variable to a specified number of characters (here it is 12)
}

function toFixed_Method() {
    var Z = 2.5980634;
    document.getElementById("Fixed").innerHTML = Z.toFixed(2);              //formats the number variable to the right of the decimal using a specified # of digits (here it is 2)
}

function valueOf_Method() {
    let text = "Hello, TTA instructors!";
    document.getElementById("value_of").innerHTML = text.valueOf();         //returns the primitive value of a string
}
