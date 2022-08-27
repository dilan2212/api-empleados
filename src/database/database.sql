
CREATE TABLE departamento (
                codigo INTEGER NOT NULL,
                nombre VARCHAR(100) NOT NULL,
                presupuesto DOUBLE PRECISION NOT NULL,
                CONSTRAINT departamento_pk PRIMARY KEY (codigo)
);


CREATE TABLE empleado (
                codigo INTEGER NOT NULL,
                nit VARCHAR(9) NOT NULL,
                nombre VARCHAR(100) NOT NULL,
                apellido1 VARCHAR(100) NOT NULL,
                apellido2 VARCHAR(100) NOT NULL,
                codigo_departamento INTEGER NOT NULL,
                CONSTRAINT empleado_pk PRIMARY KEY (codigo)
);


ALTER TABLE empleado ADD CONSTRAINT departamento_empleado_fk
FOREIGN KEY (codigo_departamento)
REFERENCES departamento (codigo)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;