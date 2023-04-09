const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    // "mfe1": "http://localhost:4200/remoteEntry.js",
    mfe1: 'http://localhost:4201/remoteEntry.js',
    app4: 'http://localhost:4205/remoteEntry.js',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
