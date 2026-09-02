import { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Función de validación de correo y contraseña según la guía
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
      alert(`¡Usuario registrado con éxito!\nCorreo: ${email}`);
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div
      style={{ padding: '30px', fontFamily: 'sans-serif', maxWidth: '350px' }}
    >
      <h2>Prueba: RegistroForm (3.2)</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
      >
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Correo electrónico"
          style={{
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Contraseña de acceso"
          style={{
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
        {error && (
          <span style={{ color: 'red', fontSize: '12px' }}>{error}</span>
        )}
        <button
          type="submit"
          disabled={!!error || !email || !password}
          style={{
            padding: '10px',
            backgroundColor: '#1976D2',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Registrar
        </button>
      </form>
    </div>
  );
}
