# Solving conflicts

los errores generados al tener una linea modificada en commits de ramas diferentes 

## Se tienen dos alternativas:
### 1
```shell
git checkout master             # ubicarnos en la rama que sera integrada los cambios
git merge rama-name             # dara un error por mismas lineas modificas en las ramas
<corregir>                      # solucionar error en el editor.
git add archivos-confictos.txt  # agregar los archivos con tuvieron los conlictos.
git commit -m '.. '             # automaticamente hará el merge después de solucionado el error.
```
### 2
```shell
git checkout rama-3             # ubicarse en la rama que tiene los commits (que se integrara)
git rebase master               # similar a merge, pero esta los cargara a 'rama-3' sin commit
<corregir>                      # solucionar los errores que se obtienen (como en merge)
git add file-conflicto.txt      # agregar los archivos que tenias los conflictos (midificaciones en la misma linea)
git rebase --continue           # la aplico los cambios en la 'rama-3'
git checkout master             # digigirnos a la rama a integrar los cambios
git merge rama-3                # integrar los cambios.
                                # PERO, sera 'Fast-forward' sin un commit
                                # mas trabajoso, pero mas limpio la forma de trabajo, sin commits

git log --oneline --graph --all
```