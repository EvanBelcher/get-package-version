# Get Package Version

Checks if package is installed and if yes - returns package version.

## How to use

```
const checkPackages = require('get-installed-package-version')

const versions = checkPackage('nuxt fs');

console.log(vesions)

// {nuxt: '2.3.4', fs: null}
// 'fs' has no 'package.json'

const versions2 = checkPackage(['vue-loader', 'randomModuleIJustInvented'])

console.log(vesions2)
// {vue-loader: '15.4.2', randomModuleIJustInvented: null}

```

