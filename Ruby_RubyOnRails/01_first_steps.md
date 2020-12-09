# Install ruby:

```shell
sudo apt-get update
sudo apt-get install build-essential
```

### install chruby

```shell
wget -O chruby-0.3.9.tar.gz https://github.com/postmodern/chruby/archive/v0.3.9.tar.gz
tar -xzvf chruby-0.3.9.tar.gz
cd chruby-0.3.9/
sudo make install
```

### X

```shell
cd
add the flowing to ~./bashrc
source /usr/local/share/chruby/chruby.sh
```

If you wish to enable chruby system-wide, add the following to `/etc/profile.d/chruby.sh`:

```shell
if [ -n "$BASH_VERSION" ] || [ -n "$ZSH_VERSION" ]; then
  source /usr/local/share/chruby/chruby.sh
  ...
fi
```

### install ruby-install

```shell
wget -O ruby-install-0.7.0.tar.gz https://github.com/postmodern/ruby-install/archive/v0.7.0.tar.gz
tar -xzvf ruby-install-0.7.0.tar.gz
cd ruby-install-0.7.0/
sudo make install
```

**install ruby**

```shell
ruby-install ruby 2.6.6
```

After this has been installed, we'll need to load chruby automatically, which we can do by adding these lines to your shells configuration file using the following command:

```shell
cat >> ~/.$(basename $SHELL)rc <<EOF
source /usr/local/share/chruby/chruby.sh
source /usr/local/share/chruby/auto.sh
EOF
```

In order for this to take effect, we'll reload the shell

```shell
exec $SHELL
```

**Open new terminal - To default:**

```shell
chruby ruby 2.6.6
ruby -v
```

## Rails

- [x] Ruby
- [ ] Nodejs
- [ ] Yarn<br>
- [ ] sqlit3 or postgreSQL

#### Nodejs

```shell
sudo apt-get install nodejs
```

#### Yarn

**curl first..**

```shell
sudo apt update && sudo apt upgrade
sudo apt install curl
curl --version
```

**Yarn:**

```shell
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt update && sudo apt install yarn
```

#### Install rubyGems:

```shell
sudo apt-get install rubygems
```

[Para mas informacion](https://www.cyberciti.biz/faq/debian-ubuntu-install-gem-the-frontend-to-rubygems/)

> **Nota:**
>
> - Check your ruby version
> - Use flowing command in your project folder if your chruby is routing auto:
> - `echo "ruby-2.6.5" > ~/.ruby-version`

#### Install sqlite3 o postgreSQL

**for sqlite3:**

```shell
sudo apt-get install sqlite3 libsqlite3-dev
gem install sqlite3 -v '1.4.2' --source 'https://rubygems.org/'
```

buscar sqlitebrowser

_To PostgreSQL you need: **gem pg**_

```shell
sudo apt-get install libpq-dev  # postgreSQL gem necessary
```

Continue with post: [PostgreSQL for beginners - Conde](https://condef5.com/articles/install-and-use-postgres/)

#### Install Rails - check ruby

```shell
ruby --version                  # To avoid incorrect installation
gem install rails -v 5.2.4
```
