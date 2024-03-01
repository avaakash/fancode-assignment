const Sport = require('../controllers/sport');

module.exports = function(app) {
    app.route('/sport/tour/match').get(async (req, res, next) => {
        try {
            const result = await Sport.getAllSportsToursAndMatches();
            if (result.success) {
                return res.json(result.data);
            }
            return res.status(500).send(result.message);
        } catch (err) {
            return next(err);
        }
    });
}