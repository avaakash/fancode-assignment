const mysql = require('../lib/mysql');
const sport = require('./sport');

const getAllNews = async () => {
    const statement = 'select * from news;';
    return await mysql.query(statement);
}

const getNewsByMatchId = async params => {
    const statement = 'select * from news where matchId = ?;';
    const parameters = [params.id];
    return await mysql.query(statement, parameters);
}

const getNewsByTourId = async params => {
    const statement = 'select * from news where tourId = ?;';
    const parameters = [params.id];
    return await mysql.query(statement, parameters);
}

const getNewsBySportId = async params => {
    const statement = 'SELECT n.id, n.title, n.description, n.matchId, n.tourId, n.createdAt, n.recUpdatedAt FROM news n JOIN tours t ON n.tourId = t.id JOIN sports s ON t.sportId = s.id WHERE s.id = ?;'
    const parameters = [params.id];
    return await mysql.query(statement, parameters);
}

const createNewsForMatch = async params => {
    const { matchId, title, description } = params;
    const match = await mysql.query('select * from matches where id = ?;', [matchId]);
    const statement = 'insert into news (matchId, tourId, title, description) values (?, ?, ?, ?);';
    const parameters = [match[0].id, match[0].tourId, title, description];
    return await mysql.query(statement, parameters);
}

const createNewsForTour = async params => {
    const {tourId, title, description } = params;
    const statement = 'insert into news (tourId, title, description) values (?, ?, ?);';
    const parameters = [tourId, title, description];
    return await mysql.query(statement, parameters);
}

module.exports = {
    getAllNews: getAllNews,
    getNewsByMatchId: getNewsByMatchId,
    getNewsByTourId: getNewsByTourId,
    getNewsBySportId: getNewsBySportId,
    createNewsForMatch: createNewsForMatch,
    createNewsForTour: createNewsForTour,
}