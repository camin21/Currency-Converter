if (localStorage.getItem('cartListA')!==null) {
    document.getElementById("textListA").innerText = "";
    cartListA = JSON.parse(localStorage.getItem('cartListA'));
    var i = 0;
    while (i < cartListA.length) {
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = i;
        checkbox.name = 'cartA';
        checkbox.value = i;
      
        var label = document.createElement('label')
        label.htmlFor = i;
        label.appendChild(document.createTextNode(cartListA[i]));
        
        var br = document.createElement('br');
      
        var container = document.getElementById('textListA');
        container.appendChild(checkbox);
        container.appendChild(label);
        container.appendChild(br);
        i = i + 1;
    }
}
var deleteButton = document.getElementById("buttonListADelete");
if (localStorage.getItem('cartListA')!==null) {
    document.getElementById("textListA").innerText = "";
    cartListA = JSON.parse(localStorage.getItem('cartListA'));
    var i = 0;
    while (i < cartListA.length) {
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = i;
        checkbox.name = 'cartA';
        checkbox.value = i;
      
        var label = document.createElement('label')
        label.htmlFor = i;
        label.appendChild(document.createTextNode(cartListA[i]));
        
        var br = document.createElement('br');
      
        var container = document.getElementById('textListA');
        container.appendChild(checkbox);
        container.appendChild(label);
        container.appendChild(br);
        i = i + 1;
    }
}

deleteButton.onclick = function deleteClick() {
    if (localStorage.getItem('cartListA')!==null) {
    console.log(cartListA);
    var toSave = "";
    var j = 0;
    tripListTemp = new Array();
    var cartAConversions = document.getElementsByName("cartA");
    for (let i = 0, length = cartListA.length; i < length; i++){
        if(cartAConversions[i].checked){
            toSave = toSave;
            console.log("element " + i + "is not checked");
        } else {
            tripListTemp[j] = cartListA[i];
            j = j + 1;
        }
        i = i + 1;
    }
    cartListA = new Array();
    for (let i = 0, length = tripListTemp.length; i < length; i++) {
        cartListA[i] = tripListTemp[i];
        i = i + 1;
    }
    let i = 0;
        document.getElementById("textListA").innerText = "";
        while (i < cartListA.length) {
            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = i;
            checkbox.name = 'cartA';
            checkbox.value = i;
        
            var label = document.createElement('label')
            label.htmlFor = i;
            label.appendChild(document.createTextNode(cartListA[i]));
            
            var br = document.createElement('br');
        
            var container = document.getElementById('textListA');
            container.appendChild(checkbox);
            container.appendChild(label);
            container.appendChild(br);
            i = i + 1;
        }
        localStorage.setItem('cartListA', JSON.stringify(cartListA));
    }
}


if (localStorage.getItem('cartListB')!==null) {
    document.getElementById("textListB").innerText = "";
    cartListB = JSON.parse(localStorage.getItem('cartListB'));
    var i = 0;
    while (i < cartListB.length) {
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = i;
        checkbox.name = 'cartB';
        checkbox.value = i;
      
        var label = document.createElement('label')
        label.htmlFor = i;
        label.appendChild(document.createTextNode(cartListB[i]));
        
        var br = document.createElement('br');
      
        var container = document.getElementById('textListB');
        container.appendChild(checkbox);
        container.appendChild(label);
        container.appendChild(br);
        i = i + 1;
    }
}

var deleteButton = document.getElementById("buttonListBDelete");
if (localStorage.getItem('cartListB')!==null) {
    document.getElementById("textListB").innerText = "";
    cartListB = JSON.parse(localStorage.getItem('cartListB'));
    var i = 0;
    while (i < cartListB.length) {
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = i;
        checkbox.name = 'cartB';
        checkbox.value = i;
      
        var label = document.createElement('label')
        label.htmlFor = i;
        label.appendChild(document.createTextNode(cartListB[i]));
        
        var br = document.createElement('br');
      
        var container = document.getElementById('textListB');
        container.appendChild(checkbox);
        container.appendChild(label);
        container.appendChild(br);
        i = i + 1;
    }
}
deleteButton.onclick = function deleteClick() {
    if (localStorage.getItem('cartListB')!==null) {
    console.log(cartListB);
    var toSave = "";
    var j = 0;
    tripListTemp = new Array();
    var cartBConversions = document.getElementsByName("cartB");
    for (let i = 0, length = cartListB.length; i < length; i++){
        if(cartBConversions[i].checked){
            toSave = toSave;
            console.log("element " + i + "is not checked");
        } else {
            tripListTemp[j] = cartListB[i];
            j = j + 1;
        }
        i = i + 1;
    }
    cartListB = new Array();
    for (let i = 0, length = tripListTemp.length; i < length; i++) {
        cartListB[i] = tripListTemp[i];
        i = i + 1;
    }
    let i = 0;
        document.getElementById("textListB").innerText = "";
        while (i < cartListB.length) {
            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = i;
            checkbox.name = 'cartB';
            checkbox.value = i;
        
            var label = document.createElement('label')
            label.htmlFor = i;
            label.appendChild(document.createTextNode(cartListB[i]));
            
            var br = document.createElement('br');
        
            var container = document.getElementById('textListB');
            container.appendChild(checkbox);
            container.appendChild(label);
            container.appendChild(br);
            i = i + 1;
        }
        localStorage.setItem('cartListB', JSON.stringify(cartListB));
    }
}