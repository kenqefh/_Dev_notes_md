If you want to configure git to use `main` as defaut\*

```shell
git config --global init.defaultBranch main
```

---

- The --skip means to skip files already exist (The opposite is --force)

```shell
rails g scaffold User --migration=false --skip
```

- Creates a new Rails applications in subdirectory foo.

```shell
rails new foo
```

- Starts up a Web server on `port 3000` running the current application; log messages from the server will appear on standard output.

```shell
rails server
```

- Starts up a Rails application in interactive mode (you can type commands on the console); doesn't actually start a Web server. This command is convenient if you want to type commands interactively to test their behavior.

```shell
rails console
```

- Creates a new controller class FooController with a skeleton class definition in app/controllers/foo_controller.rb. It also creates skeleton action methods a and b in the controller, plus skeleton views in the files app/views/foo/a.html.erb and app/views/foo/a.html.erb. If a and b are omitted then the controller is created with no actions or views.

```shell
rails generate controller foo a b
```

- Creates a new model class Foo with a skeleton class definition in app/models/foo.rb and a skeletal migration in db/migrate/\*\_create_foos.rb.

```shell
rails generate model foo
```

- Creates a new migration in the file db/migrate/\*\_foo.rb.

```shell
rails generate migration foo
```

- Deletes all of the files created by the rails generate model foo command above. The command has similar forms to match all of the other rails generate commands. This command is useful if you mistype a rails generate command.

```shell
rails destroy model foo
```

- Runs all migrations to bring the database up to date.

```shell
rake db:migrate
```

- Drops the database and creates a new one (does not run any migrations on the new database).

```shell
rake db:reset
```

- Drops the database, creates a new one, and runs all migrations to bring the database up to date.

```shell
rake db:migrate:reset
```

- Runs migrations (either forward or backward) to restore the database to match the state just after the given migration.

```shell
rake db:migrate VERSION=20090909201633_create_photos.rb
```

- If you modify the Gemfile in a project in order to include new or different Ruby Gems, this command will update all of your Gems to match the Gemfile.

```shell
bundle update

# Updates all Ruby Gems to their latest versions.
gem update

# Updates Rails to the latest version, including all Gems that Rails depends upon.
gem update rails--include-dependencies

# Updates Ruby to the latest version. This command does not always appear to work on Macintoshes.
gem update --system
```
