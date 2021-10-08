/////////////////////////////////////////////////////////////////////////////////////////////////
////conversion code stuff////////////////////////////////////////////////////////////////////////
var convertButton = document.getElementById("convert");
var saveListButton = document.getElementById("saveList");
var tmpC = 0;
var usdToCAD = 1.25;
var usdToMXN = 20.16;
var cadToUSD = 0.80;
var cadToMXN = 16.09;
var mxnToUSD = 0.05;
var mxnToCAD = 0.062;
var unitsFrom = "";
var unitsTo = "";
var currenciesFrom = document.getElementsByName("cFrom"); // gets currency converting from
var currenciesTo = document.getElementsByName("cTo");
var currencyOutput = document.getElementById("calcConversionVal");
newHistoryEntry = '';
historyy = new Array(20);
convertButton.onclick = function conversionClick() {
    newHistoryEntry = "x";
    var currencyInput = document.getElementById("userConversionVal").value;
    var msg = "";
    for (let i = 0, length = currenciesFrom.length; i < length; i++){
        if(currenciesFrom[i].checked){
            var currencyFromName = currenciesFrom[i].value;
            break;
        }
    }
        
    for (let i = 0, length = currenciesTo.length; i < length; i++) {
        if(currenciesTo[i].checked){
            var currencyToName = currenciesTo[i].value;
            break;
        }
    }

    if (Number.isNaN(parseFloat(currencyInput))===false){
        currencyOutput.innerText = "";
        tmpC = 0;
        tmpC = parseFloat(currencyInput);
        if (currencyFromName===currencyToName) {
            msg = "Cannot convert within the same currency.";
        } else if (currencyFromName==="CAD") {
            unitsFrom = "Canadian Dollars";
            if (currencyToName==="USD") {
                unitsTo = "United States Dollars";
                msg = (tmpC*cadToUSD).toFixed(2) + " " + unitsTo;
                newHistoryEntry = (tmpC).toFixed(2) + " CAD = " + (tmpC*cadToUSD).toFixed(2) + " USD";
                console.log(newHistoryEntry);
            } else if (currencyToName==="MXN") {
                unitsTo = "Mexican Pesos";
                msg = (tmpC*cadToMXN).toFixed(2) + " " + unitsTo;
                newHistoryEntry = (tmpC).toFixed(2) + " CAD = " + (tmpC*cadToMXN).toFixed(2) + " MXN";
                console.log(newHistoryEntry);
            } else {
                msg = "Something went wrong. Please try again.";
                console.log("index.html.b");
            }
        } else if (currencyFromName==="USD") {
            unitsFrom = "United States Dollars";
            if (currencyToName==="CAD") {
                unitsTo = "Canadian Dollars";
                msg = (tmpC*usdToCAD).toFixed(2) + " " + unitsTo;
                newHistoryEntry = (tmpC).toFixed(2) + " USD = " + (tmpC*usdToCAD).toFixed(2) + " CAD";
                console.log(newHistoryEntry);
            } else if (currencyToName==="MXN") {
                unitsTo = "Mexican Pesos";
                msg = (tmpC*usdToMXN).toFixed(2) + " " + unitsTo;
                newHistoryEntry = (tmpC).toFixed(2) + " USD = " + (tmpC*usdToMXN).toFixed(2) + " MXN";
                console.log(newHistoryEntry);
            } else {
                msg = "Something went wrong. Please try again.";
                console.log("index.html.c");
            }
        } else if (currencyFromName==="MXN") {
            unitsFrom = "Mexican Pesos";
            if (currencyToName==="CAD") {
                unitsTo = "Canadian Dollars";
                msg = (tmpC*mxnToCAD).toFixed(2) + " " + unitsTo;
                newHistoryEntry = (tmpC).toFixed(2) + " MXN = " + (tmpC*mxnToCAD).toFixed(2) + " CAD";
                console.log(newHistoryEntry);
            } else if (currencyToName==="USD") {
                unitsTo = "United States Dollars";
                msg = (tmpC*mxnToUSD).toFixed(2) + " " + unitsTo;
                newHistoryEntry = (tmpC).toFixed(2) + " MXN = " + (tmpC*mxnToUSD).toFixed(2) + " USD";
                console.log(newHistoryEntry);
            } else {
                msg = "Something went wrong. Please try again.";
                console.log("index.html.d");
            }
        } else {
            msg = "Something went wrong. Please try again.";
            console.log("index.html.e");
        }
    } else {
        msg = "Please type in a number amount.";
        console.log("index.html.a");
    }
    currencyOutput.innerText = msg;
    console.log(historyy.length);
    if (newHistoryEntry!=="x") {
        var i = 0;
        var j = 1;
        if (localStorage.getItem('historyy')!==null) {
            historyy = JSON.parse(localStorage.getItem('historyy'));
        }

        while (i <= 18) { // adds new conversion to history
            historyy[i] = historyy[j];
            i = i + 1;
            j = j + 1;
        }
        var d = new Date();
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        historyy[19] = newHistoryEntry + "      " + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
        localStorage.setItem('historyy', JSON.stringify(historyy));
    }
    console.log(historyy);
}

cartListA = new Array();
cartListB = new Array();
tripListZ = new Array();
var checkA = document.getElementsByName("cartSelectA");
var checkB = document.getElementsByName("cartSelectB");
var checkZ = document.getElementsByName("tripSelectZ");
saveListButton.onclick = function addToList() {
    if (checkA[0].checked) {
        if (localStorage.getItem('cartListA')!==null) {
            cartListA = JSON.parse(localStorage.getItem('cartListA'));
        }
        cartListA[cartListA.length] = newHistoryEntry;
        localStorage.setItem('cartListA', JSON.stringify(cartListA));
    }
    if (checkB[0].checked) {
        if (localStorage.getItem('cartListB')!==null) {
            cartListB = JSON.parse(localStorage.getItem('cartListB'));
        }
        cartListB[cartListB.length] = newHistoryEntry;
        localStorage.setItem('cartListB', JSON.stringify(cartListB));
    }
    if (checkZ[0].checked) {
        if (localStorage.getItem('tripListZ')!==null) {
            tripListZ = JSON.parse(localStorage.getItem('tripListZ'));
        }
        tripListZ[tripListZ.length] = newHistoryEntry;
        localStorage.setItem('tripListZ', JSON.stringify(tripListZ));
    }
}

function removeFromCart() {
    // can make it so that checks for checked entries, can delete, and then a for loop runs moving entries up if null
    // can use tripListZ = tripListZ.slice(0,4) ... if 0 and 4 are entries
}

function removeFromTrip (){

}
