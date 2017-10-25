const pkg = require(`../package.json`)
const {bundle} = require(`germs/germs`)

module.exports = bundle({
  name: pkg.name,
  alias: {
  },
  input: `src/index.js`,
  output: {
    name: `FUTILITY`,
    file: `./${pkg.name}.browser.js`,
    format: `iife`
  }
})