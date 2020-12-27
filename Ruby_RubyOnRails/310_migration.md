## Migration:

```shell
rails g migration ChangeColumnNameFromUsers

rails g migration CreateJoinTableTechnologyTrack technology track

rails g migration CreateTechnologiesTracks technology:references track:references

rails g migration AddColumnsTitleAndUserIdToCritics title user:references

rails g migration ChangeColumnBodyFromStringToTextOnCritics

rails g migration AddIndexUserNameAndEmailOnUsers
```

# RB

### Migration / query

```rb
class ChangeColumnNameFromTableName < ActiveRecord::Migration[6.0]
  def change
    rename_column :table_name, :old_column1, :new_column1
  end
end

class AddColumnsTitleAndUserIdToCritics < ActiveRecord::Migration[6.0]
  def change
    add_column :critics, :title, :string
    add_reference :critics, :user, null: false, foreign_key: true
  end
end

class ChangeColumnBodyFromStringToTextOnCritics < ActiveRecord::Migration[6.0]
  def up
    change_column :critics, :body, :text
  end

  def down
    change_column :critics, :body, :string
  end
end

class AddIndexToModerators < ActiveRecord::Migration
  def change
    add_column :moderators, :username, :string
    add_index :moderators, :username, unique: true
  end
end
```
