const Match = require('../models/match');

const getAllMatches = async () => {
    result = await Match.getAllMatches();
    return {"success": true, "message": "Matches fetched successfully", "data": result};
}

module.exports = {
    getAllMatches: getAllMatches
}