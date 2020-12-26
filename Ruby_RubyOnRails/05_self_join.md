## Games

```ruby
class Game < ApplicationRecord
  # optional self join
  has_many :expansions, class_name: 'Game',
                        foreign_key: 'parent_id',
                        dependent: :nullify,
                        inverse_of: :parent
  belongs_to :parent, class_name: 'Game', optional: true
end
```

```ruby
class AddReferencesToGames < ActiveRecord::Migration[6.0]
  def change
    add_reference :games, :parent, null: true, foreign_key: { to_table: :games }
  end
end
```

## StackOverFlow

add column xxx_id in users table:

in migration file:

```shell
add_reference :users, :xxx, index: true
```

and add code in User model

```rb
has_many :users, class_name: 'User', foreign_key: 'xxx_id'
belongs_to :manager, class_name: 'User', foreign_key: 'xxx_id'
```

If you don't have a manager for every user, you need to add optional: true.

'foreign_key' is not necessary. By default this is guessed to be the name of this class in lower-case and “\_id” suffixed.

if foreign_key is user_id, user don't have manager necessary. the result is:

```rb
has_many :users, class_name: 'User'
belongs_to :manager, class_name: 'User', optional: true
```
