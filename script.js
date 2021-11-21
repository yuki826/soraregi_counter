var counterVal = 0;
var val
function incrementClick() {
    counterVal++;
    val = counterVal * 250
    document.getElementById("counter-label").innerHTML = counterVal;
    document.getElementById("counter-label_b").innerHTML = counterVal;
    document.getElementById("account").innerHTML = val;
}
function decrementClick() {  
    if(0 < counterVal) {
        counterVal--;
        val = counterVal * 250
    }
    document.getElementById("counter-label").innerHTML = counterVal;
    document.getElementById("counter-label_b").innerHTML = counterVal;
    document.getElementById("account").innerHTML = val;
}


var counterVal2 = 0;
function incrementClick2() {
    counterVal2++;
    val2 = counterVal2 * 200
    document.getElementById("counter-label2").innerHTML = counterVal2;
    document.getElementById("counter-label_b2").innerHTML = counterVal2;
    document.getElementById("account2").innerHTML = val2;
}
function decrementClick2() {  
    if(0 < counterVal2) {
        counterVal2--;
        val2 = counterVal2 * 200
    }
    document.getElementById("counter-label2").innerHTML = counterVal2;
    document.getElementById("counter-label_b2").innerHTML = counterVal2;
    document.getElementById("account2").innerHTML = val2;
}

var counterVal3 = 0;
function incrementClick3() {
    counterVal3++;
    document.getElementById("counter-label3").innerHTML = counterVal3;
}
function decrementClick3() {  
    if(0 < counterVal3) {
        counterVal3--;
    }
    document.getElementById("counter-label3").innerHTML = counterVal3;
}

var counterVal4 = 0;
function incrementClick4() {
    counterVal4++;
    document.getElementById("counter-label4").innerHTML = counterVal4;
}
function decrementClick4() {  
    if(0 < counterVal4) {
        counterVal4--;
    }
    document.getElementById("counter-label4").innerHTML = counterVal4;
}

var counterVal5 = 0;
function incrementClick5() {
    counterVal5++;
    document.getElementById("counter-label5").innerHTML = counterVal5;
}
function decrementClick5() {  
    if(0 < counterVal5) {
        counterVal5--;
    }
    document.getElementById("counter-label5").innerHTML = counterVal5;
}

var counterVal6 = 0;
function incrementClick6() {
    counterVal6++;
    document.getElementById("counter-label6").innerHTML = counterVal6;
}
function decrementClick6() {  
    if(0 < counterVal6) {
        counterVal6--;
    }
    document.getElementById("counter-label6").innerHTML = counterVal6;
}
