# Basic commands for Git
## version
```shell
foo@bar:~$ git --version
```
## Add global data name and email
```
git config --global user.name 'Pepito Casa Marmol'
git config --global user.email my_email@gmail.com
```

## View global settings
```shell
git config -l
```
## Start Git
```shell
git init
```
## Commit
```shell
git add .                       # or file(s) name
git commit -m 'Primer commit'
```
## log
```shell
git log                         # ver el historial de commits
git log -p
git log --oneline
git log --oneline --graph       # commit graficante
git log --oneline --graph --all # grafica de todos los commits
```
## status
```shell
git status                      # muestra el estado del repositorio
```
## git add one or more files to index
```shell
git add .                       # all files
git add file.txt file2.rb ..    # for files
```
## git reset HEAD
```shell
git reset HEAD archivo.txt      # to remove files of git  index
```
## git diff
```shell
git diff            # Shows files changes - which are not in the index
git diff --staged   # for those are in the index <git add ..>
```
## checkout --
```shell
git checkout -- texto.txt       # para deshacer los cambios a como estaban en el ultimo commit
                                # siempre en cuando no este en el inidice, en ese caso 1ro <git reset HEAD>
```
## git show
```shell
git show                        # nuestra la info de un commit
```