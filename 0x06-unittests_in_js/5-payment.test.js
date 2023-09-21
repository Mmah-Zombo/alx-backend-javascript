/* eslint-disable linebreak-style */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
const sinon = require('sinon');
const { expect } = require('chai');
// const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('Tests for sendPaymentRequestToApi', () => {
  let consoleLogStub;
  beforeEach(() => {
    consoleLogStub = sinon.spy(console, 'log');
  });
  afterEach(() => {
    consoleLogStub.restore();
  });
  it('call sendPaymentRequestToAPI with 100, and 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleLogStub.calledOnceWith('The total is: 120')).to.be.true;
  });
  it('call sendPaymentRequestToAPI with 10, and 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleLogStub.calledOnceWith('The total is: 20')).to.be.true;
  });
});
