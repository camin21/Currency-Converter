var deleteButton = document.getElementById("buttonListZDelete");
if (localStorage.getItem('tripListZ')!==null) {
    document.getElementById("textListZ").innerText = "";
    tripListZ = JSON.parse(localStorage.getItem('tripListZ'));
    var i = 0;
    while (i < tripListZ.length) {
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = i;
        checkbox.name = 'tripZ';
        checkbox.value = i;
      
        var label = document.createElement('label')
        label.htmlFor = i;
        label.appendChild(document.createTextNode(tripListZ[i]));
        
        var br = document.createElement('br');
      
        var container = document.getElementById('textListZ');
        container.appendChild(checkbox);
        container.appendChild(label);
        container.appendChild(br);
        i = i + 1;
    }
}
deleteButton.onclick = function deleteClick() {
    if (localStorage.getItem('tripListZ')!==null) {
    console.log(tripListZ);
    var toSave = "";
    var j = 0;
    tripListTemp = new Array();
    var tripZConversions = document.getElementsByName("tripZ");
    for (let i = 0, length = tripListZ.length; i < length; i++){
        if(tripZConversions[i].checked){
            toSave = toSave;
            console.log("element " + i + "is not checked");
        } else {
            tripListTemp[j] = tripListZ[i];
            j = j + 1;
        }
        i = i + 1;
    }
    tripListZ = new Array();
    for (let i = 0, length = tripListTemp.length; i < length; i++) {
        tripListZ[i] = tripListTemp[i];
        i = i + 1;
    }
    let i = 0;
        document.getElementById("textListZ").innerText = "";
        while (i < tripListZ.length) {
            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = i;
            checkbox.name = 'tripZ';
            checkbox.value = i;
        
            var label = document.createElement('label')
            label.htmlFor = i;
            label.appendChild(document.createTextNode(tripListZ[i]));
            
            var br = document.createElement('br');
        
            var container = document.getElementById('textListZ');
            container.appendChild(checkbox);
            container.appendChild(label);
            container.appendChild(br);
            i = i + 1;
        }
        localStorage.setItem('tripListZ', JSON.stringify(tripListZ));
    }
}