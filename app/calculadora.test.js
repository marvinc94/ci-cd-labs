const test = require('node:test');
const assert = require('node:assert/strict');

const {
  suma,
  resta,
  multiplicacion,
  division
} = require('./calculadora');

test('Suma: 2 + 3 = 5', () => {
  assert.equal(suma(2, 3), 5);
});

test('Resta: 10 - 4 = 6', () => {
  assert.equal(resta(10, 4), 6);
});

test('Multiplicacion: 3 x 4 = 12', () => {
  assert.equal(multiplicacion(3, 4), 12);
});

test('Division: 10 / 2 = 5', () => {
  assert.equal(division(10, 2), 5);
});