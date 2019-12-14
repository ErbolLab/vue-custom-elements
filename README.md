## Vue Custom Elements
This project shows how to _convert_ and _bundle_ Vue Components into Web Components using [Vue Custom Element](https://github.com/karol-f/vue-custom-element)

## Bundling
[Vue Custom Element](https://github.com/karol-f/vue-custom-element) provides a great way to convert Vue Components into Web Components.  
But in order to use them in _non-Vue_ projects, we have to bundle them first.

So the logic here, that in `main.js` we will register all our components using `Vue.customElement`, but we will _not bootstrap_ the Vue application itself.

To make a bundle we can run the following command:
```
npm run build
```

It will create a `dist/components.js` file that then we can simply _import_ in any non-Vue project like this:

```jsx
import './components.js';

// in template
<your-web-component></your-web-component>
```
