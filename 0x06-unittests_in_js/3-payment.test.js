/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('Tests for sendPaymentRequestToApi', () => {
  it('resturns the same output as Utils.calculateNumber', () => {
    const spy = sinon.spy(sendPaymentRequestToApi);
    sendPaymentRequestToApi('SUM', 3, 4);
    Utils.calculateNumber('SUM', 3, 4);
    expect(spy.returned(Utils.calculateNumber('SUM', 3, 4)));
  });
});
