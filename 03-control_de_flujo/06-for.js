//  el uso de for sirve para ejecutar un bloque de codigo un numero determinado de veces, es decir, que se ejecuta un numero determinado de veces

// la sintaxis de for es la siguiente : 
// for (inicializacion; condicion; incremento) {
//     // bloque de codigo a ejecutar
// }    


for (let i = 1; i <= 5; i++) {
  console.log(i);
}

for(let i = "perro"; i.length < 10; i += "ro") { //
    console.log(i);
}

 // Tienes un arreglo de facturas y necesitas:

// Calcular subtotal total (suma de subtotales)
// Calcular IVA tot
// Calcular total generalal
// Identificar facturas vencidas o con monto alto para revisión


const facturas = [  // simulando un reporte de facturas
  { id: "INV-1001", cliente: "Cliente A", subtotal: 1200, iva: 0.19, diasVencido: 0 },
  { id: "INV-1002", cliente: "Cliente B", subtotal: 850,  iva: 0.19, diasVencido: 12 },
  { id: "INV-1003", cliente: "Cliente C", subtotal: 5000, iva: 0.19, diasVencido: 2 },
  { id: "INV-1004", cliente: "Cliente D", subtotal: 300,  iva: 0.19, diasVencido: 0 },
];

let subtotalTotal = 0;
let ivaTotal = 0;
let totalGeneral = 0;

const alertas = [];

for (let i = 0; i < facturas.length; i++) {
  const f = facturas[i];

  const ivaFactura = f.subtotal * f.iva;
  const totalFactura = f.subtotal + ivaFactura;

  // acumuladores (muy típico en reportes)
  subtotalTotal += f.subtotal;
  ivaTotal += ivaFactura;
  totalGeneral += totalFactura;

  // reglas de negocio (alertas)
  if (f.diasVencido > 0) {
    alertas.push(`⚠️ ${f.id} está vencida (${f.diasVencido} días) - ${f.cliente}`);
  }

  if (totalFactura > 3000) {
    alertas.push(`🔍 ${f.id} requiere revisión por monto alto ($${totalFactura.toFixed(2)})`);
  }
}

console.log("=== RESUMEN ===");
console.log("Subtotal total:", subtotalTotal.toFixed(2));
console.log("IVA total:", ivaTotal.toFixed(2));
console.log("Total general:", totalGeneral.toFixed(2));

console.log("\n=== ALERTAS ===");
for (let i = 0; i < alertas.length; i++) {
  console.log(alertas[i]);
}