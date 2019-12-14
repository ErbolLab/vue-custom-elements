## Vue Custom Elements
This project shows how to _convert_ and _bundle_ Vue Components into Web Components using [Vue Custom Element](https://github.com/karol-f/vue-custom-element)

### Bundling
[Vue Custom Element](https://github.com/karol-f/vue-custom-element) provides a great way to convert Vue Components into Web Components.  
But in order to use them in _non-Vue_ projects, we have to bundle them first.

So the logic here, that we will register all our components, but "_without bootstrapping_" the Vue application itself.
It will bring us a bundle that contains all registered components including Vue library.

To make a bundle we can run the following command:
```
npm run build
```

It will create a `dist/components.js` file which we can then import in any non-Vue project like this:

```jsx
import './components.js';

// in template
<your-web-component></your-web-component>
```

### Include additional components
In order to include additional components into the bundle, we just need to register them in `main.js` like:

```js
import VueCustomElement from 'vue-custom-element'

// regiser new component
Vue.customElement('new-component', NewComponent)
```
