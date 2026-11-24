
// 1. Importamos el arreglo de ventas desde datos.js
const { ventas } = require("./datos");

// 2. Mostramos la cantidad de registros
console.log("Cantidad de registros:", ventas.length);

// 3. Mostramos el primer registro
console.log("Primer registro:", ventas[0]);

// 4. Mostramos el último registro
console.log("Último registro:", ventas[ventas.length - 1]);

// 5. Mostramos el producto del registro en la posición 4
console.log("Producto en la posición 4:", ventas[4].producto);

// 6. Mostramos la tabla completa
console.table(ventas);
