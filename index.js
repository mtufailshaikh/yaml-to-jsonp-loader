var yaml = require('js-yaml');
var path = require('path');

module.exports = function (source) {
  var fileresourse = this.resourcePath;
  var fileBaseDir = path.basename(path.dirname(fileresourse)).replace('-','_');
  var fileName = path.parse(fileresourse).base.replace('.yml','').replace('.yaml','');
  
  this.cacheable && this.cacheable();
  try {
    var res = yaml.safeLoad(source);

    var jsonpres = fileBaseDir+'_'+fileName+'('+JSON.stringify(res, undefined, '\t')+')';

    return jsonpres;
  }
  catch (err) {
    this.emitError(err);
    return null;
  }
};
