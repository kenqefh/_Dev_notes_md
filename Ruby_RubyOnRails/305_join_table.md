## Join table - has and belongs to many..

```ruby
rails generate migration CreateJoinTableGamePlatform game platform
# other way, no recommended
rails generate migration CreateTechnologiesTracks technology:references track:references
```

```ruby
class CreateJoinTableGamePlatform < ActiveRecord::Migration[6.0]
  def change
    create_join_table :games, :platforms do |t|
      # t.index [:game_id, :platform_id]
      # t.index [:platform_id, :game_id]
    end
  end
end
```

```ruby
class Game < ApplicationRecord
  has_and_belongs_to_many :platforms
end
```

```ruby
class Platform < ApplicationRecord
  has_and_belongs_to_many :games
end

```
