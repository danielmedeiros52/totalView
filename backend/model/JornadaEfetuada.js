class JornadaEfetuada {
    // id_jornada_efetuada integer NOT NULL DEFAULT nextval('jornada_efetuada_dia_id_jornada_efetuada_seq':: regclass),
    // usuario_id integer,
    // hora_chegada_jornada timestamp without time zone,
    // hora_saida_almoco timestamp without time zone,
    // hora_chegada_almoco timestamp without time zone,
    // hora_saida_jornada timestamp without time zone,
    // jornada_em timestamp without time zone,
    // CONSTRAINT jornada_efetuada_dia_pkey PRIMARY KEY(id_jornada_efetuada),
    // CONSTRAINT jornada_efetuada_dia_usuario_id_fkey FOREIGN KEY(usuario_id)
    // REFERENCES public.usuario(id_usuario) MATCH SIMPLE
    constructor(id_jornada_efetuada, usuario_id, hora_chegada_jornada, hora_saida_almoco, hora_chegada_almoco, hora_saida_jornada, jornada_em, jornada, setor) {
        this._id_jornada_efetuada = id_jornada_efetuada;
        this._usuario_id = usuario_id;
        this._hora_chegada_jornada = hora_chegada_jornada;
        this._hora_saida_almoco = hora_saida_almoco;
        this._hora_chegada_almoco = ora_chegada_almoco;
        this._hora_saida_jornada = hora_saida_jornada;
        this._jornada_em = jornada_em;
        Object.freeze(this);
    }

    get id_jornada_efetuada() {
        return this._id_jornada_efetuada
    }
    get usuario_id() {
        return this._usuario_id
    }
    get hora_chegada_jornada() {
        return this._hora_chegada_jornada
    }
    get hora_saida_almoco() {
        return this._hora_saida_almoco
    }
    get ora_chegada_almoco() {
        return this._hora_chegada_almoco
    }
    get hora_saida_jornada() {
        return this._hora_saida_jornada
    }
    get jornada_em() {
        return this._jornada_em
    }
}
module.exports = function () {
    return JornadaEfetuada;
}