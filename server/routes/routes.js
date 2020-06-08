const phonesRoutes = require('./phones');

const appRouter = (app, fs) => {
    app.get('/', (req, res) => {
        res.send('Welcome')
    });
    phonesRoutes(app, fs);
};

module.exports = appRouter;