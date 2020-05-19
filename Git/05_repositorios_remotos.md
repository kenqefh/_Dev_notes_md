# Remote repository
__create a new repository on the command line__

```shell
echo "# git_curso" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:ElvisFrank/git_curso.git
git push -u origin master
```

__…Or push an existing repository from the command line__
```shell
git remote add origin git@github.com:ElvisFrank/git_curso.git
git push -u origin master

git remote                       # remotes que se tiene configurados
```
__Después de hacer el primer 'push -u' los cambios quedaran guardados.__
```shell
git push -u origin master
<modificando_archivos>
git add file1 file 2             # agregando files con cambios al index
git commit -m 'message'          # UNMODIFIED
|--> git status
git push                         # después del primer 'push -u' es suficiente esto para subir commits  basado en la ultima configuración.
```
__Git clone - Por defecto solo clonara la rama master.__
```shell
git clone git@github.com:ElvisFrank/git_curso.git
..
git remote                       # ya trae nuestro 'origin' previamente configurado
   origin
git remote -v                    # ver estado
```
__Subir otra rama - después de clonarlo__
```shell
git checkout -b rama-1           # crear la rama primero
<cambios>
git push -u origin rama-1        # push en 'rama-1'
|--> git push -f                 # para cuando se tiene errores - REEMPLAZARA todo del REPOSITORIO GitHub con los datos del LOCAL
                                 # no usar a menos que sea muy necesario.
```
__Bajar cambios desde 'master', integrar con cambios locales (rama-de-trabajo) y subir a una 'rama-de-trabajo'__
```shell
git checkout rama-1              # ubicarnos en la rama de trabajo
git fetch origin                 # verificar el repositorio  GitHub
git rebase origin/master         # trae los commits desde 'origin/master' y los integra a 'rama-1'
git push -f origin rama-1        # el 'origin rama-1' es solo para especificar, pero si se uso '-u origin rama-1' anteriormente ya no es necesario.
```
__Bajar cambios desde Git de otra rama-git__
```shell
<cambios_en_github>
git status                       # todo correcto - sin necesidad de acualizar
git checkout rama-git            # nos dara una error

git fetch origin                 # para saber que esta pasando en el repositorio remoto. 
git checkout rama-git            # para cambiar a esa rama y descargar los cambios.
```
__Bajar desde la misma rama 'master' por ejemplo.__
```shell
<se_modifico_codigo_en_la_rama_[master o otra_rama que se desea raer cambios en esa misma rama en el local]>
git status                       # para ver los cambios - no veremos diferencia
git fetch origin                 # después de verificar el repocitorio remoto - encontraremos las diferencias de commits
git pull                         # nos permite bajar los cambios
|--> git pull origin master      # no es necesario por que ya se uso 'git push -u origin master'
|                                # la configuración '-u' esta guardada
```
__Resetear una rama a como esta el el repositorio-GitHub - eliminar nuestros commits locales__
```shell
<commits_no_validos_o_|_queremos_deshacerlos_a_como_esta_en_el_repositorio_GitHub>
git fetch origin                 # para ver si hay cambios en el repsitorio-GitHub.
git reset --hard origin/master   # reseat nuestra rama a como esta en el servidor.
```
> - NOTA: Siempre usar 'git status' para ver como esta el estado de nuestros commit
> - NOTA: Siempre usar 'fetch origin' para actualizar nuestra info LOCAL y ver si difiere con el SERVIDOR