historyy = JSON.parse(localStorage.getItem('historyy'));
historyView = "";
var i = 0;
while (i < historyy.length) {
    if (historyy[i]!==null) {
    historyView = historyy[i] + "\n" + historyView;
    };
    i = i + 1;
}
console.log(historyView);
document.getElementById("p3").innerText = historyView;