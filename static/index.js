window.onload = function () {
    for (var i = 0; i < 7; i++) {
        getDate(i);
    }

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

function getTime() {
    var now = new Date();
    var time = now.getTime();
}
function getDate(current) {
    var today = new Date();
    var date = (today.getDate() + current) + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    var node = document.createElement("option");                 // Create a <option> node
    var textnode = document.createTextNode(date);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <option>
    document.getElementById("date").appendChild(node);




};


window.onscroll = function () {


    var header = document.getElementById("navbar");

    var sticky = header.offsetTop;


    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

}
