
# LAB6 - CINEMA-PART IV
### Descripción

En este repositorio se hara la implementación de clientes pesados con javascript y la libreria jquery, además se conectará la api rest implementada en los laboratorios pasados y corregida en este.


#### Integrantes

* **Sergio Alejandro Bohórquez Alzate** - *Initial work* - [AlejandroBohal](https://github.com/AlejandroBohal)
* **Juan Carlos García** - *Initial work* - [IJuanchoG](https://github.com/IJuanchoG)

### Pre requisitos

Para correr el proyecto debe tener instalados los siguientes programas
en su computador:

- Java SE Development Kit 8
- Java SE Runtime Environment 8
- Maven para poder construir el proyecto.
- Git para clonar el repositorio. 

### Instrucciones de instalación

Desde la terminal ejecutar los siguientes comandos:
```
 git clone https://github.com/AlejandroBohal/LAB5-ARSW-CINEMAIII
 cd LAB5-ARSW-CINEMAIII
```
compilar el proyecto con el siguiente comando:
```
 mvn package
```
Para correr la api y el servidor local embebido:

```
mvn exec:java -Dexec.mainClass="edu.eci.arsw.cinema.CinemaAPIApplication";
```

en http://localhost:8080 encontraremos el cliente que ejecutará la api con 
apiclient o el stub con apimock, si se desea cambiar la implementación cambiar 
la siguiente linea de código en el path /resources/static/js/app.js:

![](https://media.discordapp.net/attachments/352624122301513730/758256371551961118/unknown.png?width=717&height=329)

### Pruebas

Para correr las pruebas usar el siguiente comando.
```
mvn test;
```
Aclaración:  
Las pruebas del modelo se encuentran en edu.eci.arsw.cinema.test.CinemaServicesTest;
Las pruebas del controlador se encuentran en edu.eci.arsw.cinema.test.ControllerTest;


Imágen de pruebas corriendo:

![](https://media.discordapp.net/attachments/352624122301513730/758354991139520532/unknown.png?width=717&height=167)

## Resultado final

![](https://media.discordapp.net/attachments/352624122301513730/758257505129201734/unknown.png?width=717&height=260)

## Built With

* [IntelliJ](https://www.jetbrains.com/es-es/idea/) - The develop enviroment
* [Maven](https://maven.apache.org/) - Dependency Management
* [JUnit](https://junit.org/junit5/) - Used to generate Unitary Test

## License

Este proyecto es de libre uso y distribución, para más detalles vea el archivo [LICENSE.md](LICENSE.md).


