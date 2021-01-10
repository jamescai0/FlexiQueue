window.onload = function () {
    for (var i = 0; i < 7; i++) {
        getDate(i);
    }

    var time = "12.00pm";
    for (var i = 0; i <= 13; i++) {
        var node = document.createElement("option");                 // Create a <option> node
        if (i > 0 && i < 13) {
            time = i + ".00pm";
        }
        else if (i == 13) {
            time = 1 + ".00am";
        }

        var textnode = document.createTextNode(time);         // Create a text node
        node.appendChild(textnode);                              // Append the text to <option>
        document.getElementById("time").appendChild(node);
    }
}

function getDate(current) {
    var today = new Date();
    var date = (today.getDate() + current) + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    var node = document.createElement("option");                 // Create a <option> node
    var textnode = document.createTextNode(date);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <option>
    document.getElementById("date").appendChild(node);
};

