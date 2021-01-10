$("document").ready(function () {
    $("#test").click(function () {
        $.get("{{url_for('daldongane')}}", function (data, status) {
            alert("Seat: " + seat + "\nValue: " + value);
        });
    });
});