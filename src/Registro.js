import { useState } from 'react';

import './Login.css';

function Registro() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

let id= Math.random().toString(36);

const PostGoogleSheet = () => {
    fetch("https://sheet.best/api/sheets/7428bda3-4f1c-49e3-b403-679be3b8e759", {
  method: "POST",
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify([
    {
      Id: id,
      Correo: email,
      Clave: password,
      
    },

  ]),
})
  .then((r) => r.json())
  .then((data) => {
    // The response comes here
    console.log(data);
  })
  .catch((error) => {
    // Errors are reported there
    console.log(error);
  });

  };


  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Realiza la validación y el registro del usuario aquí
    PostGoogleSheet();
    
    alert(`Se ha registrado el usuario ${id} con ${email} con el correo ${password}.`);
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
    </div>

    <div className="contenido">
      <label>
        Correo electrónico:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Contraseña:
        <input  type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button className="boton" type="submit">Registrarse</button>

    </div>
    </form>
  );
}

export default Registro;