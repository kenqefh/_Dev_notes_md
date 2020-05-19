# Git states
```
New File => index.html
```
__Fase 1: UNTRACKETD__ - Archivo que aún no se esta haciendo un seguimiento con Git.
```shell
git add index.html              # To Fase 2.
```
__Fase 2: STAGED__ - Cuando esta en el indice, estado dónde estan los cambios que seran agregados en el siguiente commit.
```shell
git reset HEAD  index.html      # To Fase 1.
                                    # To Fase 4 (SI ya ha sido parte de un commit).
git commit -m 'Message'         # To Fase 3.
```
__Fase 3: UNMODIFIED__ - Estado no modificado, que ya esta en el commit.
```shell
<Se modifica el archivo>        # To Fase 4.
```
__Fase 4: MODIFIED__ - Cuando el archivo a sido modificado.
```shell
git add index.html              # To Fase 2.
|-->git reset HEAD index.html   # To Fase 4 - regresará a MODIFIED porque ya estaba en un commit.
git checkout -- index.html      # To Fase 3 - deshace los cambios al ultimo commit (Cuidado con perder tus avances - código).
```
__NORMAL CICLE:__
```shell
Fase 1 => Fase 2 => Fase 3 => Fase 4 [end] or [ => Fase 2 ]
```
# Archivo .gitignore
Lista de archivos que NO deben ser incluidos en el sistema de control de versiones.
```shell
.gitignore
    mi-carpeta                      # todas las carpetas con ese nombre.
    /mi-carpeta                     # carpeta en la ruta raíz.
    mi-archivo.text                 # todos los archivos que existan en el proyecto.
    /mi-archivo.text                # archivo que exista en la carpeta raíz.
    mi-carpeta/mi-archivo.text      # archivo que exista en 'mi-carpeta'.
    *.log                           # para ignorar un tipo especifico de archivos.
    # Es un comentario              # para comentarios
```