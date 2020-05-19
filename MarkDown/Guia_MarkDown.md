<h1>MARKDOWN BASIC GUIA</h1>

<h2>What is Markdown?</h2>

[Markdown](http://daringfireball.net/projects/markdown/) is a way to style text on the web. You control the display of the document; formatting words as bold or italic, adding images, and creating lists are just a few of the things we can do with Markdown. Mostly, Markdown is just regular text with a few non-alphabetic characters thrown in, like # or *.

You can use Markdown most places around GitHub:

* Gists
* Comments in Issues and Pull Requests
* Files with the .md or .markdown extension
* For more information, see “[Writing on GitHub](https://help.github.com/categories/writing-on-github/)” in the GitHub Help.


## Syntax guide
Here’s an overview of Markdown syntax that you can use anywhere on GitHub.com or in your own text files.

### Headers
> \# Title level 1 - h1<br>
> \## Title level 2 - h2<br>
> \###### Title level 6 - h6<br>
> \<h6>Title level 6 - We can use HTML tags\</h6>

__Result:__
> # Title level 1 - h1
> ## Title level 2 - h2
> ###### Title level 6 - h6
> <h5>Title level 5 - We can use HTML tags</h5>

### Emphasis
> \*This text will be italic*<br>
> \_This will also be italic_<br>
> <br>
> \*\*This text will be bold**<br>
> \_\_This will also be bold__<br>
> <br>
> \_You \*\*can** combine them_

__Result:__
> *This text will be italic*<br>
> _This will also be italic_<br>
> <br>
> **This text will be bold**<br>
> __This will also be bold__<br>
> <br>
> _You **can** combine them_

### Lists
<h4>Unordered</h4>

> _* Item 1_<br>
> _* Item 2_<br>
> _[Spaces] * Item 2a_<br>
> _[Spaces] * Item 2b_

__Result:__
> * Item 1
> * Item 2
>   * Item 2a
>   * Item 2b

#### Ordered
> _1. Item 1_<br>
> _1. Item 2_<br>
> _1. Item 3_<br>
> _[Spaces] 1. Item 3a_<br>
> _[Spaces] 1. Item 3b_

__Result:__
> 1. Item 1
> 1. Item 2
> 1. Item 3
>    1. Item 3a
>    1. Item 3b

### Images
> \<img src="/img/gim.jpg" alt="alt text" width="180" height="100"><br>
> !\[Foto de Gin](/img/gim.jpg)

__Result: *Gim*__
> <img src="/img/gim.jpg" alt="alt text" width="180" height="100">
> 
>![Foto de Gin](/img/gim.jpg)

### Links
> http://github.com - automatic!<br>
> \[GitHub](http://github.com)

__Result__

> [GitHub](http://github.com)

### Blockquotes > Note
As Kanye West said:

_> We're living the future so_<br>
_> the present is our past._

__Result:__
> We're living the future so
> the present is our past.

### Inline code
I think you should use an<br>
\`\<addr>` element here instead.

__Result:__<br>
`<addr>` element here instead.

## GitHub Flavored Markdown
### Syntax highlighting
Here’s an example of how you can use syntax highlighting with GitHub Flavored Markdown:

> \```javascript<br>
> function fancyAlert(arg) {<br>
> _ if(arg) {<br>
> _ _ $.facebox({div:'#foo'})<br>
> _ }<br>
> }<br>
> \```

__Result:__

> ```javascript
> function fancyAlert(arg) {
>   if(arg) {
>     $.facebox({div:'#foo'})
>   }
> }
> ```

You can also simply indent your code _by **four** or **five**_ spaces:
> _ _ _ fancyAlert(arg) {<br>
> _ _ _ _if(arg) {<br>
> _ _ _ _ $.facebox({div:'#foo'})<br>
> _ _ _ _}<br>
> _ _ _ }

__Result:__
>     function fancyAlert(arg) {
>       if(arg) {
>         $.facebox({div:'#foo'})
>       }
>     }

Here’s an example of Python code without syntax highlighting:
> def foo():<br>
>     if not bar:<br>
>         return True<br>

#### For CLI
```sh
Shell:      console, shell
Bash:       bash, sh, zsh
Powershell: powershell, ps
Dos:        dos, bat, cmd
```
> \```shell<br>
> git log --oneline --graph --all   # grapic all branchs<br>
> \```

__Result:__
> ```shell
> git log --oneline --graph --all   # grapic all branchs
> ```
### Task Lists
> \- [x] @mentions, #refs, \[links](), \**formatting**, and \<del>tags\</> del> supported<br>
> \- [ ] this is an incomplete item

__Result:__
- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> > supported
- [ ] this is an incomplete item
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item

If you include a task list in the first comment of an Issue, you will get a handy progress indicator in your issue list. It also works in Pull Requests!

### Tables
You can create tables by assembling a list of words and dividing them with hyphens - (for the first row), and then separating each column with a pipe |:
> :grimacing:<br>
> _firstHeader   \| secoundHeader \| thidHeader \|_<br>
> _--------------- \| --------------------- \| --------------- \|_<br>
> _Content 1... \| content 2.......... \| content 3....\|_<br>
>
> __Result:__
> 
> First Header | Second Header|Third Header |Fourth|
> ------------ | ------------ | ----------- |------|
> Content from cell 1 | Content from cell 2|Content from cell 3|Cell 4
> Content in the first column | Content in the second column
> :wink:
### SHA references
Any reference to a commit’s [SHA-1 hash](http://en.wikipedia.org/wiki/SHA-1)  will be automatically converted into a link to that commit on GitHub.

16c999e8c71134401a78d4d46435517b2271d6ac
mojombo@16c999e8c71134401a78d4d46435517b2271d6ac
mojombo/github-flavored-markdown@16c999e8c71134401a78d4d46435517b2271d6ac

### Issue references within a repository
Any number that refers to an Issue or Pull Request will be automatically converted into a link.

> _#1_<br>
> _mojombo#1_<br>
> _mojombo/github-flavored-markdown#1_

### Username @mentions
Typing an @ symbol, followed by a username, will notify that person to come and view the comment. This is called an “@mention”, because you’re _mentioning_ the individual. You can also @mention teams within an organization.

### Automatic linking for URLs
> Any URL (like http://www.github.com/) will be automatically converted into a clickable link.

### Strikethrough
Any word wrapped with two tildes (like ~~this~~) will appear crossed out.
> Examples: \<del>this too is\</del> or \~~this is other~~<br>
__Result:__<br>
> Examples: <del>this too is</del> or ~~this is other~~ 

### Emoji
GitHub supports [emoji](https://help.github.com/articles/basic-writing-and-formatting-syntax/#using-emoji)!

> To see a list of every image we support, check out the [Emoji Cheat Sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md).

You can add emoji to your writing by typing :EMOJICODE:.

> Example: :_peru_:<br>
__Result:__<br>
> Example: :peru:

> @kenqefh :grinning: :+1:
