/* eslint-disable linebreak-style */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('Tests for sendPaymentRequestToApi', () => {
  it('resturns the same output as Utils.calculateNumber', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberSpy.calledOnceWith('SUM', 100, 20)).to.be.true;
    calculateNumberSpy.restore();
  });
});
