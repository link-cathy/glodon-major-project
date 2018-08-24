let glob = require('glob');
let path = require('path');
let _ = require('lodash')

exports.pickFiles = function(options) {
    let files = glob.sync(options.pattern);
    return files.reduce(function(data, filename) {
        let matched = filename.match(options.id);
        let name = matched[1];
        data[name] = path.resolve(__dirname, filename);
        return data;
    }, {});
};

exports.fullPath = function(dir) {
    return path.resolve(__dirname, dir);
};

exports.getIP = function() {
    let os = require('os');
    let IPv4 = '127.0.0.1';
    let interfaces = os.networkInterfaces();
    _.forEach(interfaces, function(interfaceInfo) {
        _.forEach(interfaceInfo, function(details) {
            if (details.family === 'IPv4' && !details.internal) {
                IPv4 = details.address;
            }
        })
    })
    return IPv4;
}
