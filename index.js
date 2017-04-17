#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const Q = require('q');
const mkdirp = require('mkdirp');

console.log(Q.defer());

module.exports = function(filePath, content) {
  let deferred = Q.defer();

  mkdirp(path.dirname(filePath), (err) => {
    if (err) return deferred.reject(err);
    fs.writeFile(filePath, content, (e) => e ? deferred.reject(e) : deferred.resolve(filePath));
  });

  return deferred.promise;
};
