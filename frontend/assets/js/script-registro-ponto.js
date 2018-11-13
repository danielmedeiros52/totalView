function registrarPonto() {
    //envia requisicao para o servidor registrar o ponto do usuario que esta logado.
    var data = {
        'horachegada': $('#id-hora-inicio').text(),
    }
    $.ajax({
        url: '/registraPonto',
        type: 'POST',
        data: data,
        complete: function (jqXHR, textStatus) {
            if (jqXHR.responseText.includes('login')) {
                $('#error').html('')
                $('#error').append('<div>Erro, login ou senha invalido!</div>')
            } else {
                window.location = jqXHR.responseText
            }
        }

    })




}