# confyg

### Getting Started
1. create a folder called <code>config</code>.
2. place one or more .yaml (name.yaml) files in here.
3. require confyg anywhere in your project and use it like below.

<code>my-project/config/one.yaml</code>
```yaml
first:
    name: 'value'
```

<code>my-project/config/two.yaml</code>
```yaml
second:
    name: 'value'
```

```js
const config = require('confyg')

console.log(config)
/* 
    { 
        second: { name: 'value' }, 
        first: { name: 'value'} 
    } 
*/
```