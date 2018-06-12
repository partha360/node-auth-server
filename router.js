const Authentication = require('./controllers/authentication')
const passportService = require('./services/passport') // eslint-disable-line no-unused-vars
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', { session: false })
const requireSignin = passport.authenticate('local', { session: false })

module.exports = function(app) {
  app.get('/', requireAuth, function(req, res) {
    res.send({ message: 'Here is your secret code....husshh its secured' })
  })
  app.post('/signin', requireSignin, Authentication.signin)
  app.post('/signup', Authentication.signup)
}
