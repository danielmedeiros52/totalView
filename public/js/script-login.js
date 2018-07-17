$(document).ready(function () {

    $('#entrar').on('click', function () {
        var data = {
            'login': $('#inputLogin').val(),
            'senha': $('#inputPassword').val()
        }
        $.ajax({
            url:'/', 
            type:'POST',
            data:data,
            complete: function(jqXHR , textStatus){
                console.log(jqXHR)
            }
        
        })
    })

    $('#novo-cadastro').on('click', function () {
          window.location='registro'
    })
});