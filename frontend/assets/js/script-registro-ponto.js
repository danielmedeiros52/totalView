$(document).ready(function () {




    $('#registrar-ponto').click(function (event) {
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
                if (jqXHR.responseText.includes('expirou')) {
                    alert('Sua sessão expirou, favor faça login novamente.')
                    window.location.reload();
                } else {
                    atulalizaRegistroPonto(jqXHR.responseJSON)


                }
            }
        })




    })
})

function atulalizaRegistroPonto(json) {
    console.log(json)
    let date, hours, minutes
    if (json.hora_chegada_jornada !== '') {
        date = new Date(json.hora_chegada_jornada);
        hours = date.getHours()
        minutes = date.getMinutes()
        $('#id-hora-inicio').text(`${hours}:${minutes}`)
    }


}