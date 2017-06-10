'use strict';

import 'source-map-support/register';
import config from './config';

if (config.local.module == "admin") {
    require('./admin');
} else {
    require('./client');
}