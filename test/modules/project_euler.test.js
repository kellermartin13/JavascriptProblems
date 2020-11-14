const fibonacciEvenNumberSum = require('../../src/modules/project_euler');

describe('project_euler', () => {
  describe('test case 4 million', () => {
    const num = 4000000;
    const expected = 4613732;

    it('returns correct sum', () => {
      expect(fibonacciEvenNumberSum(num)).toEqual(expected)
    })
  });

  describe('max number', () => {
    describe('when max number === fibonacci number', () => {
      const num = 8;
      const expected = 10;

      it('includes parameter in calculation', () => {
        expect(fibonacciEvenNumberSum(num)).toEqual(expected)
      })
    });

    describe('when max number > fibonacci number', () => {
      const num = 12;
      const expected = 10;

      it('excludes parameter in calculation', () => {
        expect(fibonacciEvenNumberSum(num)).toEqual(expected)
      })
    });

    describe('when max number < fibonacci number', () => {
      const num = 7;
      const expected = 2;

      it('excludes parameter in calculation', () => {
        expect(fibonacciEvenNumberSum(num)).toEqual(expected)
      })
    })
  })
});
