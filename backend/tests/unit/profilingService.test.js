const ProfilingService = require('../../src/services/profilingService');

describe('ProfilingService - clasificarNivel', () => {
  let profilingService;

  beforeEach(() => {
    profilingService = new ProfilingService();
  });

  // TEST 1: Usuario con 0-3 respuestas correctas = principiante
  test('debe clasificar usuario con 2 respuestas correctas como principiante', () => {
    const respuestas = [
      { correcta: true },
      { correcta: false },
      { correcta: true }
    ];

    const resultado = profilingService.clasificarNivel(respuestas);

    expect(resultado).toBe('principiante');
  });

  // TEST 2: Usuario con 4-7 respuestas correctas = intermedio
  test('debe clasificar usuario con 5 respuestas correctas como intermedio', () => {
    const respuestas = [
      { correcta: true },
      { correcta: true },
      { correcta: false },
      { correcta: true },
      { correcta: true },
      { correcta: false }
    ];

    const resultado = profilingService.clasificarNivel(respuestas);

    expect(resultado).toBe('intermedio');
  });

  // TEST 3: Usuario con 8+ respuestas correctas = avanzado
  test('debe clasificar usuario con 9 respuestas correctas como avanzado', () => {
    const respuestas = Array(9).fill({ correcta: true });

    const resultado = profilingService.clasificarNivel(respuestas);

    expect(resultado).toBe('avanzado');
  });

  // TEST 4: Caso borde - array vacío
  test('debe manejar array vacío retornando principiante', () => {
    const resultado = profilingService.clasificarNivel([]);

    expect(resultado).toBe('principiante');
  });

  // TEST 5: Caso borde - respuestas null/undefined
  test('debe lanzar error con respuestas null', () => {
    expect(() => {
      profilingService.clasificarNivel(null);
    }).toThrow('Respuestas inválidas');
  });
});
