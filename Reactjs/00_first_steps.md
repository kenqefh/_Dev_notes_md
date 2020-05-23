# React
_Una biblioteca de JavaScript para construir interfaces de usuario_
```js
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Lista de compras para {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

// Uso de ejemplo: <ShoppingList name="Mark" />
```
**porps**

### Inmutabilidad de objetos
```js
shouldComponentUpdate() 
```
`Object.assign` está en ES6 y requiere un polyfill.

```js
// Incorecto
handleClick() {
    // This section is bad style and causes a bug
    const words = this.state.words;
    words.push('marklar');
    this.setState({words: words});
}

// correcta forma:
handleClick() {
  this.setState(state => ({
    words: state.words.concat(['marklar'])
  }));
}
// ES6 soporta operador de propagación para matrices, lo cual puede hacer esto mas fácil. Si estas usando Create React App, esta sintaxis está disponible por defecto.

handleClick() {
  this.setState(state => ({
    words: [...state.words, 'marklar'],
  }));
};

```
Cambiar un atributo..
```js
//Se muta el objeto.. lo cual no debe realizarse
function updateColorMap(colormap) {
  colormap.right = 'blue';
}

//Formas de actualizar sin mutar el objeto..
function updateColorMap(colormap) {
  return Object.assign({}, colormap, {right: 'blue'});
}

function updateColorMap(colormap) {
  return {...colormap, right: 'blue'};
}
```

__Para mutar objetos anidados ver:__ [immutability-helper](https://github.com/kolodny/immutability-helper) o [immer](https://github.com/immerjs/immer)

### Componentes de función
### Escogiendo una key
Se recomienda fuertemente que uses keys apropiado cuando construyas listas dinámicas. Si no tienes un key apropiado, quizás quieras considerar reestructurar tus datos para que puedas tenerla.