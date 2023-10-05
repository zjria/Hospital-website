
var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = "0.0";
var counterOne = setInterval(counterOne, 10);
var counterTow = setInterval(counterTow, 10);
var counterThree = setInterval(counterThree, 10);
var counterFour = setInterval(counterFour, 10);

function counterOne() {
    count1++;
    document.getElementById('num1').innerHTML = count1;
    if (count1 === 365) {
        clearInterval(counterOne);
    }
}

function counterTow() {
    count2++;
    document.getElementById('num2').innerHTML = count2;
    if (count2 === 98) {
        clearInterval(counterTow);
    }
}
function counterThree() {
    count3++;
    document.getElementById('num3').innerHTML = count3;
    if (count3 === 69) {
        clearInterval(counterThree);
    }
}
function counterFour() {
    count4++;
    document.getElementById('num4').innerHTML = count4;
    if (count4 === 450) {
        clearInterval(counterFour);
    }
}



