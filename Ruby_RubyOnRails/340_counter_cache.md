### To be able to count how many items has a category for example

- First way: if we use (plural_table_name)\_count, in this case: `books_count`

```ruby
class Book < ApplicationRecord
  belongs_to :author, counter_cache: true
end
class Author < ApplicationRecord
  has_many :books
end
```

- Second way: when we use another name for attribute count, in this case: `count_of_books`

```ruby
class Book < ApplicationRecord
  belongs_to :author, counter_cache: :count_of_books
end
class Author < ApplicationRecord
  has_many :books
end
```
