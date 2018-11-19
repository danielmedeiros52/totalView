CREATE VIEW user_view AS
    SELECT us.*,
	jed.hora_chegada_jornada, jed.hora_saida_almoco,jed.hora_chegada_almoco , jed.hora_saida_jornada
	
    FROM usuario us
    LEFT JOIN jornada_efetuada_dia  jed on (us.id_usuario = jed.usuario_id)