const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe1',

  exposes: {
    // './Component': './projects/mfe1/src/app/app.component.ts',
    './Module': './projects/mfe1/src/app/flights/flights.module.ts',
  },
  remotes: {
    app4: 'http://localhost:4205/remoteEntry.js',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
