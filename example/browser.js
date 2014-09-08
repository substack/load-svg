var loadsvg = require('../');

loadsvg('wizard_hat.svg', function (err, svg) {
    document.body.appendChild(svg);
});
