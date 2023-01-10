const authController = require("../controllers/auth.controller")

module.exports = function (app) {
    app.get("/", (req, res) => res.send("hii"))
    app.post('/crm/api/auth/signup', authController.signup)
    app.post('/crm/api/auth/signin', authController.signin)
}