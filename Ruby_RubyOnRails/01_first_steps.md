# cambiar cli - dejar de mostrar toda la ruta:

sudo nano ~/.bashrc
## Buscar
if [ "$color_prompt" = yes ]; then
    PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '
else
    PS1='${debian_chroot:+($debian_chroot)}\u@\h:\w\$ '
fi

## Remove the @\h, and replace the \w with an uppercase \W, so that it becomes:

if [ "$color_prompt" = yes ]; then
    PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u\[\033[00m\]:\[\033[01;34m\]\W\[\033[00m\]\$ '
else
    PS1='${debian_chroot:+($debian_chroot)}\u:\W\$ '

# install vs code
sudo snap install --classic code

# Install ruby:
sudo apt-get update
sudo apt-get install build-essential

## install chruby

wget -O chruby-0.3.9.tar.gz https://github.com/postmodern/chruby/archive/v0.3.9.tar.gz
tar -xzvf chruby-0.3.9.tar.gz
cd chruby-0.3.9/
sudo make install

### X
cd
add the flowing to ~./bashrc
source /usr/local/share/chruby/chruby.sh

If you wish to enable chruby system-wide, add the following to /etc/profile.d/chruby.sh:

if [ -n "$BASH_VERSION" ] || [ -n "$ZSH_VERSION" ]; then
  source /usr/local/share/chruby/chruby.sh
  ...
fi

## install ruby-install

wget -O ruby-install-0.7.0.tar.gz https://github.com/postmodern/ruby-install/archive/v0.7.0.tar.gz
tar -xzvf ruby-install-0.7.0.tar.gz
cd ruby-install-0.7.0/
sudo make install

## intall by
ruby-install ruby 2.6.6

### After this has been installed, we'll need to load chruby automatically, which we can do by adding these lines to your shells configuration file using the following command:

cat >> ~/.$(basename $SHELL)rc <<EOF
source /usr/local/share/chruby/chruby.sh
source /usr/local/share/chruby/auto.sh
EOF

### In order for this to take effect, we'll reload the shell

exec $SHELL

## Open new terminal - To default:
chruby ruby 2.6.6
ruby -v


# Nodejs
sudo apt-get install nodejs

# Yarn

## curl first..
sudo apt update && sudo apt upgrade
sudo apt install curl
curl --version


curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt update && sudo apt install yarn


# Install rubyGems:
sudo apt-get install rubygems

[Para mas informacion](https://www.cyberciti.biz/faq/debian-ubuntu-install-gem-the-frontend-to-rubygems/)


# Install Rails - checkout ruby -v
gem install rails -v 5.2.4



https://www.cyberciti.biz/faq/debian-ubuntu-install-gem-the-frontend-to-rubygems/

## if ocurre un error - postgreSQL
### con gem pg 1.2.3
sudo apt-get install libpq-dev
