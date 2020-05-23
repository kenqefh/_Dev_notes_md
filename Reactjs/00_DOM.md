# DOM
> "Document Object Model o DOM es esencialmente una interfaz de plataforma que proporciona un conjunto estándar de objetos para representar documentos HTML, XHTML y XML, ​ un modelo estándar sobre cómo pueden combinarse dichos objetos, y una interfaz estándar para acceder a ellos y manipularlos"

## some methods
varName.innerHTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document DOM</title>
</head>
<body>
    <h1>Document Model Object</h1>
    <div id="subtitle"></div>
    <p>1. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, blanditiis a consectetur perferendis nam nulla tempora deleniti culpa saepe adipisci. Reiciendis nisi aut cumque assumenda harum! Minus dolores qui veniam!</p>
    <p id="second">2. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, adipisci. Vel facere natus ex blanditiis magni eum inventore doloremque minima minus. Natus dolores mollitia nemo repudiandae quia? Vero, itaque consequuntur.</p>
    <p>3. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, blanditiis a consectetur perferendis nam nulla tempora deleniti culpa saepe adipisci. Reiciendis nisi aut cumque assumenda harum! Minus dolores qui veniam!</p>

    <script>
    	// Our script..
    </script>
</body>
</html>
```

## Looking for elements
```js
	var elementsP = document.getElementsByTagName('p');
	secondParagraph = document.getElementById('second');
```

## Create DOM nodes
1. Create element
```js
        var element = document.createElement('h2');
```
2. Create a text node
```js
        var content = document.createTextNode("This is our Headline");
```
3. Add the text node to element
```js
        element.appendChild(content);
```
4. Add attributes to element
```js
        element.setAttribute('align','center');
```
5. Add the element to document
```js
        document.getElementById('subtitle').appendChild(element);
```




