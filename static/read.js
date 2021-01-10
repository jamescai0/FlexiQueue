$("document").ready(function () {
    $("#test").click(function () {
        var data = { "name": "John", "age": 34 }
        $.ajax({
            url: "{{url_for('daldongane')}}",
            type: "GET",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(data),
        });
    });
});