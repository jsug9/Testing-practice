const scriptModule = require('./script.js');

describe('String Length', () => {
  test('This function should return 5', () => {
    expect(scriptModule.stringLength('hello')).toBe(5);
  });

  test('This function should return 2', () => {
    expect(scriptModule.stringLength('hi')).toBe(2);
  });

  test('This function should return 3', () => {
    expect(scriptModule.stringLength('987')).toBe(3);
  });

  test('This function should return 9', () => {
    expect(scriptModule.stringLength('hi people')).toBe(9);
  });

  test('This function should return 9', () => {
    expect(scriptModule.stringLength('h,e,l,l,o')).toBe(9);
  });

  test('This function should return "too big"', () => {
    expect(scriptModule.stringLength('h, e, l, l, o')).toBe("too big")
  });
  
  test('This function should return "too small"', () => {
    expect(scriptModule.stringLength('')).toBe("too small");
  });
});

describe('String Reversed', () => {
  test('This function should return the "olleh"', () => {
    expect(scriptModule.reverseString('hello')).toBe('olleh');
  });

  test('This function should return the "987"', () => {
    expect(scriptModule.reverseString('789')).toBe('987');
  });

  test('This function should return the "i h"', () => {
    expect(scriptModule.reverseString('h i')).toBe('i h');
  });
});

describe('String capitalized', () => {
  test('This function should return the string "Hello"', () => {
    expect(scriptModule.capitalize('hello')).toBe('Hello');
  });
});

describe('Calculator', () => {
  test('This function should return additions', () => {
    expect(scriptModule.calculator.add(2, 3)).toBe(5);
  });

  test('This function should return substractions', () => {
    expect(scriptModule.calculator.subtract(3, 2)).toBe(1);
  });

  test('This function should return multiplications', () => {
    expect(scriptModule.calculator.multiply(2, 3)).toBe(6);
  });

  test('This function should return divisions', () => {
    expect(scriptModule.calculator.divide(6, 3)).toBe(2);
  });
});