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
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/; // formato estándar de correo electrónico
        var emailParts = email.split('@');
        var localPart = emailParts[0];
        var domainPart = emailParts[1];
        return emailRegex.test(email) &&
            localPart.length <= 64 &&
            domainPart.length >= 2 && domainPart.length <= 255 &&
            email.length <= 256 &&
            !/ñ/.test(email) && !/Ñ/.test(email) && !/ñ/.test(domainPart) && !/Ñ/.test(domainPart);
    }
});
