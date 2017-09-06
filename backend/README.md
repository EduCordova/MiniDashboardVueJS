#Demo en Symfony 2 con EasyAdminBundle
Ejemplo de Sistema CRUD (Create-Read-Update-Delete) desarrollado en Symfony 2.

#### Instalación y configuración:
**1.** Clonar el proyecto.
```sh
$ git clone https://github.com/jatempa/Demo-Symfony.git
```
**2.** Instalar las dependencias desde la raíz del proyecto (por ejemplo desde Demo-Symfony/).
```sh
$ composer install
```
**3.** Editar los parametros de la base de datos como se describe en el siguiente enlace [configuración de Symfony](http://symfony.com/doc/current/best_practices/configuration.html).

**4.** Crear la base de datos.
```sh
$ php app/console doctrine:database:create
```
**5.** Crear el esquema de la base de datos, es decir, el contenido (por ejemplo las tablas y sus relaciones).
```sh
$ php app/console doctrine:schema:create
```
**6.** Crear los datos falsos para las pruebas.
```sh
$ php app/console h4cc_alice_fixtures:load:sets
```
**7.** Instalar los Assets
```sh
$ php app/console assets:install --symlink
```
**8.** Activar el servidor de PHP.
```sh
$ php app/console server:run
```
**9.** Acceder a la siguiente dirección desde nuestro navegador web. 
```sh
http://localhost:8000/admin/
```

#### Capturas de pantalla:
![Leer](https://github.com/jatempa/Demo-Symfony/blob/master/web/Pantalla1.png  "Paginador en el catalogo de alumnos.")
![Agregar](https://github.com/jatempa/Demo-Symfony/blob/master/web/Pantalla2.png  "Crear un registro.")
![Actualizar](https://github.com/jatempa/Demo-Symfony/blob/master/web/Pantalla3.png  "Actualizar un registro.")
![Eliminar](https://github.com/jatempa/Demo-Symfony/blob/master/web/Pantalla4.png  "Eliminar un registro.")

#### Herramientas utilizadas:
1. [Symfony 2](https://github.com/symfony/symfony).
2. [EasyAdminBundle](https://github.com/javiereguiluz/EasyAdminBundle).
3. [DoctrineFixturesBundle](http://symfony.com/doc/current/bundles/DoctrineFixturesBundle/index.html).
4. [AliceFixturesBundle](https://github.com/h4cc/AliceFixturesBundle).

