/*
 * Filename: /Users/tonymedrano/Desktop/node-zeromq-kickstarter/lib/parse-rdf.js
 * Path: /Users/tonymedrano/Desktop/node-zeromq-kickstarter
 * Created Date: Tuesday, January 22nd 2019, 9:53:14 am
 * Author: tonymedrano
 * 
 * Copyright (c) 2019 Tony Medrano
 */

'use strict';

const cheerio = require('cheerio');

module.exports = rdf => {
 const $ = cheerio.load(rdf);

  const book = {};

  book.id = +$('pgterms\\:ebook').attr('rdf:about').replace('ebooks/', '');

  book.title = $('dcterms\\:title').text();

  book.authors = $('pgterms\\:agent pgterms\\:name')
    .toArray().map(elem => $(elem).text());

  book.subjects = $('[rdf\\:resource$="/LCSH"]')
    .parent().find('rdf\\:value')
    .toArray().map(elem => $(elem).text());

  return book;
};
