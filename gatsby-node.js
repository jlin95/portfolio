/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')
const nodeModules = path.join(__dirname, './node_modules')

exports.onCreateWebpackConfig = ({ actions, loaders, plugins, stage }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: ['src', 'node_modules']
    }
  })
}
