const holaMundo = require('../app');

test('Retorna "Hola, Mundo!"', () => {
    expect(holaMundo()).toBe('Hola, Mundo!');
});
