document.getElementById('ventaForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Captura de valores
    const tipoProducto = document.getElementById('tipoProducto').value;
    const precioVenta = parseFloat(document.getElementById('precioProducto').value);
    const cantidadVendida = parseFloat(document.getElementById('cantidadProducto').value);
    const costoTotal = parseFloat(document.getElementById('costoTotal').value);
    const cantidadComprada = parseFloat(document.getElementById('cantidadTotalComprada').value);
  
    if (isNaN(precioVenta) || isNaN(cantidadVendida) || isNaN(costoTotal) || isNaN(cantidadComprada)) {
      alert("Por favor, llena todos los campos correctamente.");
      return;
    }
  
    // Calculos
    const totalVenta = precioVenta * cantidadVendida;
    const costoPorUnidad = costoTotal / cantidadComprada;
    const totalInvertido = costoPorUnidad * cantidadVendida;
    const ganancia = totalVenta - totalInvertido;
  
    // Mostrar resultados
    document.getElementById('resultadoProducto').textContent = `Total vendido (${tipoProducto}): $${totalVenta.toFixed(2)}`;
    document.getElementById('totalInvertido').textContent = `Total invertido: $${totalInvertido.toFixed(2)}`;
    document.getElementById('ganancia').textContent = `Ganancia obtenida: $${ganancia.toFixed(2)}`;
  });
  