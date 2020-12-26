## The holy _[help](https://condef5.com/articles/install-and-use-postgres/)_

### Install ubuntu

```shell
sudo apt-get update
sudo apt install postgresql postgresql-contrib
```

_For know user:_

```shell
whoami
```

_user and db need to have same name:_

```shell
sudo -u postgres psql
postgres=# create user my_user with encrypted password 'my_pass';
postgres=# create database my_user;
postgres=# grant all privileges on database my_user to my_user;
postgres=# alter user my_user with superuser;
```

_If we use a user add credentiales in_ `config/database.yml`

```yml
host: localhost
username: admin
password: admin
```

**Some commands:**

```shell
rails db:create
rails db:drop
```
