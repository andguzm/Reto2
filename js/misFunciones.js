function traerInformacion(){
    $.ajax({
        url: "https://ga2e11085e73819-bdlibrary.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/library/library",
        type:"GET",
        datatype:"JSON",
        success: function (respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta.items)
        }
    });
}

function pintarRespuesta(items) {
    let myTable = "<table>";
    for (i=0;i<items.length;i++){
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].target + "</td>";
        myTable += "<td>" + items[i].capacity + "</td>";
        myTable += "<td>" + items[i].category_id + "</td>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado").append(myTable);

}

function guardarInformacion() {
    let myData = {
        id: $("#id").val(),
        target: $("#target").val(),
        capacity: $("#capacity").val(),
        icategory_id: $("#icategory_id").val(),
        name: $("#name").val(),
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://ga2e11085e73819-bdlibrary.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/library/library",
        type: "POST",
        data: myData,
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            $("#target").val("");
            $("#capacity").val("");
            $("#icategory_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("se ha guardado el dato")
        }
    });
}

function editarInformacion() {
    let myData = {
        id: $("#id").val(),
        target: $("#target").val(),
        capacity: $("#capacity").val(),
        icategory_id: $("#icategory_id").val(),
        name: $("#name").val(),
    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://ga2e11085e73819-bdlibrary.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/library/library",
        type: "PUT",
        data: dataToSend,
        contentType:"application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            $("#target").val("");
            $("#capacity").val("");
            $("#icategory_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("se ha actualizado")
        }
    });
}

function borrarElemento(idElemento) {
    let myData = {
        id: idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://ga2e11085e73819-bdlibrary.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/library/library",
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            traerInformacion();
            alert("se ha eliminado")
        }
    });
}


function traerInformacionClient() {
    $.ajax({
        url: "https://ga2e11085e73819-bdlibrary.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/client/client",
        type: "GET",
         datatype: "JSON",
         success: function (respuesta2) {
             console.log(respuesta2);
            pintarRespuestaClient(respuesta2.items)
        }
     });
}

function pintarRespuestaClient(items) {
    let myTable = "<table>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td>" + items[i].email + "</td>";
        myTable += "<td>" + items[i].age + "</td>";
        myTable += "<td> <button onclick='borrarElemento(" + items[i].id + ")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado2").append(myTable);

}

function guardarInformacionClient() {
    let myData = {
        id: $("#id").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        age: $("#age").val(),
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://ga2e11085e73819-bdlibrary.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/client/client",
        type: "POST",
        data: myData,
        datatype: "JSON",
        success: function (respuesta2) {
            $("#resultado2").empty();
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacionClient();
            alert("se ha guardado el dato")
        }
    });
}

function editarInformacionClient() {
    let myData = {
        id: $("#id").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        age: $("#age").val(),
    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://ga2e11085e73819-bdlibrary.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/client/client",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta2) {
            $("#resultado2").empty();
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacionClient();
            alert("se ha actualizado")
        }
    });
}

function borrarElementoClient(idElemento) {
    let myData = {
        id: idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://ga2e11085e73819-bdlibrary.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/client/client",
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta2) {
            $("#resultado2").empty();
            traerInformacionClient();
            alert("se ha eliminado")
        }
    });
}



function traerInformacionMessage() {
    $.ajax({
        url: "https://ga2e11085e73819-bdlibrary.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/message/message",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta3) {
            console.log(respuesta3);
            pintarRespuestaMessage(respuesta3.items)
        }
    });
}

function pintarRespuestaMessage(items) {
    let myTable = "<table>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].messagetext + "</td>";
        myTable += "<td> <button onclick='borrarElemento(" + items[i].id + ")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado3").append(myTable);

}

function guardarInformacionMessage() {
    let myData = {
        id: $("#id").val(),
        messagetext: $("#messagetext").val(),
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://ga2e11085e73819-bdlibrary.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/message/message",
        type: "POST",
        data: myData,
        datatype: "JSON",
        success: function (respuesta3) {
            $("#resultado3").empty();
            $("#messagetext").val("");
            traerInformacionMessage();
            alert("se ha guardado el dato")
        }
    });
}

function editarInformacionMessage() {
    let myData = {
        id: $("#id").val(),
        messagetext: $("#messagetext").val(),
    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://ga2e11085e73819-bdlibrary.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/message/message",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta3) {
            $("#resultado3").empty();
            $("#messagetext").val("");
            traerInformacionMessage();
            alert("se ha actualizado")
        }
    });
}

function borrarElementoMessage(idElemento) {
    let myData = {
        id: idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://ga2e11085e73819-bdlibrary.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/message/message",
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta3) {
            $("#resultado3").empty();
            traerInformacionMessage();
            alert("se ha eliminado")
        }
    });
}
