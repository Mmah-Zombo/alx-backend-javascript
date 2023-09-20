/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('Tests for calculateNumber function', () => {
  describe('Tests SUM', () => {
    it('should return the correct ouptut given two whole numbers', () => {
      const result = calculateNumber('SUM', 3, 4);
      expect(result).to.equal(7);
    });

    it('returns the correct output with one float', () => {
      let result = calculateNumber('SUM', 3, 4.5);
      expect(result).to.equal(8);
      result = calculateNumber('SUM', 3.2, 4);
      expect(result).to.equal(7);
    });

    it('returns the correct output for two floats', () => {
      let result = calculateNumber('SUM', 3.2, 4.5);
      expect(result).to.equal(8);
      result = calculateNumber('SUM', 3.5, 4.5);
      expect(result).to.equal(9);
      result = calculateNumber('SUM', 3.5, 4.2);
      expect(result).to.equal(8);
    });
  });

  describe('Tests SUBTRACT', () => {
    it('should return the correct ouptut given two whole numbers', () => {
      const result = calculateNumber('SUBTRACT', 3, 4);
      expect(result).to.equal(-1);
    });

    it('returns the correct output with one float', () => {
      let result = calculateNumber('SUBTRACT', 4.5, 3);
      expect(result).to.equal(2);
      result = calculateNumber('SUBTRACT', 3.2, 4);
      expect(result).to.equal(-1);
      result = calculateNumber('SUBTRACT', 4, 3.2);
      expect(result).to.equal(1);
    });

    it('returns the correct output for two floats', () => {
      let result = calculateNumber('SUBTRACT', 3.2, 4.5);
      expect(result).to.equal(-2);
      result = calculateNumber('SUBTRACT', 4.5, 3.5);
      expect(result).to.equal(1);
      result = calculateNumber('SUBTRACT', 4.2, 3.5);
      expect(result).to.equal(0);
    });
  });

  describe('Tests DIVIDE', () => {
    it('should return the correct ouptut given two whole numbers', () => {
      let result = calculateNumber('DIVIDE', 8, 4);
      expect(result).to.equal(2);
      result = calculateNumber('DIVIDE', 8, 0);
      expect(result).to.equal('Error');
    });

    it('returns the correct output with one float', () => {
      let result = calculateNumber('DIVIDE', 10, 4.5);
      expect(result).to.equal(2);
      result = calculateNumber('DIVIDE', 30, 5.6);
      expect(result).to.equal(5);
    });

    it('returns the correct output for two floats', () => {
      let result = calculateNumber('DIVIDE', 3.2, 0.0);
      expect(result).to.equal('Error');
      result = calculateNumber('DIVIDE', 3.5, 1.5);
      expect(result).to.equal(2);
    });
  });
});
