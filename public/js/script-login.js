$(document).ready(function () {
    login()
    $('#sing').on('click', singUp)
    $('#form-singUp').on('click', singUp)
    $('#login').on('click', login)
    $('#voltar-login').on('click', login)

    $('#entrar').on('click', function () {
        event.preventDefault()
        var data = {
            'login': $('#inputLogin').val(),
            'senha': $('#inputPassword').val()
        }
        $.ajax({
            url: '/logar',
            type: 'POST',
            data: data,
            complete: function (jqXHR, textStatus) {
                if (jqXHR.responseText.includes('Erro, login ou senha invalido!')) {
                    $('#error').html('')
                    $('#error').append('<div>Erro, login ou senha invalido!</div>')
                } else {
                     window.location = jqXHR.responseText
                }
            }

        })
    })
    $('#cadastrar').on('click', function () {
        event.preventDefault()
        if ($('#input-senha').val() != $('#input-resenha').val()) {
            alert('As senhas nao conferem!')
        } else if ($('#input-nome').val() == "") {
            alert('O campo nome não pode ficar em branco!')
        } else if ($('#input-email').val() == "") {
            alert('O campo e-mail não pode ficar em branco!')
        }
        else if ($('#input-login').val() == "") {
            alert('O campo login não pode ficar em branco!')
        } else if ($('#input-senha').val() == "") {
            alert('O campo senha não pode ficar em branco!')
        } else if ($('#input-cpf').val() == "") {
            alert('O campo Cpf não pode ficar em branco!')
        }
        else {
            var data = {
                'nome': $('#input-nome').val(),
                'email': $('#input-email').val(),
                'login': $('#input-login').val(),
                'senha': $('#input-senha').val(),
                'cpf': $('#input-cpf').val()
            }
            $.ajax({
                type: 'POST',
                url: '/usuario/cadastrar',
                data: data,
                complete: function (jqXHR, textStatus) {
                    if (jqXHR.responseText.includes('existe !')) {
                        $('#errorCadastro').html('')
                        $('#errorCadastro').append('<div>',jqXHR.responseText,'</div>')
                    }
                   
                    if (jqXHR.responseJSON.rowCount > 0) {
                     alert('Cadastro realizado com sucesso!')
                        window.location = '/'
                    } else {
                       alert(jqXHR.responseText)
                   }

                }
            });
        }
    })

});



  
const singUp = () => {
    $('#form-singUp').addClass('signup-button-active')
    $('#login').removeClass('login-button-active')
    $('#sing').hide();
    setTimeout(aparecerLogin, 500)
  }
  
const login = () => {
    $('#login').addClass('login-button-active')
    $('#form-singUp').removeClass('signup-button-active')
    $('#log').html('')
    $('#voltar-login').hide();
    setTimeout(aparecerSingUp, 500)
  
  }
  
const aparecerSingUp = () => {
    $('#sing').fadeIn(3000)
  }
  
const aparecerLogin = () => {
    $('#voltar-login').fadeIn(3000)
    
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