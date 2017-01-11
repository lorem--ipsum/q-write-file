#!/usr/bin/env node

const Q = require('Q');
const mkdirp = require('mkdirp');

module.exports = function(filePath, content) {
  let deferred = Q.defer();

  mkdirp(path.dirname(filePath), (err) => {
    if (err) return deferred.reject(err);
    fs.writeFile(filePath, content, (e) => e ? deferred.reject(e) : deferred.resolve(filePath));
  });

  return deferred.promise;
};
