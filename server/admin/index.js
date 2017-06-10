'use strict';

import 'source-map-support/register';
import express from 'express';
import config from '../config';
import api from './api';

const app = express();

app.get('/', (req, res) => {
    res.json({
        api: "admin"
    });
});

app.use('/api', api);

app.listen(config.local.admin.port, error => {
    if (error) {
        console.error(error);
    } else {
        console.log('Server started:');
        console.log(`URL: http://localhost:${config.local.admin.port}`);
        console.log(`Environment: ${config.local.admin.env}`);
    }
});