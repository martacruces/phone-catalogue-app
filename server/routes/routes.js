const phonesRoutes = require('./phones');

const appRouter = (app, fs) => {
    phonesRoutes(app, fs);
};

module.exports = appRouter;