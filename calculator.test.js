import { describe, it, expect } from 'vitest'
import { sumar, restar, multiplicar, dividir } from './calculator.js'

describe('Calculadora básica', () => {
  it('debería sumar correctamente', () => {
    expect(sumar(2, 3)).toBe(5);
  });

  it('debería restar correctamente', () => {
    expect(restar(5, 2)).toBe(3);
  });

  it('debería multiplicar correctamente', () => {
    expect(multiplicar(3, 4)).toBe(12);
  });

  it('debería dividir correctamente', () => {
    expect(dividir(10, 2)).toBe(5);
  });

  it('debería lanzar error al dividir entre 0', () => {
    expect(() => dividir(10, 0)).toThrow("No se puede dividir por cero");
  });
});
