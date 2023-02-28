$(document).ready(function () {

    var estado = true;
    setInterval(() => {
        if (estado) {
            $("thead td").text("ME CAMBIE");
        } else {
            $("thead td").html("ME <b>CAMBIE</b>");
        }
        estado = !estado;
    }, 2000);

    //$("thead td").css("background-color", "#93e893");
    //$("thead td").css("color", "red");
    $("thead td").css({
        "background-color": "#93e893",
        "color": "red"
    });

    $("form button").addClass("myButton");
    //$(selector).removeClass(className);

    $("tbody").append("<tr><td>Datos nnuevo</td><td>123</td><td>345</td></tr>");

    $(".apple").attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/88px-Windows_logo_-_2012.svg.png");

    $(".apple2").hide(10000);
    setTimeout(() => {
        $(".apple").fadeOut(2000, function () {
            $(".apple").fadeIn(2000);
        });
        $(".apple3").hide(2000, function () {
            $(".apple3").show(2000);
        });
        $(".apple4").animate({
            "opacity": 0
        }, 2000, function () {
            $(".apple4").animate({
                "opacity": 1,
                "background-color": "blue"
            }, 2000);
        });
    }, 3000);
});


function validarFormulario(event) {
    let error=false;
    $(".error").text("");
    let nombre = $("#nombre").val();
    if (nombre.length < 10) {
        $("#nombre").next().text("Nombre muy corto");
        error=true;
    }
    if (!isNaN(nombre)) {
        $("#nombre").next().text("Nombre es un numero");
        error=true;
    }
    let apellidos = $("#apellidos").val();
    let reg = new RegExp("([a-z]|[A-Z])*");
    if (!reg.test(apellidos)) {
        $("#apellidos").next().text("El apellido no cumple los requisitos");
        error=true;
    }
    
    

    let correo = $("#correo").val();
    reg = new RegExp("^[^@]+@[^@]+\.[a-zA-Z]{2,}$");
    if (!reg.test(correo)) {
        $("#correo").next().text("correo no valido");
        error=true;
    }

    let comentario = $("#comentario").val();

    if (comentario.split(" ").length<8) {
        $("#comentario").next().text("Debes agregar al menos 8 palabras");
        error=true;
    }

    if (error) {
        event.preventDefault();
    }

}