## Generation:

```shell
rails generate migration AddCriticableToCritics criticable:references{polymorphic}

# migrate
rails db:migrate
```

### migration

```ruby
class AddCriticableToCritics < ActiveRecord::Migration[6.0]
  def change
    add_reference :critics, :criticable, polymorphic: true, null: false
  end
end
```

### models

```ruby
class Critic < ApplicationRecord
  belongs_to :user

  belongs_to :criticable, polymorphic: true
end
```

```ruby
class Game < ApplicationRecord
  has_many :critics, as: :criticable, dependent: :destroy
end
```

```ruby
class Company < ApplicationRecord
  has_many :critics, as: :criticable, dependent: :destroy
end
```
