/*
 * Filename: /Users/tonymedrano/Desktop/node-zeromq-kickstarter/compute.js
 * Path: /Users/tonymedrano/Desktop/node-zeromq-kickstarter
 * Created Date: Wednesday, January 16th 2019, 3:55:44 pm
 * Author: tonymedrano
 * 
 * Copyright (c) 2019 Tony Medrano
 */

const EventEmitter = require('events')

class Message extends EventEmitter {
    constructor() {
        super()
    }
    static create() {
        return new Message()
    }

}

module.exports = Message