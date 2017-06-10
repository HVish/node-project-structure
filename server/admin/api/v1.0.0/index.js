'use strict';

import 'source-map-support/register';
import express from 'express';

let router = express.Router();

router.get('/home', (req, res) => {
    res.json({
        success: true,
        version: '1.0.0'
    });
});

module.exports = router;