function complete_Sentence() {
    var part_1 = "Here I am ";
    var part_2 = "demonstrating ";
    var part_3 = "how to concatenate ";
    var part_4 = "multiple string values "; 
    var part_5 = "using JavaScript.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4, part_5);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}