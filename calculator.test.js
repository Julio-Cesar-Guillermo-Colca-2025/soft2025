import { describe, it, expect } from 'vitest'
import { sumar, restar } from './calculator.js'

describe('Funciones de la calculadora', () => {
  it('suma correctamente', () => {
    expect(sumar(2, 3)).toBe(5)
  })

  it('resta correctamente', () => {
    expect(restar(5, 2)).toBe(3)
  })
})
