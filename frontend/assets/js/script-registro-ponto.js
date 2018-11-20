$(document).ready(function () {

    window.onload = fetch('/carregarJornada')
        .then(resp => resp.json())
        .then(json => atulalizaRegistroPonto(json))

    $('#registrar-ponto').click(function (event) {
        event.preventDefault()
        //envia requisicao para o servidor registrar o ponto do usuario que esta logado.
        var data = {
            'horachegada': $('#id-hora-inicio').text(),
            'pxjornada': retornaJornadaAtual(),
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
    console.log('ATUALIZA PONTO >>>>>', json)
    let date, hours, minutes
    if (json.hora_chegada_jornada !== null) {
        date = new Date(json.hora_chegada_jornada);
        hours = date.getHours()
        minutes = date.getMinutes()
        $('#id-hora-inicio').text(`${hours}:${minutes}`)
    } if (json.hora_saida_almoco !== null) {
        date = new Date(json.hora_saida_almoco);
        hours = date.getHours()
        minutes = date.getMinutes()
        $('#id-hora-saida-almoco').text(`${hours}:${minutes} ás `)
    } if (json.hora_chegada_almoco !== null) {
        date = new Date(json.hora_chegada_almoco);
        hours = date.getHours()
        minutes = date.getMinutes()
        let atual = $('#id-hora-saida-almoco').text()
        $('#id-hora-saida-almoco').text(`${atual}${hours}:${minutes}`)
        $('#id-hora-chegada-almoco').text('.')

    } if (json.hora_saida_jornada !== null) {
        date = new Date(json.hora_saida_jornada);
        hours = date.getHours()
        minutes = date.getMinutes()
        $('#id-hora-saida').text(`${hours}:${minutes}`)
    }


}




const retornaJornadaAtual = () => {
    if ($('#id-hora-inicio').text() !== '' && $('#id-hora-saida-almoco').text() === '') {
        return 'hora_saida_almoco'
    } else if ($('#id-hora-saida-almoco').text() !== '' && $('#id-hora-chegada-almoco').text() === '') {
        return 'hora_chegada_almoco'
    } else if ($('#id-hora-chegada-almoco').text() !== '' && $('#id-hora-saida').text() === '') {
        return 'hora_saida_jornada'
    }
}