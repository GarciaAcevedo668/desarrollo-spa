import { useState } from 'react';
import { ProductoCard } from './components/ProductoCard';
import { FormularioProducto } from './components/FormularioProducto';

const HARDWARE_INICIAL = [
  { id: 1, nombre: 'Memoria RAM DDR5 16GB', precio: 85 },
  { id: 2, nombre: 'Procesador AMD Ryzen 5', precio: 195 },
  { id: 3, nombre: 'Disco Duro SSD NVMe 1TB', precio: 75 }
];

export default function App() {
  const [productos, setProductos] = useState(HARDWARE_INICIAL);
  const [carrito, setCarrito] = useState(0);

  const agregarAlCarrito = () => {
    setCarrito(carrito + 1);
  };

  const registrarNuevoProducto = (nuevo) => {
    setProductos([...productos, { ...nuevo, id: Date.now() }]);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Segoe UI, sans-serif', maxWidth: '900px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#2c3e50', marginBottom: '5px' }}>Store Hardware - Examen de React</h1>
        <div style={{ fontSize: '18px', color: '#e67e22', fontWeight: 'bold' }}>
          🛒 Carrito de Compras: {carrito} items
        </div>
      </header>

      <section style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', marginBottom: '30px' }}>
        <h2 style={{ fontSize: '18px', color: '#34495e', marginTop: 0 }}>Registrar Nuevo Producto</h2>
        <FormularioProducto onAgregarProducto={registrarNuevoProducto} />
      </section>

      <section>
        <h2 style={{ color: '#34495e' }}>Catálogo de Hardware</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
          {productos.map((prod) => (
            <ProductoCard 
              key={prod.id} 
              producto={prod} 
              onAgregarAlCarrito={agregarAlCarrito} 
            />
          ))}
        </div>
      </section>
    </div>
  );
}
