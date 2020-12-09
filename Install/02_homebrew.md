## for ubuntu:

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
# Don't forget use .bashrc instead of .profile
sudo apt-get install build-essential curl file git
# I think if you follow the steps it will be work! and END HERE :D
```

**For more information about brew:**

```shell
brew help
```

### If we don't follow the steps gives by terminal (above)

```shell
test -d ~/.linuxbrew && eval $(~/.linuxbrew/bin/brew shellenv)
test -d /home/linuxbrew/.linuxbrew && eval $(/home/linuxbrew/.linuxbrew/bin/brew shellenv)

# because this not work in .profile
test -r ~/.bashrc && echo "eval \$($(brew --prefix)/bin/brew shellenv)" >>~/.bashrc
echo "eval \$($(brew --prefix)/bin/brew shellenv)" >>~/.bashrc
```

**_this will be not necessary, but.._**

```shell
git clone https://github.com/Homebrew/brew ~/.linuxbrew/Homebrew
mkdir ~/.linuxbrew/bin
ln -s ~/.linuxbrew/Homebrew/bin/brew ~/.linuxbrew/bin
eval $(~/.linuxbrew/bin/brew shellenv)
brew help
```
