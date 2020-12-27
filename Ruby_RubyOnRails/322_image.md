[Doc | image_tag](https://api.rubyonrails.org/classes/ActionView/Helpers/AssetTagHelper.html#method-i-image_tag)

```shell
rails active_storage:install
rails db:migrate

#model
has_one_attached :cover #name of column
```

```ruby
<%= image_tag(@object) %>

<%= image_tag(category.cover) if category.cover.attached? %>
```
