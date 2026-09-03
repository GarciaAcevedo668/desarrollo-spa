import { useState } from 'react';

export const FormularioProducto = ({ onAgregarProducto }) => {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim() || !precio || precio <= 0) return;

    onAgregarProducto({
      nombre,
      precio: parseFloat(precio)
    });

    setNombre('');
    setPrecio('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div>
        <input 
          type="text" 
          placeholder="Nombre del hardware" 
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>
      <div>
        <input 
          type="number" 
          placeholder="Precio en USD" 
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>
      <button 
        type="submit"
        disabled={!nombre.trim() || !precio || precio <= 0}
        style={{
          backgroundColor: (!nombre.trim() || !precio || precio <= 0) ? '#cccccc' : '#2ecc71',
          color: 'white',
          border: 'none',
          padding: '10px',
          borderRadius: '4px',
          cursor: (!nombre.trim() || !precio || precio <= 0) ? 'not-allowed' : 'pointer',
          fontWeight: 'bold'
        }}
      >
        Registrar Producto
      </button>
    </form>
  );
};
