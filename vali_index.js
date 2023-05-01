$(document).ready(function() {
    // Validación del formulario de inicio de sesión
    $("#login-form").submit(function(e) {
        e.preventDefault();
    
        var email = $("#email-login").val();
        var password = $("#password-login").val();
    
        if (email == "" || password == "") {
        alert("Por favor ingrese su correo y contraseña.");
        return;
        }
        // Validar correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
        alert("Ingrese un correo electrónico válido.");
        return;
    }
    
    // Enviar formulario si la validación es exitosa
    $(this).unbind("submit").submit();
    });
    // Validación del formulario de registro
    $("#register-form").submit(function(e) {
    e.preventDefault();
    
    var email = $("#email-register").val();
    
    // Validar correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
        alert("Ingrese un correo electrónico válido.");
        return;
    }
    
    // Enviar formulario si la validación es exitosa
    $(this).unbind("submit").submit();
});
// Bloquear la tecla de espacio para el campo de entrada de correo electrónico
$("#email-login, #email-register").keydown(function(e) {
    if (e.keyCode == 32) {
        e.preventDefault();
    }
    });
});