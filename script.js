const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});





// Obtener los elementos HTML del correo y contraseña
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Obtener el botón de "continuar"
const continueBtn = document.querySelector(".sign-in-container button");

// Agregar un evento de click al botón
continueBtn.addEventListener("click", function() {
  // Verificar si los campos de correo y contraseña no están vacíos
  if (emailInput.value !== "" && passwordInput.value !== "") {
    // Si ambos campos están llenos, redirigir a "entorno.html"
    window.location.href = "entorno.html";
  }
});