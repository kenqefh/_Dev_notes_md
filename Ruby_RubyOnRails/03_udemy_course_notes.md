#creando el blog
```shell
rails new blog
bundle install

|--> sudo apt-get install libsqlite3-dev # I did not have sqlite3
```
#iniciar el servidor
```shell
rails server
```

## agregar la gema rspec en Gemfile
```ruby
group :test do
  gem 'rspec-rails'
```
### actualizar gemas..  
```shell
bundle install
```
## crear carpetas y archivos necesarios para configurar y realizar los test..
rails g rspec:install

# conceptos previos:
> * MVC
> * Testing
> * BD
> 
> Articles | Images | Admin
> -- | -- | -- |
> name | image | name |
> content | article_id | email |
> main_image | | password |
> 
> * CRUD
> 
> CRUD | Acciones del controlador | Tipo de ruta |
> -- | --| -- |
> Create | new, create | get, post|
> Read | show | get |
> Update | edit, update | get, patch |
> Destroy | destroy | delete |
> 
---------------------

bundle exec rspec

