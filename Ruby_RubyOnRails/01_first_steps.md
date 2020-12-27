# Go to:

**`install / homebrew, nvm,chruby`**

## Rails

- [x] Ruby
- [x] Nodejs
- [ ] Yarn - [instalation guia (remenber we have nvm)](link)<br>
- [ ] sqlit3 or postgreSQL

### yarn

```shell
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```

```shell
sudo apt update && sudo apt install --no-install-recommends yarn
```

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

> create a user with your username

```shell
sudo -i -u postgres
createuser --interactive
```

#### Install Rails - check ruby

```shell
ruby --version                  # To avoid incorrect installation
gem install rails -v 5.2.4
```
