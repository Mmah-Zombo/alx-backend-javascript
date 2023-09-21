/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */
const request = require('request');
const { expect } = require('chai');

describe('API Tests', () => {
  it('should return a 200 status code and message', (done) => {
    request.get('http://localhost:7865/', (_, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return correct status code when :id is a number', (done) => {
    request.get('http://localhost:7865/cart/123', (_, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 123');
      done();
    });
  });

  it('should return a 404 status code when :id is not a number', (done) => {
    request.get('http://localhost:7865/cart/abc', (_, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('returns status code 200 for a get request to /available_payments', (done) => {
    request.get('http://localhost:7865/available_payments', (_, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      };
      expect(body).to.deep.equal(expectedResponse);
      done();
    });
  });

  it('returns status code 200 and correct message for /login', (done) => {
    request.post('http://localhost:7865/login', { json: { userName: 'Zombo' } }, (_, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Zombo');
      done();
    });
  });
});
