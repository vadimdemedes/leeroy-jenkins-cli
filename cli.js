#!/usr/bin/env node
'use strict';
const meow = require('meow');
const leeroyJenkins = require('.');

const cli = meow(`
	Usage
	  $ leeroy-jenkins

	Examples
	  $ leeroy-jenkins
`);

leeroyJenkins();
