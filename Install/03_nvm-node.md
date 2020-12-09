# nodejs install

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
sudo nano ~/.bashrc
```

**Add the following in .bashrc:**

```shell
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

## Install node last version lts

```shell
nvm install --lts
```

### See what version is

```shell
which node
# /home/user_name/.nvm/versions/node/v14.15.1/bin/node
node -v
# v14.15.1
```
