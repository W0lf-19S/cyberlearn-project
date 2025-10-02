class ProfilingService {
  clasificarNivel(respuestas) {
    if (!respuestas || !Array.isArray(respuestas)) {
      throw new Error('Respuestas inválidas');
    }
    
    if (respuestas.length === 0) {
      return 'principiante';
    }
    
    const correctas = respuestas.filter(r => r.correcta === true).length;
    
    if (correctas >= 8) {
      return 'avanzado';
    } else if (correctas >= 4) {
      return 'intermedio';
    } else {
      return 'principiante';
    }
  }
}

module.exports = ProfilingService;
