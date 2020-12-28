> To update critics count using callbacks.

```ruby
class Critic < ApplicationRecord
  after_create :critics_count_plus_one
  after_destroy :critics_count_less_one

  private

  def critics_count_plus_one
    update_critics_count(1)
  end

  def critics_count_less_one
    update_critics_count(-1)
  end

  def update_critics_count(num)
    user.critics_count += num
  end
end
```
