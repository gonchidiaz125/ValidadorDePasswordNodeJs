// __tests__/passwordValidator.test.js
const {
  ValidarPassword,
  ValidarLargoMinimo,
  ValidarLargoMaximo,
  ValidarDebeContenerAlgunNumero,
  ValidarDebeContenerAlgunaMinuscula,
  ValidarDebeContenerAlgunaMayuscula,
  ValidarDebeContenerAlgunCaracterEspecial,
} = require('../validadorPassword');

describe('Pruebas para ValidarPassword', () => {
  test('ValidarPassword debe retornar un objeto con resultado de validación', () => {
    const resultado = ValidarPassword('MiPassword1!');
    expect(resultado).toBeDefined();
    expect(resultado.Valida).toBe(true);
    expect(resultado.Reglas.length).toBe(6);
  });

  // Agrega más pruebas para las funciones individuales
  // ...

});

describe('Pruebas para ValidarLargoMinimo', () => {
  // Ejemplo:
  test('ValidarLargoMinimo debe retornar TRUE para una contraseña con longitud suficiente (mayor que 5)', () => {
    const resultado = ValidarLargoMinimo('pass largo');
    expect(resultado).toBe(true);
  });

  test('ValidarLargoMinimo debe retornar TRUE para una contraseña con longitud igual a 5', () => {
    const resultado = ValidarLargoMinimo('12345');
    expect(resultado).toBe(true);
  });

  test('ValidarLargoMinimo debe retornar FALSE para una contraseña con longitud menor a 5', () => {
    const resultado = ValidarLargoMinimo('1234');
    expect(resultado).toBe(false);
  });
})