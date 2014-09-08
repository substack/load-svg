# load-svg

load an svg element over xhr

# example

``` js
var loadsvg = require('load-svg');

loadsvg('wizard_hat.svg', function (err, svg) {
    document.body.appendChild(svg);
});
```

# methods

``` js
var loadsvg = require('load-svg')
```

## loadsvg(opts, cb)

Load an svg asynchronously over xhr and construct the svg dom element.
`cb(err, svg)` fires with the svg dom element.

`opts` can be a string uri or an option argument that is passed through to the
[xhr](https://npmjs.org/package/xhr) module.

# install

With [npm](https://npmjs.org) do:

```
npm install load-svg
```

# license

MIT
