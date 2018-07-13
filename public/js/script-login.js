$(document).ready(function () {

    $('#entrar').on('click', function () {
        var data = {
            'login': $('#inputLogin').val(),
            'senha': $('#inputPassword').val()
        }
        $.post('/', data)


        



    })
});