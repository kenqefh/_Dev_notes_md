## Add shh
```shell
ssh-keygen -t rsa -b 4096 -C "pepito.puentes@gmail.com"
[enter]
[set a phase]
[set same phase]
```
__valid__
```shell
ls -al ~/.ssh
[List_of_keys]
```
__Star SSH agent in the background:__
```shell
eval "$(ssh-agent -s)"
```
__Add our SSH key to shh-agent. If you create with different name, replace this on *'id_rsa'*__
```shell
ssh-add ~/.ssh/id_rsa
```
#### ADD a new ssh key to my gitHub
```shell
sudo apt-get install xclip
xclip -sel clip < ~/.ssh/id_rsa.pub
```
__Go to GitHub Page, find config - ssh - add ssh__
```bash
paste-ssh in your GitHub
```