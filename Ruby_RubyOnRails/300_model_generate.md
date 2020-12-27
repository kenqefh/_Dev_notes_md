## Models

```shell
rails generate model Comment commenter:string body:text article:references

rails generate model Game name genre price:integer release_date:date

rails generate model Critic body games:references

rails generate model User username email birth_date:date first_name last_name
```
