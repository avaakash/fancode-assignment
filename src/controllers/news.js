const News = require('../models/news');

const getAllNews = async () => {
    const result = await News.getAllNews();
    return {"success": true, "message": "News fetched successfully", "data": result};
}

const getNewsByMatchId = async params => {
    const { id } = params;

    if (!id) {
        return {"success": false, "message": 'Missing required parameter: id', "data": []};
    }

    result = await News.getNewsByMatchId(params);
    return {"success": true, "message": "News fetched successfully", "data": result};
}

const getNewsByTourId = async params => {
    const { id } = params;

    if (!id) {
        return {"success": false, "message": 'Missing required parameter: id', "data": []};
    }

    result = await News.getNewsByTourId(params);
    return {"success": true, "message": "News fetched successfully", "data": result};
}

const getNewsBySportId = async params => {
    const { id } = params;

    if (!id) {
        return {"success": false, "message": 'Missing required parameter: id', "data": []};
    }

    result = await News.getNewsBySportId(params);
    return {"success": true, "message": "News fetched successfully", "data": result};
}

const createNews = async params => {
    const { matchId, tourId, title, description } = params;

    if (!matchId && !tourId) {
        return {"success": false, "message": 'Missing required parameter: Provide either matchId or tourId'};
    }

    if (matchId && tourId) {
        return {"success": false, "message": 'Error in parameters: Provide either matchId or tourId, not both'};
    }

    if (!title) {
        return {"success": false, "message": 'Missing required parameter: title'};
    }

    if (!description) {
        return {"success": false, "message": 'Missing required parameter: content'};
    }

    if (matchId) {
        result = await News.createNewsForMatch(params);
        if (result.affectedRows === 0) {
            return {"success": false, "message": "Failed to create news"};
        }
    } else {
        result = await News.createNewsForTour(params);
        if (result.affectedRows === 0) {
            return {"success": false, "message": "Failed to create news"};
        }
    }
    return {"success": true, "message": "News created successfully"};
}

module.exports = {
    getAllNews: getAllNews,
    getNewsByMatchId: getNewsByMatchId,
    getNewsByTourId: getNewsByTourId,
    getNewsBySportId: getNewsBySportId,
    createNews: createNews
}