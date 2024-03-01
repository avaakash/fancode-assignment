const Tour = require('../models/tour');

const getAllTours = async () => {
    return await Tour.getAllTours();
}

const getMatchesByTourName = async params => {
    const { name } = params;

    if (!name) {
        return {"success": false, "message": 'Missing required parameter: name', "data": []};
    }

    result = await Tour.getMatchesByTourName(params);
    return {"success": true, "message": "Tours fetched successfully", "data": result};
}

module.exports = {
    getAllTours: getAllTours,
    getMatchesByTourName: getMatchesByTourName
}