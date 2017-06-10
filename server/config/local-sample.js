'use strict';

import 'source-map-support/register';

module.exports = {
    module: process.env.MODULE || 'client',
    admin: {
        port: process.env.PORT || 8081,
        env: process.env.NODE_ENV || 'dev', // prod, stage, dev
    },
    client: {
        port: process.env.PORT || 8080,
        env: process.env.NODE_ENV || 'dev', // prod, stage, dev
    }
};