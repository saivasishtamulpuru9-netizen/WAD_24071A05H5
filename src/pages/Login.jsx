import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      alert('Please enter both email and password.');
    } else {
      alert('Login successful!');
      navigate('/');
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <p>Email:</p>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        
        <p>Password:</p>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        
        <br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
