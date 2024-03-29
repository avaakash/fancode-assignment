const News = require('../controllers/news');

module.exports = function(app) {
    app.route('/news').post(async (req, res, next) => {
        try {
            let result = await News.createNews(req.body);
            if (result.success) {
                return res.status(201).send('News created');
            }
            return res.status(500).send(result.message);
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news').get(async (req, res, next) => {
        try {
            let result = await News.getAllNews();
            if (result.success) {
                return res.status(200).json(result);
            }
            return res.status(500).send(result.message);
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/match').get(async (req, res, next) => {
        try {
            let params = req.query;
            let result = await News.getNewsByMatchId(params);
            return res.status(200).send(result);
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/tour').get(async (req, res, next) => {
        try {
            let params = req.query;
            let result = await News.getNewsByTourId(params);
            return res.status(200).send(result);
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/sport').get(async (req, res, next) => {
        try {
            let params = req.query;
            let result = await News.getNewsBySportId(params);
            return res.status(200).send(result);
        } catch (err) {
            return next(err);
        }
    });
}