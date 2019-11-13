# api-node-sql

Hago este aporte para que puedan ver y usar como ejemplo como hacer un backend para la materia Aplicaciones Interactivas de UADE con node y sql.

Con esta aplicacion podrán facilmente levantar un servicio con node que responde a peticiones http.
A partir de dichas peticiones pueden realizar la consulta que requieran a la base de datos sql.

Se utiliza el diseño MVC tipico, en los controller. Podrán encontrar los objetos del models se utilizan para dar el response,
los controllers van a atender las peticiones, es decir van a actuar como endpoints, y llamaran a los models segun lo requerido.

Se debe tener un controller por cada tabla, u "objeto", y n models por cada controllers. 

Pueden utilizar db4free.NET, base de datos my sql gratis. Se crean una cuenta, cambian los datos del logín en dbsql.js y ya estarán conectados.

También pueden utilizar la librería qcksvrwin (https://www.npmjs.com/package/qckwinsvc) para poder instalar como servicio su backend y 
levantarlo en un servidor de windows.

 De todas formas recomiendo, no utilizar sql para este tipo de tp's.
 
 Saludos,
 Fede.
