# Branchs - To get off a brach master

### initial commands
```shell
git branch rama-1           # crea la rama, pero no estamos en ella.
git checkout rama-1         # para saltarse a una rama y hacer commits en esta.

git checkout -b rama-1      # crear y marcar esta rama como la rama de trabajo - lo mismo que las anteriores.
```
### branch
```shell
git branch                  # lista las ramas
git branch nueva_rama       # crea una rama
git branch -m rama-name     # para renombrar rama actual
git branch -d rama-name     # delete una rama
```
### see where HEAD fetch
```shell
git log --oneline           # comando para ver donde apunta HEAD
cd .git                     # tambien se  pueder ver en el archivo .git/HEAD
cat HEAD
```
### integrate changes to a branch <master>
```shell
git checkout master         # ubicarnos en la rama a integrar los cambios en caso de estar en otra rama
git merge rama-1            # rama desde la que proceden los cambios. 
```