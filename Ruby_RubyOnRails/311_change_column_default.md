## migration

```shell
rails generate migration AddDefaultValueToCriticsCountFromUsers
```

```ruby
class AddDefaultValueToCriticsCountFromUsers < ActiveRecord::Migration[6.0]
  def change
    change_column_default :users, :critics_count, from: nil, to: 0
  end
end
```

```ruby
# Another way
class AddDefaultValueToCriticsCountFromUsers < ActiveRecord::Migration[6.0]
  def up
    change_column_default :users, :critics_count, 0
  end

  def down
    change_column_default :users, :critics_count, nil
  end
end
```

### Then, run migration

```shell
rails db:migrate
```
