import logo from './logo.svg';
import './App.css';
import logo2 from './logo2podcast.jpg';

function App() {

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validar las credenciales del usuario aquí
    
    
      window.location.href = '/Login';
   
  };

  
  return (
    <form onSubmit={handleSubmit}>
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/Login">Iniciar sesión</a></li>
            <li><a href="/Registro">Registrarse</a></li>
            <li><a href="/EliminarM">Modificar</a></li>
          </ul>
        </nav>

        
      </header>
      
      <div className="logo-container">
        <img src={logo2} className="App-logo" alt="logo" />
        <h1>Bienvenido a nuestra pagina para podcast</h1>
        </div>
        
        <main>
        
        <p>Por favor, inicia sesión o regístrate para continuar</p>
        <button type="submit">Iniciar sesión</button>
    
      </main>
      </div>
    
    </form>
  );
}

export default App;
