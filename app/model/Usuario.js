class Usuario {
    // id_usuario integer NOT NULL DEFAULT nextval('usuario_id_usuario_seq'::regclass),
    //     nome character varying(20) COLLATE pg_catalog."default" NOT NULL,
    //     cpf character varying(20) COLLATE pg_catalog."default" NOT NULL,
    //     email character varying(30) COLLATE pg_catalog."default" NOT NULL,
    //     senha character varying(13) COLLATE pg_catalog."default" NOT NULL,
    //     matricula character varying(10) COLLATE pg_catalog."default",
    //     filial_id integer,
    //     cargo_id integer,
    //     jornada_id integer,
    //     setor_id integer,
    constructor(nome, cpf, email, senha, matricula, filial, cargo, jornada, setor) {
        this._nome = nome;
        this._cpf = cpf;
        this._email = email;
        this._senha = senha;
        this._matricula = matricula;
        this._filial = filial;
        this._cargo = cargo;
        this._jornada = jornada;
        this._setor = setor;
        Object.freeze();
    }

    get nome() {
        return this._nome
    }
    get cpf(){
        return this._cpf
    }
    get email(){
        return this._email
    }
    get senha(){
        return this._senha
    }
    get matricula(){
        return  this._matricula
    }
    get filial(){
        return  this._filial
    }
    get cargo (){
        return this._cargo
    }
    get jornada(){
        return this._jornada
    }
    get setor(){
        return this._setor
    }
}