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