import { useState, useEffect } from 'react';

// 1. Componente de Temporizador de Sesión (Sección 4 de la guía)
export const SessionTimer = ({ onExpire }: { onExpire: () => void }) => {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(intervalId);
          onExpire();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Función de limpieza (Cleanup)
    return () => {
      clearInterval(intervalId);
    };
  }, [onExpire]);

  return (
    <div style={{ background: '#FFEBEE', padding: '10px', borderRadius: '4px', textAlign: 'center', marginBottom: '15px' }}>
      <strong>Expiración de Sesión de Seguridad: {seconds}s</strong>
    </div>
  );
};

// 2. Componente Secundario para Mostrar Usuario (Sección 2 de la guía)
const UserCard = ({ user, onRemove }: { user: { id: string; email: string; role: string }; onRemove: (id: string) => void }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', marginTop: '8px' }}>
      <span>{user.email} ({user.role})</span>
      <button onClick={() => onRemove(user.id)} style={{ color: 'red' }}>Eliminar</button>
    </div>
  );
};

// 3. Componente Lista de Usuarios (Sección 2 de la guía)
const UserList = ({ users, onRemove }: { users: Array<{ id: string; email: string; role: string }>; onRemove: (id: string) => void }) => {
  return (
    <div className="user-list" style={{ marginTop: '15px' }}>
      <h3>Usuarios Registrados</h3>
      {users.length === 0 ? <p>No hay usuarios registrados.</p> : null}
      {users.map((user) => (
        <UserCard key={user.id} user={user} onRemove={onRemove} />
      ))}
    </div>
  );
};

// 4. Componente Principal (App)
export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [users, setUsers] = useState<Array<{ id: string; email: string; role: string }>>([]);
  const [isExpired, setIsExpired] = useState(false);

  // Validación en tiempo real (Sección 3.2)
  const validate = (emailVal: string, passVal: string) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (emailVal && !emailRegex.test(emailVal)) {
      return 'El formato de correo es inválido.';
    }
    if (passVal && passVal.length < 8) {
      return 'La contraseña debe tener al menos 8 caracteres.';
    }
    return '';
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setEmail(val);
    setError(validate(val, password));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setPassword(val);
    setError(validate(email, val));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!error && email && password) {
      const newUser = { id: crypto.randomUUID(), email, role: 'Operador' };
      setUsers([...users, newUser]);
      setEmail('');
      setPassword('');
    }
  };

  const handleRemoveUser = (id: string) => {
    setUsers(users.filter(u => u.id !== id));
  };

  const handleSessionExpire = () => {
    setIsExpired(true);
  };

  if (isExpired) {
    return (
      <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
        <h2>¡La sesión de seguridad ha expirado!</h2>
        <button onClick={() => window.location.reload()}>Reiniciar Sesión</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      {/* Visualización del Temporizador */}
      <SessionTimer onExpire={handleSessionExpire} />

      {/* Formulario de Registro */}
      <h2>Registro de Usuarios</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <input 
          type="email" 
          value={email} 
          onChange={handleEmailChange} 
          placeholder="Correo electrónico" 
          style={{ padding: '8px' }}
        />
        <input 
          type="password" 
          value={password} 
          onChange={handlePasswordChange} 
          placeholder="Contraseña de acceso" 
          style={{ padding: '8px' }}
        />
        {error && <span style={{ color: 'red', fontSize: '12px' }}>{error}</span>}
        <button type="submit" disabled={!!error || !email || !password} style={{ padding: '8px', cursor: 'pointer' }}>
          Registrar
        </button>
      </form>

      {/* Lista Dinámica de Usuarios */}
      <UserList users={users} onRemove={handleRemoveUser} />
    </div>
  );
}
