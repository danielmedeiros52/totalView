var buttons = document.querySelector('.buttons');
var loginButton = document.querySelector('.log-link');
var signupButton = document.querySelector('#sing');
var activeElements = document.querySelectorAll('[data-action="animated"]');

buttons.addEventListener('click', switcher);

function switcher(e) {
  if(e.target == loginButton) {
    for (var i = 0; i < activeElements.length; i++) {
      activeElements[i].classList.remove('signup-button-active');
      activeElements[i].classList.add('login-button-active');
    }
  } else if(e.target == signupButton) {
    for (var i = 0; i < activeElements.length; i++) {
      activeElements[i].classList.remove('login-button-active');
      activeElements[i].classList.add('signup-button-active');
    }
  }
}

// Initialisation
var canvasDiv = document.getElementById('particle-canvas');
var options = {
  particleColor: '#696969',
  interactive: false,
  background: '/img/bg-login.jpg', 
  speed: 'fast',
	density: '5000'
};
var particleCanvas = new ParticleNetwork(canvasDiv, options);