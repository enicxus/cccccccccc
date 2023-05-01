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
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}\.[^\s@]{1,}$/;
        var emailParts = email.split('@');
        var localPart = emailParts[0];
        var domainPart = emailParts[1];
        var domainParts = domainPart.split('.');
        var topLevelDomain = domainParts[domainParts.length - 1];
        return emailRegex.test(email) &&
            localPart.length <= 64 &&
            domainPart.length >= 4 && domainPart.length <= 255 &&
            email.length <= 256 &&
            !/ñ/.test(email) && !/Ñ/.test(email) && !/ñ/.test(domainPart) && !/Ñ/.test(domainPart) &&
            /^[a-zA-Z0-9._%+-]+$/.test(localPart) && /^[a-zA-Z0-9-]+$/.test(domainParts[0]) &&
            /^[a-zA-Z]+$/.test(topLevelDomain);
    }
});


