const {
  override,
  fixBabelImports
} = require("customize-cra");

module.exports = override(
  // do stuff with the webpack config...
  config = fixBabelImports("babel-plugin-import", {
    libraryName: "antd-mobile",
    style: "css"
  })
)