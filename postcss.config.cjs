/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [require("@pandacss/dev/postcss"), require("postcss-pxtorem")],
};

module.exports = config;
