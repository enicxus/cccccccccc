const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});



const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const continuarButton = document.querySelector('.sign-in-container button');

continuarButton.addEventListener('click', function (event) {
	if (emailInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
		window.location.href = 'entorno.html';
	} else {
		event.preventDefault();
	}
});