```shell
rails generate migration AddIndexNameToGame name:uniq
```

```ruby
class AddIndexNameToGame < ActiveRecord::Migration[6.0]
  def change
    # Remove add_column if you have name clomun in your table
    add_index :games, :name, unique: true
  end
end
```

```ruby
class Game < ApplicationRecord
  validates :name, uniqueness: true
end
```

> Other example:

```shell
rails generate migration AddIndexUniquenessUsernameAndEmailToUser email:uniq username:uniq
```

```ruby
class AddIndexUniquenessUsernameAndEmailToUser < ActiveRecord::Migration[6.0]
  def change
    add_index :users, :email, unique: true
    add_index :users, :username, unique: true
  end
end
```

```ruby
class User < ApplicationRecord
  validates :username, :email, presence: true, uniqueness: true
```

> Other more, With two keys:

```shell
rails generate migration AddIndexUniquenessCompanyAndGameToInvolvedCompany
```

```ruby
class AddIndexUniquenessCompanyAndGameToInvolvedCompany < ActiveRecord::Migration[6.0]
  def change
    add_index :involved_companies, [:company_id, :game_id], unique: true
  end
end
```

```ruby
class InvolvedCompany < ApplicationRecord
  validates :company_id, uniqueness: { scope: :game_id }
end
```
