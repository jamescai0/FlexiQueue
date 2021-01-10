window.onload = function () {
    var time = 12 + ".00" + "pm";
    for (var i = 0; i <= 12; i++) {
        var node = document.createElement("option");                 // Create a <option> node
        if (i > 0) {
            time = i + ".00" + "pm";
        }
        if (i == 12) {
            time = i + ".00" + "am";
        }
        var textnode = document.createTextNode(time);         // Create a text node
        node.appendChild(textnode);                              // Append the text to <option>
        document.getElementById("time").appendChild(node);
    }
}


function redirect() {
    if (document.getElementById("search").value = "daldongane") {

    }
    else if (document.getElementById("search").value = "beijing") {

    }

    else if (document.getElementById("search").value = "kinka") {

    }
}