// calculator.test.js
import { describe, it, expect } from 'vitest'
import { sumar, restar, multiplicar, dividir } from './calculator.js'

describe('Pruebas de calculadora', () => {
  it('suma correctamente', () => {
    expect(sumar(2, 3)).toBe(5);
  });

  it('resta correctamente', () => {
    expect(restar(10, 5)).toBe(5);
  });

  it('multiplica correctamente', () => {
    expect(multiplicar(4, 3)).toBe(12);
  });

  it('divide correctamente', () => {
    expect(dividir(20, 4)).toBe(5);
  });

  it('lanza error al dividir por cero', () => {
    expect(() => dividir(10, 0)).toThrow("No se puede dividir por cero");
  });
});
