'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"/api/srm"',
  // BASE_API: '""',
  UPLOADS_URL:'"http://192.168.1.168:8099/uploads/ufa"',
  EDITOE_URL:'"/srm/admin/static/UEditor/"'
})
