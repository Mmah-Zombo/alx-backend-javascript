/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('Tests for calculateNumber function', () => {
  describe('Tests SUM', () => {
    it('should return the correct ouptut given two whole numbers', () => {
      const result = calculateNumber('SUM', 3, 4);
      assert.equal(result, 7);
    });

    it('returns the correct output with one float', () => {
      let result = calculateNumber('SUM', 3, 4.5);
      assert.equal(result, 8);
      result = calculateNumber('SUM', 3.2, 4);
      assert.equal(result, 7);
    });

    it('returns the correct output for two floats', () => {
      let result = calculateNumber('SUM', 3.2, 4.5);
      assert.equal(result, 8);
      result = calculateNumber('SUM', 3.5, 4.5);
      assert.equal(result, 9);
      result = calculateNumber('SUM', 3.5, 4.2);
      assert.equal(result, 8);
    });
  });

  describe('Tests SUBTRACT', () => {
    it('should return the correct ouptut given two whole numbers', () => {
      const result = calculateNumber('SUBTRACT', 3, 4);
      assert.equal(result, -1);
    });

    it('returns the correct output with one float', () => {
      let result = calculateNumber('SUBTRACT', 4.5, 3);
      assert.equal(result, 2);
      result = calculateNumber('SUBTRACT', 3.2, 4);
      assert.equal(result, -1);
      result = calculateNumber('SUBTRACT', 4, 3.2);
      assert.equal(result, 1);
    });

    it('returns the correct output for two floats', () => {
      let result = calculateNumber('SUBTRACT', 3.2, 4.5);
      assert.equal(result, -2);
      result = calculateNumber('SUBTRACT', 4.5, 3.5);
      assert.equal(result, 1);
      result = calculateNumber('SUBTRACT', 4.2, 3.5);
      assert.equal(result, 0);
    });
  });

  describe('Tests DIVIDE', () => {
    it('should return the correct ouptut given two whole numbers', () => {
      let result = calculateNumber('DIVIDE', 8, 4);
      assert.equal(result, 2);
      result = calculateNumber('DIVIDE', 8, 0);
      assert.equal(result, 'Error');
    });

    it('returns the correct output with one float', () => {
      let result = calculateNumber('DIVIDE', 10, 4.5);
      assert.equal(result, 2);
      result = calculateNumber('DIVIDE', 30, 5.6);
      assert.equal(result, 5);
    });

    it('returns the correct output for two floats', () => {
      let result = calculateNumber('DIVIDE', 3.2, 0.0);
      assert.equal(result, 'Error');
      result = calculateNumber('DIVIDE', 3.5, 1.5);
      assert.equal(result, 2);
    });
  });
});
