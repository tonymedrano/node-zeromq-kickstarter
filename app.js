/*
 * Filename: /Users/tonymedrano/Desktop/node-guru/app.js
 * Path: /Users/tonymedrano/Desktop/node-guru
 * Created Date: Tuesday, January 15th 2019, 11:30:55 am
 * Author: tonymedrano
 * 
 * Copyright (c) 2019 Tony Medrano
 */


'use strict'

const printer = require('./printer/printer')
const message = require('././message')

const p = printer.create("NODE CONSOLE")

const msg = message.create();

msg.on('event', () => {
  p.print('an event occurred!')
});

msg.emit('event');