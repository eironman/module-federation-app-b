const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "federated-modules-app-b"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app_b",
      filename: "remoteEntry.js",
      exposes: {
        './Module': './src/app/federated/federated.module.ts',
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: true },
        "@angular/common": { singleton: true, strictVersion: true },
        "@angular/common/http": { singleton: false, strictVersion: true },
        "@angular/router": { singleton: true, strictVersion: true },
        "@ngx-translate/core": { singleton: true, strictVersion: true },

        ...sharedMappings.getDescriptors()
      }
    }),
    sharedMappings.getPlugin(),
  ],
};
