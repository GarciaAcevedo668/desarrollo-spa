export const ProductoCard = ({ producto, onAgregarAlCarrito }) => {
  return (
    <div 
      style={{ 
        border: '1px solid #e0e0e0', 
        borderRadius: '8px', 
        padding: '16px', 
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <div>
        <h3 style={{ margin: '0 0 8px 0', color: '#2c3e50' }}>{producto.nombre}</h3>
        <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#27ae60', margin: '0 0 16px 0' }}>
          ${producto.precio} USD
        </p>
      </div>
      <button 
        onClick={onAgregarAlCarrito}
        style={{
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          padding: '10px 15px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: '600'
        }}
      >
        Añadir al Carrito
      </button>
    </div>
  );
};
