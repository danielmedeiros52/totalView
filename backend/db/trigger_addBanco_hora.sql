CREATE OR REPLACE FUNCTION cria_banco_hora() RETURNS TRIGGER AS

$BODY$
DECLARE

BEGIN
INSERT INTO BANCO_HORA (usuario_id,saldo_banco_hora) values (NEW.id_usuario,0);

	RETURN NEW;
END
$BODY$
LANGUAGE plpgsql  VOLATILE
COST 100;

--DROP TRIGGER IF EXISTS cria_banco_hora ON usuario;