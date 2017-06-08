'use strict';

import fs from 'fs';
import path from 'path';
import express from 'express';

let router = express.Router();

const dirs = p => fs.readdirSync(__dirname).filter(f => fs.statSync(__dirname + "/" + f).isDirectory());

dirs().forEach(dir => {
    router.use('/' + dir, require(path.join(__dirname, dir)));
});

module.exports = router;