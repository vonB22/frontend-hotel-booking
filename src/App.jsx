import { useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import WelcomePage from "../pages/hero"

// Set axios defaults for base URL and credentials
axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

// Helper to get XSRF token from cookie
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

// Axios request interceptor to set X-XSRF-TOKEN header
axios.interceptors.request.use(config => {
  const xsrfToken = getCookie('XSRF-TOKEN');
  if (xsrfToken) {
    config.headers['X-XSRF-TOKEN'] = decodeURIComponent(xsrfToken);
  }
  return config;
});

function SignInForm({ onSwitch, onSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    try {
      // Ensure CSRF cookie is set before login
      await axios.get('/sanctum/csrf-cookie');
      // Login request to API endpoint
      const res = await axios.post('/api/login', { email, password });
      setError('');
      setSuccess('Sign in successful!');
      // Store token if needed
      if (res.data && res.data.token) {
        localStorage.setItem('token', res.data.token);
      }
      // Get name from response (adjust if your API returns it differently)
      const name = res.data && res.data.user && res.data.user.name
        ? res.data.user.name
        : (res.data && res.data.name ? res.data.name : '');
      if (onSuccess) onSuccess(name); // <-- Pass name to parent
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Sign in failed');
      }
    }
    setLoading(false);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      {error && <div className="response-error">{error}</div>}
      {success && <div className="response-success">{success}</div>}
      <div className="form-group">
        <label htmlFor="signin-email">Email</label>
        <input
          id="signin-email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          autoComplete="username"
        />
      </div>
      <div className="form-group">
        <label htmlFor="signin-password">Password</label>
        <input
          id="signin-password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      </div>
      <button type="submit" className="auth-btn" disabled={loading}>
        {loading ? 'Signing In...' : 'Sign In'}
      </button>
      <p>
        Don't have an account?{' '}
        <button type="button" className="switch-btn" onClick={onSwitch}>Sign Up</button>
      </p>
    </form>
  );
}

function SignUpForm({ onSwitch }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (password !== confirm) {
      setError('Passwords do not match');
      return;
    }
    setLoading(true);
    try {
      // Ensure CSRF cookie is set before register
      await axios.get('/sanctum/csrf-cookie');
      // Register request to API endpoint
      const res = await axios.post('/api/register', {
        name,
        email,
        password,
        password_confirmation: confirm,
      });
      setError('');
      setSuccess('Sign up successful!');
      // Store token if needed
      if (res.data && res.data.token) {
        localStorage.setItem('token', res.data.token);
      }
    } catch (err) {
      // Handle multiple errors from backend
      if (err.response && err.response.data) {
        if (err.response.data.errors) {
          // Laravel validation errors
          const messages = Object.values(err.response.data.errors).flat().join(' ');
          setError(messages);
        } else if (err.response.data.message) {
          setError(err.response.data.message);
        } else {
          setError('Sign up failed');
        }
      } else {
        setError('Sign up failed');
      }
    }
    setLoading(false);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      {error && <div className="response-error">{error}</div>}
      {success && <div className="response-success">{success}</div>}
      <div className="form-group">
        <label htmlFor="signup-name">Name</label>
        <input
          id="signup-name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          autoComplete="name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="signup-email">Email</label>
        <input
          id="signup-email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          autoComplete="username"
        />
      </div>
      <div className="form-group">
        <label htmlFor="signup-password">Password</label>
        <input
          id="signup-password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete="new-password"
        />
      </div>
      <div className="form-group">
        <label htmlFor="signup-confirm">Confirm Password</label>
        <input
          id="signup-confirm"
          type="password"
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
          autoComplete="new-password"
        />
      </div>
      <button type="submit" className="auth-btn" disabled={loading}>
        {loading ? 'Signing Up...' : 'Sign Up'}
      </button>
      <p>
        Already have an account?{' '}
        <button type="button" className="switch-btn" onClick={onSwitch}>Sign In</button>
      </p>
    </form>
  );
}

function App() {
  const [showSignIn, setShowSignIn] = useState(true)
  const [count, setCount] = useState(0)
  const [signedIn, setSignedIn] = useState(false)
  const [userName, setUserName] = useState('') // <-- Add state for name

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Welcome</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
      <div className="auth-container">
        {signedIn ? (
          <WelcomePage name={userName} /> // <-- Pass name prop
        ) : showSignIn ? (
          <SignInForm
            onSwitch={() => setShowSignIn(false)}
            onSuccess={(name) => {
              setSignedIn(true);
              setUserName(name);
            }}
          />
        ) : (
          <SignUpForm onSwitch={() => setShowSignIn(true)} />
        )}
      </div>
      <p className="read-the-docs">
        Sign In or Sign Up to continue to our website
      </p>
    </>
  )
}

export default App
