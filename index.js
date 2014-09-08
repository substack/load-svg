var xhr = require('xhr');

module.exports = function (opts, cb) {
    if (typeof opts === 'string') opts = { uri: opts };
    
    xhr(opts, function (err, res, body) {
        if (err) return cb(err);
        if (!/^2/.test(res.statusCode)) {
            return cb(new Error('http status code: ' + res.statusCode));
        }
        var div = document.createElement('div');
        div.innerHTML = body;
        var svg = div.querySelector('svg');
        if (!svg) return cb(new Error('svg not present in resource'));
        cb(null, svg);
    });
};
