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

describe('Pruebas para ValidarLargoMaximo', () => {
  test('ValidarLargoMaximo debe retornar TRUE para una contraseña con longuitud correcta (menor a 20)',() =>{
    const resultado = ValidarLargoMaximo('0123456789');
    expect(resultado).toBe(true);
  })
  test('ValidarLargoMaximo debe retornar TRUE para una contraseña con longuitud igual (a 20)',() =>{
    const resultado = ValidarLargoMaximo('01234567890123456789');
    expect(resultado).toBe(true);
  })
  test('ValidarLargoMaximo debe retornar FALSE para una contraseña con longuitud incorrecta (mayor a 20)',() =>{
    const resultado = ValidarLargoMaximo('012345678901234567890');
    expect(resultado).toBe(false);
  })
})

describe('Pruebas para ValidarDebeContenerUnNumero',() =>{
  test('ValidarDebeContenerUnNumero debe retornar TRUE para una contraseña que si contiene un caracter numerico',() =>{
    const resultado = ValidarDebeContenerAlgunNumero('1234');
    expect(resultado).toBe(true);
  })
  test('ValidarDebeContenerUnNumero debe retornar FALSE para una contraseña que no contiene un caracter numerico',() =>{
    const resultado = ValidarDebeContenerAlgunNumero('HOLAa');
    expect(resultado).toBe(false);
  })
})