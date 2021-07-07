'use strict';

const winston = require('winston');
const logger = new winston.Logger({
  level: 'debug',
  transports: [
    new winston.transports.File({
      filename: 'electronian-debug.log',
      json: false,
      prettyPrint: true,
      maxFiles: 3,
      maxsize: 1024 * 1024,
      showLevel: false
    }),
    new winston.transports.Console({
      timestamp: true,
      prettyPrint: true,
      showLevel: false
    })
  ]
});

module.exports = logger;

/// Logging Levels ///
// emerg:   0
// alert:   1
// crit:    2
// error:   3
// warning: 4
// notice:  5
// info:    6
// debug:   7
