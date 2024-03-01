const Match = require('../controllers/match');

module.exports = function(app) {
    app.route('/matches').get(async (req, res, next) => {
        try {
            const result = await Match.getAllMatches();
            if (result.success) {
                return res.json(result.data);
            }
            return res.status(500).send(result.message);
        } catch (err) {
            return next(err);
        }
    });
}