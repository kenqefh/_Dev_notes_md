# Para cambiar la descripcion de un commit

> _Aún esta incompleto.._
```shell
git commit amend                # abre un editor para modificar la historia del commit
```
### Descartar un commit
```shell
git reset --hard HEAD           # descarta los commits y cambios .
|--> git reset --hard HEAD^^^   # 3 ultimos commits
|--> git reset --hard HEAD~3    # 3 ultimos commits

git reset --soft HEAD           # descarta los commits, pero quedan los cambios en el espacio de trabajo
|--> git reset --soft HEAD^     # 1 ultimo commit
|--> git reset --soft HEAD~1    # 1 ultimo commit

git rebase -i HRAD~4            # para ver los ultimos 4 commits y escoger que hacer.
```
__Nota:__
> - Lo cambios [commits] nunca de eliminan!!
> - Debemos saber donde podemos recuperarlos

> - Ver tags