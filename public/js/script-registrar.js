$(document).ready(function () {



    $('#cadastrar').on('click', function () {
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
        }
        else {
            var data = {
                'nome': $('#input-nome').val(),
                'email': $('#input-email').val(),
                'login': $('#input-login').val(),
                'senha': $('#input-senha').val()
            }
            $.ajax({
                type: 'POST',
                url: '/registro',
                data: data,
                complete: function (jqXHR, textStatus) {
                   if(jqXHR.responseJSON.rowCount>0){
                     alert('Cadastro realizado com sucesso!')
                     window.location='/'
                   }else{
                       alert(jqXHR.responseText)
                   }

                }
            });




            // $.post('/registro/salvar', data,function(){
            //             console.log('sucesso')
            // }).done(function () {
            //     console.log('teste')
            // })

        }



    })




})