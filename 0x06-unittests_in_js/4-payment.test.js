/* eslint-disable linebreak-style */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('Tests for sendPaymentRequestToApi', () => {
  it('resturns the same output as Utils.calculateNumber', () => {
    const consoleLogStub = sinon.spy(console, 'log');
    const calculateNumberSpy = sinon.stub(Utils, 'calculateNumber');
    calculateNumberSpy.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberSpy.calledOnceWith('SUM', 100, 20)).to.be.true;
    expect(consoleLogStub.calledWith('The total is: 10')).to.be.true;
    consoleLogStub.restore();
    calculateNumberSpy.restore();
  });
});
