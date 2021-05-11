const path = require("path");

const { override, addWebpackAlias, addBundleVisualizer, addDecoratorsLegacy } = require("customize-cra");

module.exports = override(
  // enable legacy decorators babel plugin
  addDecoratorsLegacy(),

  // add webpack bundle visualizer if BUNDLE_VISUALIZE flag is enabled
  process.env.BUNDLE_VISUALIZE == 1 && addBundleVisualizer(),

  // add an alias for "ag-grid-react" imports
  addWebpackAlias({
    '@': path.resolve(__dirname, "src")
  }),

  // adjust the underlying workbox
  // adjustWorkbox(wb =>
  //   Object.assign(wb, {
  //     skipWaiting: true,
  //     exclude: (wb.exclude || []).concat("index.html")
  //   })
  // )
);
