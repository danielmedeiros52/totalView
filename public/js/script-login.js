$(document).ready(function () {

    $('#entrar').on('click', function () {
        var data = {
            'login': $('#inputLogin').val(),
            'senha': $('#inputPassword').val()
        }
        $.ajax({
            url: '/',
            type: 'POST',
            data: data,
            complete: function (jqXHR, textStatus) {
                if (!jqXHR.responseText.includes('erro')) {
                    window.location = jqXHR.responseText
                } else {
                    alert(jqXHR.responseText)
                }
            }

        })
    })

    $('#novo-cadastro').on('click', function () {
        window.location = 'registro'
    })
});