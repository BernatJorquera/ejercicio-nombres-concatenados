let nombres = ["Juan", "Julia", "María José", "Segismundo", "Aristóteles"];
let nombresSnakeCase = nombres
  .filter(function (nombre) { return nombre.length > 6 })
  .map(function (nombre, i) {
    if (i === 0) { return `${nombre.toLowerCase()}` } else { return `_${nombre.toLowerCase()}` }
  })
  .reduce(function (acumulador, nombre) { return acumulador + nombre });
console.log(nombresSnakeCase);
