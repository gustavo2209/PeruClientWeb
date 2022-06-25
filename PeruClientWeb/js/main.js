$(function () {
    $.ajax({
        url: "../Home/Departamentos",
        dataType: "json",
        success: function (result) {  //alert(JSON.stringify(result));
            var opts = "";

            for (var i = 0; i < result.length; i++) {
                opts += "<option value = \"" + result[i][0] + "\">" + result[i][1] + "</option>";
            }

            $("#departamentos").html(opts);
            selectDepa();
        }
    });
});

function selectDepa() {
    $.ajax({
        url: "../Home/Provincias",
        dataType: "json",
        data: {
            id: $("#departamentos").val()
        },
        success: function (result) {  //alert(JSON.stringify(result));
            var opts = "";

            for (var i = 0; i < result.length; i++) {
                opts += "<option value = \"" + result[i][0] + "\">" + result[i][1] + "</option>";
            }

            $("#provincias").html(opts);
            selectProv();
        }
    });
}

function selectProv() {
    $.ajax({
        url: "../Home/Distritos",
        dataType: "json",
        data: {
            id: $("#provincias").val()
        },
        success: function (result) {  //alert(JSON.stringify(result));
            var opts = "";

            for (var i = 0; i < result.length; i++) {
                opts += "<option value = \"" + result[i][0] + "\">" + result[i][1] + "</option>";
            }

            $("#distritos").html(opts);
            //selectDepa();
        }
    });
}