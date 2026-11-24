# Bitácora de Análisis - Café Origen v0.1

## 1. Diccionario de datos (Minirreto 1)

| Propiedad | Tipo de dato | Significado |
| :--- | :--- | :--- |
| `id` | Number | Identificador único de cada registro de venta. |
| `fecha` | String | Fecha en la que se realizó la venta, con formato AAAA-MM-DD. |
| `cliente` | String | Código que identifica al cliente. |
| `producto` | String | Nombre del producto vendido. |
| `ciudad` | String | Ciudad donde se realizó la venta. |
| `cantidad` | Number | Número de unidades vendidas. |
| `precio` | Number | Precio de una unidad del producto. |

---

## 2. Casos borde detectados en los datos (Minirreto 1)

### Hallazgo 1: Diferencia en las mayúsculas de las ciudades
- **Descripción:** Medellín aparece escrita como `Medellín` y también como `medellín`.
- **¿Cómo se debe tratar en el análisis?:** Se debe conservar el dato original y normalizar el nombre de la ciudad durante el análisis para evitar que se cuenten como ciudades diferentes.

### Hallazgo 2: Cantidad igual a cero
- **Descripción:** El registro con ID 8 tiene una cantidad de `0` unidades.
- **¿Cómo se debe tratar en el análisis?:** Se debe conservar el registro original y revisar si representa una venta anulada o un dato incorrecto. Para calcular unidades vendidas, no debe aportar unidades mientras la cantidad sea cero.

### Hallazgo 3: Clientes con varias ventas
- **Descripción:** Los códigos `C01`, `C02` y `C03` aparecen en diferentes registros.
- **¿Cómo se debe tratar en el análisis?:** No se deben eliminar estos registros porque un mismo cliente puede realizar varias compras. Cada registro representa una transacción y debe conservarse.

---

## 3. Patrones con ciclos manuales (Minirreto 2)

- **`totalVendido(ventas)`**:
  - *Patrón usado (contador, acumulador, filtro, extremo)*:

- **`totalUnidades(ventas)`**:
  - *Patrón usado*:

- **`ventaMayorValor(ventas)`**:
  - *Patrón usado*:

- **`ventasDeCiudad(ventas, ciudad)`**:
  - *Patrón usado*:

- **`promedioPorVenta(ventas)`**:
  - *Patrón usado*:

---

## 4. Del ciclo al método: Preguntas de transformación y agrupación (Minirreto 3)

- **¿Qué filtro? (`.filter`)**:
- **¿Qué transformo? (`.map`)**:
- **¿Qué reduzco / acumulo? (`.reduce`)**:
- **¿Cómo agrupo en un diccionario?**:
- **¿Cómo ordeno sin modificar el arreglo original? (`.sort`)**:

---

## 5. Verificación del reporte y pureza de funciones (Minirreto 4)

- **¿Cómo comprobaste que el arreglo `ventas` original no fue modificado?**:
- **Comando para ejecutar el reporte**:

# Minirreto 2: Indicadores básicos con ciclos manuales

## 1. Objetivo

Desarrollar funciones que permitan analizar las ventas de Café Origen utilizando ciclos `for...of`, acumuladores, contadores y búsqueda de valores máximos.

En este minirreto se utilizan ciclos manuales, sin utilizar los métodos `.map()`, `.filter()` o `.reduce()`.

## 2. Pseudocódigo de los indicadores

### 2.1. valorVenta(venta)

1. Recibir un objeto de venta.
2. Obtener la cantidad de productos vendidos.
3. Obtener el precio unitario.
4. Multiplicar cantidad por precio.
5. Retornar el resultado.

### 2.2. totalVendido(ventas)

1. Inicializar un acumulador `total` en 0.
2. Recorrer todas las ventas con `for...of`.
3. Verificar si la cantidad es mayor que 0.
4. Si la venta es válida, calcular su valor.
5. Sumar el valor al acumulador.
6. Retornar el total vendido.

### 2.3. unidadesVendidas(ventas)

1. Inicializar un acumulador `unidades` en 0.
2. Recorrer todas las ventas.
3. Verificar si la cantidad es mayor que 0.
4. Si la venta es válida, sumar su cantidad al acumulador.
5. Retornar el total de unidades.

### 2.4. ventaMayor(ventas)

1. Inicializar la variable `mayor` en null.
2. Recorrer todas las ventas.
3. Verificar si la cantidad es mayor que 0.
4. Calcular el valor de la venta.
5. Si todavía no existe una venta mayor, guardar la venta actual.
6. Si el valor actual supera el valor de la venta guardada, actualizar `mayor`.
7. Retornar el objeto completo de la venta de mayor valor.
8. Si no existen ventas válidas, retornar null.

### 2.5. ticketPromedio(ventas)

1. Inicializar el acumulador `total` en 0.
2. Inicializar el contador `contador` en 0.
3. Recorrer todas las ventas.
4. Verificar si la cantidad es mayor que 0.
5. Si la venta es válida:
   - Sumar su valor al acumulador.
   - Incrementar el contador en 1.
6. Si el contador es 0, retornar 0.
7. Dividir el total entre el contador.
8. Retornar el promedio.

### 2.6. ventasPorCiudad(ventas, ciudad)

1. Inicializar el acumulador `total` en 0.
2. Normalizar la ciudad recibida utilizando `trim()` y `toLowerCase()`.
3. Recorrer todas las ventas.
4. Normalizar la ciudad de cada venta.
5. Comparar ambas ciudades.
6. Si coinciden y la cantidad es mayor que 0, calcular el valor de la venta.
7. Sumar el valor al acumulador.
8. Retornar el total vendido en esa ciudad.

## 3. Manejo de arreglos vacíos

Se definió el siguiente comportamiento para evitar errores y resultados como NaN:

| Función | Resultado con arreglo vacío |
|---|---:|
| totalVendido | 0 |
| unidadesVendidas | 0 |
| ventaMayor | null |
| ticketPromedio | 0 |
| ventasPorCiudad