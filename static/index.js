window.onload = function () {
    var curday = function (sp) {
        today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //As January is 0.
        var yyyy = today.getFullYear();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        return (dd + sp + mm + sp + yyyy);
    };
}

window.onscroll = function () {


    var header = document.getElementById("navbar");

    var sticky = header.offsetTop;


    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

}
