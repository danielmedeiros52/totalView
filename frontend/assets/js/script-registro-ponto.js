$(document).ready(function () {
    $('#registrar-ponto').on('click', function () {
        event.preventDefault()
        //envia requisicao para o servidor registrar o ponto do usuario que esta logado.
        var data = {
            'horachegada': $('#id-hora-inicio').text(),
        }
        $.ajax({
            url: '/registraPonto',
            type: 'POST',
            data: data,
            complete: function (jqXHR, textStatus) {
                if (jqXHR.responseText.includes('error')) {
                    alert('Erro ao registrar ponto!')
                } else {
                    window.location = jqXHR.responseText
                }
            }

        })




    })
})