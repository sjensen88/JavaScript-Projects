function Zodiac_Function() {
    var Zodiac_Output;
    var Zodiacs = document.getElementById("Zodiac_Input").value;
    var Zodiac_String = " is a great sign!";
    switch (Zodiacs) {
        case "Aries":
            Zodiac_Output = "Aries" + Zodiac_String;
            break;
        case "Leo":
            Zodiac_Output = "Leo" + Zodiac_String;
            break;
        case "Virgo":
            Zodiac_Output = "Virgo" + Zodiac_String;
            break;
        case "Libra":
            Zodiac_Output = "Libra" + Zodiac_String;
            break;
        case "Cancer":
            Zodiac_Output = "Cancer" + Zodiac_String;
            break;
        case "Scorpio":
            Zodiac_Output = "Scorpio" + Zodiac_String;
            break;
        case "Taurus":
            Zodiac_Output = "Taurus" + Zodiac_String;
            break;
        case "Pisces":
            Zodiac_Output = "Pisces" + Zodiac_String;
            break;
        case "Sagittarius":
            Zodiac_Output = "Sagittarius" + Zodiac_String;
            break;
        case "Aquarius":
            Zodiac_Output = "Aquarius" + Zodiac_String;
            break;
        case "Gemini":
            Zodiac_Output = "Gemini" + Zodiac_String;
            break;
        case "Capricorn":
            Zodiac_Output = "Capricorn" + Zodiac_String;
            break;
        default:
            Zodiac_Output = "Make sure the first letter is capitalized.";
    }
    document.getElementById("Output").innerHTML = Zodiac_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}


var c = document.getElementById("my-Canvas");
var ctx = c.getContext("2d");

var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "green");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 10, 150, 80);
ctx.font = "20px Arial";
ctx.strokeText("Hello, World!", 35, 50);




const canvas = document.getElementById("my-second-Canvas");
const cntxt = canvas.getContext("2d");

const my_gradient = cntxt.createLinearGradient(0, 0, 0, 170);
my_gradient.addColorStop(0, "black");
my_gradient.addColorStop(1, "white");
cntxt.fillStyle = my_gradient;
cntxt.fillRect(20, 20, 150, 100);
