module.exports = (app) => {
	app.get('/contact', (req, res) => {
        app.src.controllers.contactController.contact(app, req, res)
    })
}