'use strict';

import express from 'express';
import config from './config';
import api from './api';

const app = express();

app.get('/', (req, res) => {
    throw new Error("dummy error");
    res.send("<h1>Hello World</h1>");
});

app.use('/api', api);

app.listen(config.local.port, error => {
    if (error) {
        console.error(error);
    } else {
        console.log('Server started:');
        console.log(`URL: http://localhost:${config.local.port}`);
        console.log(`Environment: ${config.local.env}`);
    }
});