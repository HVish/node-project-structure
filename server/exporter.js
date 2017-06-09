'use strict';

import 'source-map-support/register';
import fs from 'fs';
import path from 'path';

module.exports = (exp, dir) => {
    fs.readdirSync(dir).forEach(file => {
        if (file === 'index.js') return;
        exp[path.basename(file, '.js')] = require(path.join(dir, file));
    });
};