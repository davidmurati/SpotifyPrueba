import { useState } from 'react';

import './Login.css';

function EliminarM() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [idinput, setidinput] = useState('');



  const Eliminar = (event) => {
    fetch(`https://sheet.best/api/sheets/7428bda3-4f1c-49e3-b403-679be3b8e759/Id/${idinput}`, {
  method: "DELETE",
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

  };


  const Modificar = (event) => {
    // Update first row setting the name to "Jack Doe"
    fetch(`https://sheet.best/api/sheets/7428bda3-4f1c-49e3-b403-679be3b8e759/Id/${idinput}`, {
    method: "PATCH",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        Correo: email,
        Clave: password,
    }),
  })
    .then((r) => r.json())
    .then(console.log)
    .catch(console.error);

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Realiza la validación y el registro del usuario aquí
    Modificar();
    
    alert(`Se ha modificado o eliminado el usuario.`);
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

      <label>
        Introduce el id a modificar o eliminar:
        <input type="idinput" value={idinput} onChange={(e) => setidinput(e.target.value)} />
      </label>
      
      <button className="boton" type="submit">Modificar</button>
      <button className="boton" onClick={Eliminar}>Eliminar cuenta</button>
      

    </div>
    </form>
  );
}

export default EliminarM;