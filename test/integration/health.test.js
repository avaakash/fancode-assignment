const request = require('supertest');
const { app } = require('../../index');
const { expect } = require('chai');

describe('Integration Tests', () => {
  let server;

  beforeAll((done) => {
    server = app.listen(done);
  });

  afterAll((done) => {
    server.close(done);
  });

  it('should return a 200 OK status code for GET request to /health', async () => {
    const response = await request(server).get('/health');
    expect(response.status).equal(200);
  });

  it('should return a 200 OK status code for GET request to /news', async () => {
    const response = await request(server).get('/news');
    expect(response.status).equal(200);
  });

  it('should return a 200 OK status code for GET request to /news/match', async () => {
    const response = await request(server).get('/news/match?matchId=1');
    expect(response.status).equal(200);
  });

  it('should return a 200 OK status code for GET request to /news/tour', async () => {
    const response = await request(server).get('/news/tour?tourId=1');
    expect(response.status).equal(200);
  });

  it('should return a 200 OK status code for GET request to /news/sport', async () => {
    const response = await request(server).get('/news/sport?sportId=1');
    expect(response.status).equal(200);
  });

  // Write test to create a news
  it('should return a 201 Created status code for POST request to /news with matchId', async () => {
    const response = await request(server).post('/news').send({ title: 'Test News', description: 'This is a test news', matchId: 1 });
    expect(response.status).equal(201);
  });

  it('should return a 201 Created status code for POST request to /news with tourId', async () => {
    const response = await request(server).post('/news').send({ title: 'Test News', description: 'This is a test news', tourId: 1 });
    expect(response.status).equal(201);
  });

});