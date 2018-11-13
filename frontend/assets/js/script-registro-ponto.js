function registrarPonto() {
    //envia requisicao para o servidor registrar o ponto do usuario que esta logado.
    fetch('/registraPonto')
        .then(resp => console.log('chegou'))
        .catch(err => console.log(err))

}