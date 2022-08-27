api-empleado

tenemos que configurar nuestrar variables de entorno que son importantes para nuestra conexion a la base de datos (colocar la de su conexion de base de datos)

HOST=localhost
USER=postgres
PASSWORD=postgres                
DATABASE=prueba
PORTBASE=5432


hay un script sql donde se encuentra la creacion de las tablas empleado y departamento, que se usaron para esta prueba (src/database/database.sql)



---USO DE LA API DEPARTAMENTO--

(METODO GET)
la ruta para pedir todos nuestros departamentos es:

http://localhost:1234/api/departamentos 

(METODO POST)
la ruta para crear un departamento es:

http://localhost:1234/api/departamentos 

se debe enviar un json en la peticion con la siguiente estructura

codigo integer, nombre String, presupuesto double

{
    "codigo":101,
    "nombre":"norte de santander",
    "presupuesto":30000
}

(METODO PUT)
la ruta para actualizar un empleados es:

http://localhost:1234/api/departamentos/101 

se debe enviar un json en la peticion con la siguiente estructura y un parametro al final de la url como en este caso es el 101, el cual es el codigo del departamento

codigo integer, nombre String, presupuesto double

 {
    "nombre": "norte de santander",
    "presupuesto": 40000
}

(METODO DELETE)
la ruta para eliminar un departamento es:

http://localhost:1234/api/departamentos/101 

se debe enviar un parametro al final de la url como en este caso es el 101, el cual es el codigo del departamento


---USO DE LA API EMPLEADOS---

(METODO GET)
la ruta para pedir todos nuestros empleados es:

http://localhost:1234/api/empleados 

(METODO POST)
la ruta para crear un empleados es:

http://localhost:1234/api/empleados 

se debe enviar un json en la peticion con la siguiente estructura

codigo integer, nit String ,nombre String, apellido1 string, apellido2 string codigoDepartamento integer

{
    "codigo":201,
    "nit":"af23frw",
    "nombre":"julio",
    "apellido1":"jaimes",
    "apellido2":"contreras",
    "codigoDepartamento":101
}


(METODO PUT)
la ruta para actualizar un empleados es:

http://localhost:1234/api/empleados/101 

se debe enviar un json en la peticion con la siguiente estructura y un parametro al final de la url como en este caso es el 101, el cual es el codigo del empleado

codigo integer,nit String ,nombre String, apellido1 string, apellido2 string codigoDepartamento integer

{
    "nit":"af23frw",
    "nombre":"julio",
    "apellido1":"jaimes",
    "apellido2":"contreras",
    "codigoDepartamento":101
}

(METODO DELETE)
la ruta para eliminar un empleados es:

http://localhost:1234/api/empleados/101 

se debe enviar un parametro al final de la url como en este caso es el 101, el cual es el codigo del empleado


para ejecutar el docker nos ubicamos en la carpeta principal

ejecutamos el comando

docker build -t api-empleados .

luego de generar la imagen ejecutamos el docker compose

docker-compose up -d


tener en cuenta que debe generar los script src/database/database.sql para poder usar la api




