var helperController = require('./controllers/helper.controller.js'),
    liveData = require('./controllers/getdata.controller.js');
// var geoController = require('./controllers/geographic_controller');

module.exports = function (app) {
    // set up the routes themselves

    //helper route
    app.get("/api", helperController.showAPIdocs);

    //getRoutes live data
    app.get("/api/liveData/feed", liveData.feed);
    // app.get("/api/neighborhood/polygons", neighborhoodController.neighborhoodPolygons);
    // app.get("/api/neighborhood/trees", neighborhoodController.neighborhoodTreeCluster);

    //postRoutes

};