function getPackageVersion(args) {
    const packageNames = typeof args === 'string'
        ? args.split(' ')
        : Array.isArray(args)
            ? args
            : false;
    
    if (!packageNames) {
        throw new Error('No valid package names provided. Only string or array!');
    }

    const result = {};

    packageNames.forEach(name => {        	
        try {
            result[name] = require(`${name}/package.json`).version;
        } catch (e) {
            result[name] = null;
        }
    });

    return result;
}

module.exports = getPackageVersion;