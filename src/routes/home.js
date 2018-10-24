module.exports = (app) => {
	app.get('/', (req, res) => {
        app.src.controllers.homeController.home(app, req, res)
    })
    
    app.get('/home', (req, res) => {
        app.src.controllers.homeController.home(app, req, res)
	})
}