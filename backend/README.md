# Symfony 2 Backend

#### Install and setup:
**1.** Clone the project
```sh
$ git clone https://github.com/jatempa/Demo-Symfony.git
```
**2.** Install the dependencies
```sh
$ composer install
```
**3.** Edit the parameters file [configuration](http://symfony.com/doc/current/best_practices/configuration.html).

**4.** Create the database
```sh
$ php app/console doctrine:database:create
```
**5.** Create the schema
```sh
$ php app/console doctrine:schema:create
```
**6.** Create the fake data
```sh
$ php app/console h4cc_alice_fixtures:load:sets
```
**7.** Install assets
```sh
$ php app/console assets:install --symlink
```
**8.** Activate the PHP server
```sh
$ php app/console server:run
```
**9.** Access to next address
```sh
http://localhost:8000/admin/
```

#### Screenshots:
![Leer](https://github.com/jatempa/Demo-Symfony/blob/master/web/Pantalla1.png  "Paginator.")
![Agregar](https://github.com/jatempa/Demo-Symfony/blob/master/web/Pantalla2.png  "Create record.")
![Actualizar](https://github.com/jatempa/Demo-Symfony/blob/master/web/Pantalla3.png  "Update record.")
![Eliminar](https://github.com/jatempa/Demo-Symfony/blob/master/web/Pantalla4.png  "Delete record.")

#### Tools:
1. [Symfony 2](https://github.com/symfony/symfony).
2. [EasyAdminBundle](https://github.com/javiereguiluz/EasyAdminBundle).
3. [DoctrineFixturesBundle](http://symfony.com/doc/current/bundles/DoctrineFixturesBundle/index.html).
4. [AliceFixturesBundle](https://github.com/h4cc/AliceFixturesBundle).

