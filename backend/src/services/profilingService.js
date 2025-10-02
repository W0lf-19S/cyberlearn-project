class ProfilingService {
  static UMBRALES = {
    AVANZADO: 8,
    INTERMEDIO: 4,
    PRINCIPIANTE: 0
  };

  static NIVELES = {
    AVANZADO: 'avanzado',
    INTERMEDIO: 'intermedio',
    PRINCIPIANTE: 'principiante'
  };

  clasificarNivel(respuestas) {
    this._validarRespuestas(respuestas);
    
    if (respuestas.length === 0) {
      return ProfilingService.NIVELES.PRINCIPIANTE;
    }
    
    const correctas = this._contarCorrectas(respuestas);
    return this._determinarNivel(correctas);
  }

  _validarRespuestas(respuestas) {
    if (!respuestas || !Array.isArray(respuestas)) {
      throw new Error('Respuestas inválidas');
    }
  }

  _contarCorrectas(respuestas) {
    return respuestas.filter(r => r.correcta === true).length;
  }

  _determinarNivel(correctas) {
    const { UMBRALES, NIVELES } = ProfilingService;
    if (correctas >= UMBRALES.AVANZADO) return NIVELES.AVANZADO;
    if (correctas >= UMBRALES.INTERMEDIO) return NIVELES.INTERMEDIO;
    return NIVELES.PRINCIPIANTE;
  }
}

module.exports = ProfilingService;
