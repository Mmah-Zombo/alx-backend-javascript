/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the correct ouptut given two whole numbers', () => {
    const result = calculateNumber(3, 4);
    assert.equal(result, 7);
  });

  it('returns the correct output with one float', () => {
    let result = calculateNumber(3, 4.5);
    assert.equal(result, 8);
    result = calculateNumber(3.2, 4);
    assert.equal(result, 7);
  });

  it('returns the correct output for two floats', () => {
    let result = calculateNumber(3.2, 4.5);
    assert.equal(result, 8);
    result = calculateNumber(3.5, 4.5);
    assert.equal(result, 9);
    result = calculateNumber(3.5, 4.2);
    assert.equal(result, 8);
  });
});
