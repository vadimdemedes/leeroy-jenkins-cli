'use strict';
const {join} = require('path');
const execa = require('execa');

module.exports = () => execa('afplay', [join(__dirname, 'leeroy.wav')]);
