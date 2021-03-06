module.exports = {
  plugins: [
    require("babel-plugin-transform-es2015-template-literals", {loose: true}),
    require("babel-plugin-transform-es2015-literals"),
    require("babel-plugin-transform-es2015-function-name"),
    require("babel-plugin-transform-es2015-arrow-functions"),
    require("babel-plugin-transform-es2015-block-scoped-functions"),
    require("babel-plugin-transform-es2015-classes", {loose: true}),
    require("babel-plugin-transform-es2015-object-super"),
    require("babel-plugin-transform-es2015-shorthand-properties"),
    require("babel-plugin-transform-es2015-computed-properties", {loose: true}),
    require("babel-plugin-transform-es2015-for-of", {loose: true}),
    require("babel-plugin-transform-es2015-sticky-regex"),
    require("babel-plugin-transform-es2015-unicode-regex"),
    require("babel-plugin-transform-es2015-constants"),
    require("babel-plugin-transform-es2015-spread", {loose: true}),
    require("babel-plugin-transform-es2015-parameters"),
    require("babel-plugin-transform-es2015-destructuring", {loose: true}),
    require("babel-plugin-transform-es2015-block-scoping"),
    require("babel-plugin-transform-es2015-typeof-symbol"),
    require("babel-plugin-transform-es2015-modules-commonjs", {loose: true}),
    [require("babel-plugin-transform-regenerator"), {async: true, asyncGenerators: true}]
  ]
};
