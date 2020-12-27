# Validator

```rb
  # add this to Gemfile
  gem 'email_validator'

  # update gems with: bundle install
  # Now this is avalible
  validates :my_email_attribute, email: true
```

> trick for years

```ruby
  birth_date <= 18.years.ago
```

#### Some insteresting validations:

```rb
class User < ActiveRecord::Base
  validates :name, presence: true
  validates :terms_of_service, acceptance: true

  # When your model has associations with other models and they also need to be validate
  has_many :books
  validates_associated :books

  validates :email, confirmation: true
  validates :email, confirmation: { case_sensitive: false }
  validates :subdomain, exclusion: { in: %w(www us ca jp),
                        message: "%{value} is reserved." }
  validates :legacy_code, format: { with: /\A[a-zA-Z]+\z/,
    message: "only allows letters" }
  validates :size, inclusion: { in: %w(small medium large),
    message: "%{value} is not a valid size" }

  validates :name, length: { minimum: 2 }
  validates :bio, length: { maximum: 500 }
  validates :password, length: { in: 6..20 }
  validates :registration_number, length: { is: 6 }
  validates :bio, length: { maximum: 1000,
    too_long: "%{count} characters is the maximum allowed" }

  validates :points, numericality: true
  validates :games_played, numericality: { only_integer: true }

  validates :name, :login, :email, presence: true

  has_one :account
  validates :account, presence: true

  validates :name,  uniqueness: { scope: :year,
                    message: "should happen once per year" }
end
```

#### Validate with custom validation

```ruby
class GoodnessValidator < ActiveModel::Validator
  def validate(record)
    if record.first_name == "Evil"
      record.errors.add :base, "This person is evil"
    end
  end
end

class Person < ApplicationRecord
  validates_with GoodnessValidator
end
```

### :on

> To define when you want to apply one validation

```ruby
class Person < ApplicationRecord
  # it will be possible to update email with a duplicated value
  validates :email, uniqueness: true, on: :create

  # it will be possible to create the record with a non-numerical age
  validates :age, numericality: true, on: :update

  # the default (validates on both create and update)
  validates :name, presence: true
end
```

```shell
irb> person = Person.new
irb> person.valid?
=> false
irb> person.errors.full_messages
# errors.messages other option..
=> ["Name can't be blank", "Name is too short (minimum is 3 characters)"]

irb> person = Person.new(name: "John Doe")
irb> person.valid?
=> true
irb> person.errors.full_messages
=> []
```

```erb
<% if @article.errors.any? %>
  <div id="error_explanation">
    <h2><%= pluralize(@article.errors.count, "error") %> prohibited this article from being saved:</h2>

    <ul>
      <% @article.errors.each do |error| %>
        <li><%= error.full_message %></li>
      <% end %>
    </ul>
  </div>
<% end %>
```

[active_record_validations#displaying-validation-errors-in-views](https://guides.rubyonrails.org/active_record_validations.html#displaying-validation-errors-in-views)
