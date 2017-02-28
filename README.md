#__Requisitos de la Práctica__

##Práctica:Primeros pasos en NodeJS

Reescriba los apuntes realizados en la Práctica: Tareas Iniciales para seguir una estructura de directorios diferente, simplificando el despliegue en gh-pages.

Para ello vamos a partir de un fork del repo enten/gitbook-boilerplate que ofrece una estructura inicial para la creación de un libro y su despliegue en gh-pages.

En el directorio scripts/ se encuentran scripts shell para la construcción y despliegue del libro
Este repo utiliza el módulo gh-pages para automatizar el despliegue en gh-pages del libro
Reescriba los scripts shell en el directorio scripts/ para la construcción y despliegue del libro en NodeJS
Añada un Gulpfile con tareas build, deploy, serve, etc. que automaticen la construcción y despliegue del libro en los diferentes sites
Despliegue el libro en su máquina del iaas
Recuerde usar los issues y los projects para la colaboración
Despliegue el libro en su máquina virtual del iaas.ull.es siguiendo las instrucciones en
SERVICIO IAAS de la ULL
Como Desplegar una Aplicación Web en iaas.ull.es

#__LINKS__

##CAMPUS

* [Campus de la asignatura](https://campusvirtual.ull.es/1617/course/view.php?id=1136)

* [Link a la tarea](https://campusvirtual.ull.es/1617/mod/workshop/view.php?id=166756)

* [Descripción de la practica](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/practicas/practicatareasiniciales.html)

##GRUPO

* [Carlos Fernández Donate](https://charly-poket.github.io)

* [David Dorta Acosta](https://alu0100851236.github.io/)

* [Repositorio en github](https://github.com/ULL-ESIT-DSI-1617/primeros-pasos-en-nodejs-carlos-david-35l2-2.git)



#__README DEL FORK__

## GitBook Boilerplate

### Installation

```shell
cd ~/code

git clone https://github.com/enten/gitbook-boilerplate.git awesome-project

cd awesome-project

rm -fr .git

vi package.json
# edit repository.url and repository.wiki

git remote add origin <url>

npm run build
# or
# npm run generate-gitbook && npm run generate-wiki

npm run deploy
# or
# npm run deploy-gitbook && npm run deploy-wiki
```
__Important__: Wiki must be created on Github
