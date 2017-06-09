'use strict';

import 'source-map-support/register';

module.exports = {
    port: process.env.port || 8080,
    env: process.env.NODE_ENV || 'dev', // prod, stage, dev
};