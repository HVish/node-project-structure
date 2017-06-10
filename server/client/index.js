'use strict';

import 'source-map-support/register';
import express from 'express';
import config from '../config';
import api from './api';

const app = express();

app.get('/', (req, res) => {
    res.json({
        api: "client"
    });
});

app.use('/api', api);

app.listen(config.local.client.port, error => {
    if (error) {
        console.error(error);
    } else {
        console.log('Server started:');
        console.log(`URL: http://localhost:${config.local.client.port}`);
        console.log(`Environment: ${config.local.client.env}`);
    }
});