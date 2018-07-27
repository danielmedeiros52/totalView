

$(document).ready(()=>{
    $('#sing').on('click',singUp)
    $('#form-singUp').on('click',singUp)
    $('#login').on('click',login)
})

const singUp = ()=>{
  $('#form-singUp').addClass('signup-button-active')
  $('#login').removeClass('login-button-active')
  $('#sing').hide();
}

const login =()=>{
  $('#login').addClass('login-button-active')
  $('#form-singUp').removeClass('signup-button-active')
  $('#log').html('')
  $('#sing').show(500);

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