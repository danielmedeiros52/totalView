class Ocorrencia{

    constructor(id,nome,descricao){
        this._nome = nome;
        this._descricao =descricao;
    }

    get nome (){
        return  this._nome;
    }

    get descricao(){
        return this._descricao;
    }
}

module.export = ()=>{
    return  Ocorrencia;
}