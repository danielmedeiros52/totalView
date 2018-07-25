--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.13
-- Dumped by pg_dump version 9.5.13

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: banco_hora; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.banco_hora (
    id_banco_hora integer NOT NULL,
    usuario_id integer,
    saldo_banco_hora integer NOT NULL
);


ALTER TABLE public.banco_hora OWNER TO postgres;

--
-- Name: banco_hora_id_banco_hora_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.banco_hora_id_banco_hora_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.banco_hora_id_banco_hora_seq OWNER TO postgres;

--
-- Name: banco_hora_id_banco_hora_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.banco_hora_id_banco_hora_seq OWNED BY public.banco_hora.id_banco_hora;


--
-- Name: cargo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cargo (
    id_cargo integer NOT NULL,
    funcao character varying(10) NOT NULL,
    setor_id integer,
    tipo character(5) NOT NULL
);


ALTER TABLE public.cargo OWNER TO postgres;

--
-- Name: cargo_id_cargo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cargo_id_cargo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cargo_id_cargo_seq OWNER TO postgres;

--
-- Name: cargo_id_cargo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cargo_id_cargo_seq OWNED BY public.cargo.id_cargo;


--
-- Name: faltas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.faltas (
    id_falta integer NOT NULL,
    usuario_id integer,
    data_falta timestamp without time zone NOT NULL,
    is_justificada boolean NOT NULL,
    is_atestado boolean NOT NULL
);


ALTER TABLE public.faltas OWNER TO postgres;

--
-- Name: filial; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.filial (
    id_filial integer NOT NULL,
    razao_social character varying(20) NOT NULL,
    cnpj character varying(14) NOT NULL,
    endereco character varying(30),
    uf character(2)
);


ALTER TABLE public.filial OWNER TO postgres;

--
-- Name: filial_id_filial_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.filial_id_filial_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.filial_id_filial_seq OWNER TO postgres;

--
-- Name: filial_id_filial_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.filial_id_filial_seq OWNED BY public.filial.id_filial;


--
-- Name: folgas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.folgas (
    id_folga integer NOT NULL,
    usuario_id integer,
    data_folga timestamp without time zone NOT NULL,
    is_autorizado boolean,
    periodo_folga integer NOT NULL,
    observacao_solicitacao character varying(50),
    usuario_autorizacao integer,
    observacao_autorizacao character varying(50)
);


ALTER TABLE public.folgas OWNER TO postgres;

--
-- Name: folgas_id_folga_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.folgas_id_folga_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.folgas_id_folga_seq OWNER TO postgres;

--
-- Name: folgas_id_folga_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.folgas_id_folga_seq OWNED BY public.folgas.id_folga;


--
-- Name: hora_extra; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.hora_extra (
    id_hora_extra integer NOT NULL,
    usuario_id integer,
    hora_extra_em timestamp without time zone NOT NULL,
    is_autorizado boolean,
    quantidade_extra_minuto integer NOT NULL,
    is_banco_hora boolean
);


ALTER TABLE public.hora_extra OWNER TO postgres;

--
-- Name: hora_extra_id_hora_extra_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.hora_extra_id_hora_extra_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.hora_extra_id_hora_extra_seq OWNER TO postgres;

--
-- Name: hora_extra_id_hora_extra_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.hora_extra_id_hora_extra_seq OWNED BY public.hora_extra.id_hora_extra;


--
-- Name: jornada; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.jornada (
    id_jornada integer NOT NULL,
    carga_horaria_semana integer NOT NULL,
    hora_chegada_jornada timestamp without time zone NOT NULL,
    hora_saida_almoco timestamp without time zone NOT NULL,
    hora_chegada_almoco timestamp without time zone NOT NULL,
    hora_saida_jornada timestamp without time zone NOT NULL,
    is_jornada_flexivel boolean NOT NULL
);


ALTER TABLE public.jornada OWNER TO postgres;

--
-- Name: jornada_efetuada_dia; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.jornada_efetuada_dia (
    id_jornada_efetuada integer NOT NULL,
    usuario_id integer,
    hora_chegada_jornada timestamp without time zone,
    hora_saida_almoco timestamp without time zone,
    hora_chegada_almoco timestamp without time zone,
    hora_saida_jornada timestamp without time zone,
    jornada_em timestamp without time zone
);


ALTER TABLE public.jornada_efetuada_dia OWNER TO postgres;

--
-- Name: jornada_efetuada_dia_id_jornada_efetuada_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.jornada_efetuada_dia_id_jornada_efetuada_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.jornada_efetuada_dia_id_jornada_efetuada_seq OWNER TO postgres;

--
-- Name: jornada_efetuada_dia_id_jornada_efetuada_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.jornada_efetuada_dia_id_jornada_efetuada_seq OWNED BY public.jornada_efetuada_dia.id_jornada_efetuada;


--
-- Name: jornada_id_jornada_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.jornada_id_jornada_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.jornada_id_jornada_seq OWNER TO postgres;

--
-- Name: jornada_id_jornada_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.jornada_id_jornada_seq OWNED BY public.jornada.id_jornada;


--
-- Name: movimentacao_banco_hora; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.movimentacao_banco_hora (
    id_movimentacao_banco_hora integer NOT NULL,
    banco_hora_id integer,
    hora_extra_id integer,
    falta_id integer,
    tempo_movimentacao integer NOT NULL,
    movimentacao_banco_hora_em timestamp without time zone NOT NULL
);


ALTER TABLE public.movimentacao_banco_hora OWNER TO postgres;

--
-- Name: movimentacao_banco_hora_id_movimentacao_banco_hora_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.movimentacao_banco_hora_id_movimentacao_banco_hora_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.movimentacao_banco_hora_id_movimentacao_banco_hora_seq OWNER TO postgres;

--
-- Name: movimentacao_banco_hora_id_movimentacao_banco_hora_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.movimentacao_banco_hora_id_movimentacao_banco_hora_seq OWNED BY public.movimentacao_banco_hora.id_movimentacao_banco_hora;


--
-- Name: setor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.setor (
    id_setor integer NOT NULL,
    descricao character varying(10) NOT NULL
);


ALTER TABLE public.setor OWNER TO postgres;

--
-- Name: setor_id_setor_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.setor_id_setor_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.setor_id_setor_seq OWNER TO postgres;

--
-- Name: setor_id_setor_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.setor_id_setor_seq OWNED BY public.setor.id_setor;


--
-- Name: troca_jornada; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.troca_jornada (
    id_troca integer NOT NULL,
    usuaro_solicitacao integer,
    observacao_solicitacao character varying(50) NOT NULL,
    usuario_troca integer,
    dia_solicitado timestamp without time zone NOT NULL,
    jornada_id integer,
    solicitacao_em timestamp without time zone NOT NULL,
    autorizado_em timestamp without time zone,
    usuario_autorizacao integer,
    observacao_autorizacao character varying(50),
    is_autorizado boolean
);


ALTER TABLE public.troca_jornada OWNER TO postgres;

--
-- Name: troca_jornada_id_troca_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.troca_jornada_id_troca_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.troca_jornada_id_troca_seq OWNER TO postgres;

--
-- Name: troca_jornada_id_troca_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.troca_jornada_id_troca_seq OWNED BY public.troca_jornada.id_troca;


--
-- Name: usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuario (
    id_usuario integer NOT NULL,
    nome character varying(20) NOT NULL,
    cpf character varying(20) NOT NULL,
    email character varying(30) NOT NULL,
    senha character varying(13) NOT NULL,
    matricula character varying(10),
    filial_id integer,
    cargo_id integer,
    jornada_id integer,
    setor_id integer
);


ALTER TABLE public.usuario OWNER TO postgres;

--
-- Name: usuario_id_usuario_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usuario_id_usuario_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.usuario_id_usuario_seq OWNER TO postgres;

--
-- Name: usuario_id_usuario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usuario_id_usuario_seq OWNED BY public.usuario.id_usuario;


--
-- Name: id_banco_hora; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.banco_hora ALTER COLUMN id_banco_hora SET DEFAULT nextval('public.banco_hora_id_banco_hora_seq'::regclass);


--
-- Name: id_cargo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cargo ALTER COLUMN id_cargo SET DEFAULT nextval('public.cargo_id_cargo_seq'::regclass);


--
-- Name: id_filial; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.filial ALTER COLUMN id_filial SET DEFAULT nextval('public.filial_id_filial_seq'::regclass);


--
-- Name: id_folga; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.folgas ALTER COLUMN id_folga SET DEFAULT nextval('public.folgas_id_folga_seq'::regclass);


--
-- Name: id_hora_extra; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.hora_extra ALTER COLUMN id_hora_extra SET DEFAULT nextval('public.hora_extra_id_hora_extra_seq'::regclass);


--
-- Name: id_jornada; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jornada ALTER COLUMN id_jornada SET DEFAULT nextval('public.jornada_id_jornada_seq'::regclass);


--
-- Name: id_jornada_efetuada; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jornada_efetuada_dia ALTER COLUMN id_jornada_efetuada SET DEFAULT nextval('public.jornada_efetuada_dia_id_jornada_efetuada_seq'::regclass);


--
-- Name: id_movimentacao_banco_hora; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movimentacao_banco_hora ALTER COLUMN id_movimentacao_banco_hora SET DEFAULT nextval('public.movimentacao_banco_hora_id_movimentacao_banco_hora_seq'::regclass);


--
-- Name: id_setor; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.setor ALTER COLUMN id_setor SET DEFAULT nextval('public.setor_id_setor_seq'::regclass);


--
-- Name: id_troca; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.troca_jornada ALTER COLUMN id_troca SET DEFAULT nextval('public.troca_jornada_id_troca_seq'::regclass);


--
-- Name: id_usuario; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario ALTER COLUMN id_usuario SET DEFAULT nextval('public.usuario_id_usuario_seq'::regclass);


--
-- Data for Name: banco_hora; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.banco_hora (id_banco_hora, usuario_id, saldo_banco_hora) FROM stdin;
\.


--
-- Name: banco_hora_id_banco_hora_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.banco_hora_id_banco_hora_seq', 1, false);


--
-- Data for Name: cargo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cargo (id_cargo, funcao, setor_id, tipo) FROM stdin;
\.


--
-- Name: cargo_id_cargo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cargo_id_cargo_seq', 1, false);


--
-- Data for Name: faltas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.faltas (id_falta, usuario_id, data_falta, is_justificada, is_atestado) FROM stdin;
\.


--
-- Data for Name: filial; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.filial (id_filial, razao_social, cnpj, endereco, uf) FROM stdin;
\.


--
-- Name: filial_id_filial_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.filial_id_filial_seq', 1, false);


--
-- Data for Name: folgas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.folgas (id_folga, usuario_id, data_folga, is_autorizado, periodo_folga, observacao_solicitacao, usuario_autorizacao, observacao_autorizacao) FROM stdin;
\.


--
-- Name: folgas_id_folga_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.folgas_id_folga_seq', 1, false);


--
-- Data for Name: hora_extra; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.hora_extra (id_hora_extra, usuario_id, hora_extra_em, is_autorizado, quantidade_extra_minuto, is_banco_hora) FROM stdin;
\.


--
-- Name: hora_extra_id_hora_extra_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.hora_extra_id_hora_extra_seq', 1, false);


--
-- Data for Name: jornada; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.jornada (id_jornada, carga_horaria_semana, hora_chegada_jornada, hora_saida_almoco, hora_chegada_almoco, hora_saida_jornada, is_jornada_flexivel) FROM stdin;
\.


--
-- Data for Name: jornada_efetuada_dia; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.jornada_efetuada_dia (id_jornada_efetuada, usuario_id, hora_chegada_jornada, hora_saida_almoco, hora_chegada_almoco, hora_saida_jornada, jornada_em) FROM stdin;
\.


--
-- Name: jornada_efetuada_dia_id_jornada_efetuada_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.jornada_efetuada_dia_id_jornada_efetuada_seq', 1, false);


--
-- Name: jornada_id_jornada_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.jornada_id_jornada_seq', 1, false);


--
-- Data for Name: movimentacao_banco_hora; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.movimentacao_banco_hora (id_movimentacao_banco_hora, banco_hora_id, hora_extra_id, falta_id, tempo_movimentacao, movimentacao_banco_hora_em) FROM stdin;
\.


--
-- Name: movimentacao_banco_hora_id_movimentacao_banco_hora_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.movimentacao_banco_hora_id_movimentacao_banco_hora_seq', 1, false);


--
-- Data for Name: setor; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.setor (id_setor, descricao) FROM stdin;
\.


--
-- Name: setor_id_setor_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.setor_id_setor_seq', 1, false);


--
-- Data for Name: troca_jornada; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.troca_jornada (id_troca, usuaro_solicitacao, observacao_solicitacao, usuario_troca, dia_solicitado, jornada_id, solicitacao_em, autorizado_em, usuario_autorizacao, observacao_autorizacao, is_autorizado) FROM stdin;
\.


--
-- Name: troca_jornada_id_troca_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.troca_jornada_id_troca_seq', 1, false);


--
-- Data for Name: usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuario (id_usuario, nome, cpf, email, senha, matricula, filial_id, cargo_id, jornada_id, setor_id) FROM stdin;
\.


--
-- Name: usuario_id_usuario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuario_id_usuario_seq', 1, true);


--
-- Name: banco_hora_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.banco_hora
    ADD CONSTRAINT banco_hora_pkey PRIMARY KEY (id_banco_hora);


--
-- Name: cargo_funcao_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cargo
    ADD CONSTRAINT cargo_funcao_key UNIQUE (funcao);


--
-- Name: cargo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cargo
    ADD CONSTRAINT cargo_pkey PRIMARY KEY (id_cargo);


--
-- Name: faltas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.faltas
    ADD CONSTRAINT faltas_pkey PRIMARY KEY (id_falta);


--
-- Name: filial_cnpj_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.filial
    ADD CONSTRAINT filial_cnpj_key UNIQUE (cnpj);


--
-- Name: filial_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.filial
    ADD CONSTRAINT filial_pkey PRIMARY KEY (id_filial);


--
-- Name: folgas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.folgas
    ADD CONSTRAINT folgas_pkey PRIMARY KEY (id_folga);


--
-- Name: hora_extra_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.hora_extra
    ADD CONSTRAINT hora_extra_pkey PRIMARY KEY (id_hora_extra);


--
-- Name: jornada_efetuada_dia_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jornada_efetuada_dia
    ADD CONSTRAINT jornada_efetuada_dia_pkey PRIMARY KEY (id_jornada_efetuada);


--
-- Name: jornada_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jornada
    ADD CONSTRAINT jornada_pkey PRIMARY KEY (id_jornada);


--
-- Name: movimentacao_banco_hora_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movimentacao_banco_hora
    ADD CONSTRAINT movimentacao_banco_hora_pkey PRIMARY KEY (id_movimentacao_banco_hora);


--
-- Name: setor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.setor
    ADD CONSTRAINT setor_pkey PRIMARY KEY (id_setor);


--
-- Name: troca_jornada_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.troca_jornada
    ADD CONSTRAINT troca_jornada_pkey PRIMARY KEY (id_troca);


--
-- Name: usuario_cpf_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_cpf_key UNIQUE (cpf);


--
-- Name: usuario_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_email_key UNIQUE (email);


--
-- Name: usuario_matricula_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_matricula_key UNIQUE (matricula);


--
-- Name: usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id_usuario);


--
-- Name: banco_hora_usuario_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.banco_hora
    ADD CONSTRAINT banco_hora_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES public.usuario(id_usuario);


--
-- Name: cargo_setor_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cargo
    ADD CONSTRAINT cargo_setor_id_fkey FOREIGN KEY (setor_id) REFERENCES public.setor(id_setor);


--
-- Name: faltas_usuario_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.faltas
    ADD CONSTRAINT faltas_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES public.usuario(id_usuario);


--
-- Name: folgas_usuario_autorizacao_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.folgas
    ADD CONSTRAINT folgas_usuario_autorizacao_fkey FOREIGN KEY (usuario_autorizacao) REFERENCES public.usuario(id_usuario);


--
-- Name: folgas_usuario_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.folgas
    ADD CONSTRAINT folgas_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES public.usuario(id_usuario);


--
-- Name: hora_extra_usuario_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.hora_extra
    ADD CONSTRAINT hora_extra_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES public.usuario(id_usuario);


--
-- Name: jornada_efetuada_dia_usuario_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jornada_efetuada_dia
    ADD CONSTRAINT jornada_efetuada_dia_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES public.usuario(id_usuario);


--
-- Name: movimentacao_banco_hora_banco_hora_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movimentacao_banco_hora
    ADD CONSTRAINT movimentacao_banco_hora_banco_hora_id_fkey FOREIGN KEY (banco_hora_id) REFERENCES public.banco_hora(id_banco_hora);


--
-- Name: movimentacao_banco_hora_falta_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movimentacao_banco_hora
    ADD CONSTRAINT movimentacao_banco_hora_falta_id_fkey FOREIGN KEY (falta_id) REFERENCES public.faltas(id_falta);


--
-- Name: movimentacao_banco_hora_hora_extra_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movimentacao_banco_hora
    ADD CONSTRAINT movimentacao_banco_hora_hora_extra_id_fkey FOREIGN KEY (hora_extra_id) REFERENCES public.hora_extra(id_hora_extra);


--
-- Name: troca_jornada_jornada_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.troca_jornada
    ADD CONSTRAINT troca_jornada_jornada_id_fkey FOREIGN KEY (jornada_id) REFERENCES public.jornada(id_jornada);


--
-- Name: troca_jornada_usuario_autorizacao_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.troca_jornada
    ADD CONSTRAINT troca_jornada_usuario_autorizacao_fkey FOREIGN KEY (usuario_autorizacao) REFERENCES public.usuario(id_usuario);


--
-- Name: troca_jornada_usuario_troca_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.troca_jornada
    ADD CONSTRAINT troca_jornada_usuario_troca_fkey FOREIGN KEY (usuario_troca) REFERENCES public.usuario(id_usuario);


--
-- Name: troca_jornada_usuaro_solicitacao_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.troca_jornada
    ADD CONSTRAINT troca_jornada_usuaro_solicitacao_fkey FOREIGN KEY (usuaro_solicitacao) REFERENCES public.usuario(id_usuario);


--
-- Name: usuario_cargo; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_cargo FOREIGN KEY (cargo_id) REFERENCES public.cargo(id_cargo) MATCH FULL;


--
-- Name: usuario_filial; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_filial FOREIGN KEY (filial_id) REFERENCES public.filial(id_filial) MATCH FULL;


--
-- Name: usuario_jornada; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_jornada FOREIGN KEY (jornada_id) REFERENCES public.jornada(id_jornada) MATCH FULL;


--
-- Name: usuario_setor; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_setor FOREIGN KEY (setor_id) REFERENCES public.setor(id_setor) MATCH FULL;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

