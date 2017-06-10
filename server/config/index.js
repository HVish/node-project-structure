'use strict';

import 'source-map-support/register';
import fs from 'fs';
import path from 'path';

fs.readdirSync(__dirname).forEach(file => {
    if (file === 'index.js' || file === 'local-sample.js') return;
    module.exports[path.basename(file, '.js')] = require(path.join(__dirname, file));
});