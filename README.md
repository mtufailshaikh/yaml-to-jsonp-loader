# yaml-to-jsonp-loader
YAML loader for webpack (converts YAML to JSONP)

YAML loader for [webpack](http://webpack.github.io/). Converts YAML to a valid JSONP. If you want a JS Object, chain it with [json-loader](https://github.com/webpack/json-loader).

## Installation

`npm install yaml-to-jsonp-loader`

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

Simplest case would be:

``` javascript
var json = require("json-loader!yaml-to-jsonp-loader!./file.yml");
// => returns file.yml as javascript object
```

This loader is also useful for getting a valid JSON from YML. For example:

```js
// webpack.config.js
module: {
  loaders: [
    {
        test: /\.(yml|yaml)$/,
        use: [{
             loader: 'file-loader',
             options: {
               name: '[folder]/[name].json',
               context: 'src'
              }
            },{
              loader: 'yaml-to-jsonp-loader' 
            }]
      },
  ],
}
```
 

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
