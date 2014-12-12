express = require 'express'
http = require 'http'
path = require 'path'

app = express()

app.set 'env', process.env.NODE_ENV

app.use express.static('.')

# Sequelize = require 'sequelize'
# sequelize = new Sequelize app.get('db.database'),
#                           app.get('db.user'),
#                           app.get('db.password'),
#                           dialect: 'postgres',
#                           port: 5432,
#                           logging: false

#sequelize.authenticate().complete (err) -> throw err if err


unless process.env.NODE_CLI
  port = process.env.PORT || 3000
  app.set 'port', port
  app.locals.server = http.createServer(app).listen port, ->
    console.log "Listening on port #{port} in #{app.get('env')} mode"

module.exports = app
