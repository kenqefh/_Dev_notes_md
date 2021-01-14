## specify managing a Widget with Rails integration methods

Given a file named "spec/requests/widget_management_spec.rb" with:

```ruby
require "rails_helper"

RSpec.describe "Widget management", :type => :request do

  it "creates a Widget and redirects to the Widget's page" do
    get "/widgets/new"
    expect(response).to render_template(:new)

    post "/widgets", :params => { :widget => {:name => "My Widget"} }

    expect(response).to redirect_to(assigns(:widget))
    follow_redirect!

    expect(response).to render_template(:show)
    expect(response.body).to include("Widget was successfully created.")
  end

  it "does not render a different template" do
    get "/widgets/new"
    expect(response).to_not render_template(:show)
  end
end
```

> When I run rspec spec/requests/widget_management_spec.rb
> Then the example should pass

## requesting a JSON response

Given a file named "spec/requests/widget_management_spec.rb" with:

```ruby
require "rails_helper"

RSpec.describe "Widget management", :type => :request do

  it "creates a Widget" do
    headers = { "ACCEPT" => "application/json" }
    post "/widgets", :params => { :widget => {:name => "My Widget"} }, :headers => headers

    expect(response.content_type).to eq("application/json")
    expect(response).to have_http_status(:created)
  end
end
```

> When I run rspec spec/requests/widget_management_spec.rb
> Then the example should pass

## requesting a JSON response

Given a file named "spec/requests/widget_management_spec.rb" with:

```ruby
require "rails_helper"

RSpec.describe "Widget management", :type => :request do
  it "creates a Widget" do
    headers = { "ACCEPT" => "application/json" }
    post "/widgets", :params => { :widget => {:name => "My Widget"} }, :headers => headers

    expect(response.content_type).to eq("application/json; charset=utf-8")
    expect(response).to have_http_status(:created)
  end
end
```

> When I run rspec spec/requests/widget_management_spec.rb
> Then the example should pass

## providing JSON data

Given a file named "spec/requests/widget_management_spec.rb" with:

```ruby
require "rails_helper"

RSpec.describe "Widget management", :type => :request do

  it "creates a Widget and redirects to the Widget's page" do
    headers = { "CONTENT_TYPE" => "application/json" }
    post "/widgets", :params => '{ "widget": { "name":"My Widget" } }', :headers => headers
    expect(response).to redirect_to(assigns(:widget))
  end
end
```

> When I run rspec spec/requests/widget_management_spec.rb
> Then the example should pass
