/**
 * Motor de analítica de Café Origen v0.1 (Plantilla Base)
 *
 * Instrucciones:
 * - Implementa el cuerpo de cada función siguiendo su descripción.
 * - Apóyate en los archivos de la carpeta `patrones/` para ver ejemplos de cada técnica.
 * - Recuerda NO modificar (mutar) el arreglo `ventas` original.
 */

/**
 * Calcula el valor total de una venta individual (cantidad * precio).
 * @param {Object} venta - Objeto que representa una venta.
 * @returns {number} Valor monetario de la venta.
 */
function valorVenta(venta) {  
  const total = venta.cantidad * venta.precio;

  return total;
}

// ============================================================================
// MINIRRETO 2: Indicadores básicos con ciclos manuales (for ... of)
// Requisito: Resolver usando un ciclo `for ... of` (sin .reduce, .filter, .map)
// Guía recomendada: patrones/01-contadores-y-acumuladores.js y 02-extremos-maximo-minimo.js
// ============================================================================

/**
 * Suma el valor total (cantidad * precio) de todas las ventas válidas (cantidad > 0).
 * Patrón sugerido: Acumulador con filtro manual.
 * @param {Array} ventas - Arreglo de objetos de ventas.
 * @returns {number} Dinero total vendido.
 */
function totalVendido(ventas) {
  let total = 0;

  for (const venta of ventas) {
    if (venta.cantidad > 0) {
      total = total + valorVenta(venta);
    }
  }

  return total;
}

/**
 * Suma todas las unidades vendidas en las órdenes válidas (cantidad > 0).
 * Patrón sugerido: Acumulador.
 * @param {Array} ventas - Arreglo de objetos de ventas.
 * @returns {number} Total de unidades vendidas.
 */
function unidadesVendidas(ventas) {
  let unidades = 0;

  for (const venta of ventas) {
    if (venta.cantidad > 0) {
      unidades = unidades + venta.cantidad;
    }
  }

  return unidades;
}
function totalUnidades(ventas) {
  return unidadesVendidas(ventas);
}

/**
 * Devuelve el objeto completo de la venta con mayor valor total (cantidad * precio).
 * Patrón sugerido: Búsqueda de extremo (máximo).
 * @param {Array} ventas - Arreglo de objetos de ventas.
 * @returns {Object|null} El objeto de la venta más alta.
 */
function ventaMayor(ventas) {
  let mayor = null;

  for (const venta of ventas) {
    if (venta.cantidad > 0) {
      if (mayor === null || valorVenta(venta) > valorVenta(mayor)) {
        mayor = venta;
      }
    }
  }

  return mayor;
}
function ventaMayorValor(ventas) {
  return ventaMayor(ventas);
}

/**
 * Devuelve un nuevo arreglo con las ventas válidas de una ciudad específica,
 * sin importar diferencias de mayúsculas/minúsculas (ej. "Medellín" vs "medellín").
 * Patrón sugerido: Filtro manual con normalización de texto (.trim().toLowerCase()).
 * @param {Array} ventas - Arreglo de objetos de ventas.
 * @param {string} ciudad - Nombre de la ciudad a buscar.
 * @returns {Array} Nuevo arreglo con las ventas de esa ciudad.
 */
function ventasDeCiudad(ventas, ciudad) {
  // Tu código aquí
}

/**
 * Calcula el promedio de dinero por venta, dividiendo el total vendido
 * únicamente entre la cantidad de ventas válidas (cantidad > 0).
 * Patrón sugerido: Acumulador + Contador combinados.
 * @param {Array} ventas - Arreglo de objetos de ventas.
 * @returns {number} Promedio por venta válida.
 */

function ticketPromedio(ventas) {
  let total = 0;
  let contador = 0;

  for (const venta of ventas) {
    if (venta.cantidad > 0) {
      total = total + valorVenta(venta);
      contador++;
    }
  }

  if (contador === 0) {
    return 0;
  }

  return total / contador;
}

function promedioPorVenta(ventas) {
  return ticketPromedio(ventas);
}


function ventasPorCiudad(ventas, ciudad) {
  let total = 0;

  const ciudadBuscada = ciudad.trim().toLowerCase();

  for (const venta of ventas) {
    const ciudadVenta = venta.ciudad.trim().toLowerCase();

    if (ciudadVenta === ciudadBuscada && venta.cantidad > 0) {
      total = total + valorVenta(venta);
    }
  }

  return total;
}



// ============================================================================
// MINIRRETO 3: Métodos de arreglo (.filter, .map, .reduce, .sort) y Top K
// Requisito: Resolver usando métodos de arreglos sin mutar el arreglo original.
// Guía recomendada: patrones/03-filter-map-reduce.js, 04-objetos-como-diccionarios.js
//                   y 05-ordenar-inmutable-y-top-k.js
// ============================================================================

/**
 * Devuelve un nuevo arreglo únicamente con las ventas cuya cantidad sea mayor a 0.
 * Método sugerido: .filter()
 * @param {Array} ventas - Arreglo de objetos de ventas.
 * @returns {Array} Ventas con cantidad > 0.
 */
function ventasValidas(ventas) {
  // Tu código aquí
}

/**
 * Transforma cada venta válida en un objeto resumido con la estructura:
 * { id, producto, ciudad, total } donde `ciudad` esté normalizada en minúsculas.
 * Método sugerido: .filter() seguido de .map()
 * @param {Array} ventas - Arreglo de objetos de ventas.
 * @returns {Array} Arreglo de objetos resumidos.
 */
function resumenVentas(ventas) {
  // Tu código aquí
}

/**
 * Agrupa y suma el valor total vendido por cada ciudad normalizada en minúsculas.
 * Ejemplo de salida: { medellín: 356000, bogotá: 276000, ... }
 * Patrón sugerido: Objeto como diccionario con .reduce()
 * @param {Array} ventas - Arreglo de objetos de ventas.
 * @returns {Object} Diccionario { [ciudadNormalizada]: totalVendido }.
 */
function totalPorCiudad(ventas) {
  // Tu código aquí
}

/**
 * Agrupa y suma el total de unidades vendidas por cada producto.
 * Ejemplo de salida: { "Origen Huila 500 g": 7, "Origen Nariño 250 g": 6, ... }
 * Patrón sugerido: Objeto como diccionario con .reduce()
 * @param {Array} ventas - Arreglo de objetos de ventas.
 * @returns {Object} Diccionario { [producto]: totalUnidades }.
 */
function unidadesPorProducto(ventas) {
  // Tu código aquí
}

/**
 * Devuelve un arreglo con los nombres de los `k` productos que más dinero generaron,
 * ordenados de mayor a menor valor vendido.
 * Ejemplo con k = 3: [ "Origen Huila 500 g", "Origen Sierra 500 g", "Prensa francesa" ]
 * Patrón sugerido: Diccionario con .reduce() -> Object.entries() -> .sort() -> .slice(0, k) -> .map()
 * @param {Array} ventas - Arreglo de objetos de ventas.
 * @param {number} k - Cantidad de productos a incluir en el ranking.
 * @returns {Array<string>} Nombres de los k productos con mayor valor vendido.
 */
function topProductosPorValor(ventas, k) {

  // Tu código aquí
}

module.exports = {
  valorVenta,
  totalVendido,
  unidadesVendidas,
  totalUnidades,
  ventaMayor,
  ventaMayorValor,
  ventasDeCiudad,
  ventasPorCiudad,
  promedioPorVenta,
  ticketPromedio,
  ventasValidas,
  resumenVentas,
  totalPorCiudad,
  unidadesPorProducto,
  topProductosPorValor,
};
