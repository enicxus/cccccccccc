$(document).ready(function () {
    // Bloquear el uso de la tecla espacio y letra ñ en todos los inputs de tipo texto y email
    $('input[type="text"], input[type="email"]').on('keydown', function (e) {
        if (e.keyCode === 32 || e.key === "ñ" || e.key === "Ñ") {
            return false;
        }
    });

    // Validar el correo electrónico en el campo de inicio de sesión
    $('#login-email').on('input', function () {
        var email = $(this).val();
        if (!isValidEmail(email)) {
            $(this).addClass('invalid');
        } else {
            $(this).removeClass('invalid');
        }
    });

    // Validar el correo electrónico en el campo de registro
    $('#signup-email').on('input', function () {
        var email = $(this).val();
        if (!isValidEmail(email)) {
            $(this).addClass('invalid');
        } else {
            $(this).removeClass('invalid');
        }
    });

    // Función para validar el correo electrónico
    function isValidEmail(email) {
        var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        var emailParts = email.split('@');
        var localPart = emailParts[0];
        var domainPart = emailParts[1];
        return emailRegex.test(email) &&
            localPart.length > 0 && localPart.length < 65 &&
            !/^\./.test(localPart) && !/\.$/.test(localPart) && !/\.\./.test(localPart) && !/[^a-zA-Z0-9._%+-]/.test(localPart) &&
            domainPart.length > 2 && domainPart.length < 256 &&
            !/^\./.test(domainPart) && !/\.$/.test(domainPart) && !/\.\./.test(domainPart) && !/[^a-zA-Z0-9-]/.test(domainPart) &&
            /[a-zA-Z]/.test(domainPart.charAt(domainPart.length - 1));
    }

});

