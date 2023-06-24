import { useState, useEffect  } from 'react'

import './Login.css';



function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState([]);

  let[emails, setEmails] = useState([]);
  let[clave, setClave] = useState([]);
  

//  const readGoogleSheet1 = () => {
//    emails =[1,2];
//    setEmails(emails);
//};

  const readGoogleSheet = () => {
    // Sort results by id in descending order, take two
    // and return the age as an integer.

    fetch("https://sheet.best/api/sheets/7428bda3-4f1c-49e3-b403-679be3b8e759")
      .then((response) => response.json())
      .then((data) => {
        // Construir una cadena de texto con los valores de la hoja de cálculo
         //const text = data.map(row => `ID: ${row.Id}, Usuario: ${row.Usuario}, Correo: ${row.Correo}`).join('\n');
         //setData(text);

         emails = data.map(row => row.Correo)

        //const emails = data.map(row => `Correo: ${row.Correo}, Clave: ${row.Clave}`)
        
        setEmails(emails);

         clave = data.map(row => row.Clave)
        setClave(clave);

        

        
      });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    // Validar las credenciales del usuario aquí
    
    
    let validCredentials1 = false;
    for (let i = 0; i < emails.length; i++) {
      if (email === emails[i]) {
        validCredentials1 = true;
        break;
      }
    }

    let validCredentials2 = false;
    for (let i = 1; i < clave.length; i++) {
      if (password === clave[i]) {
        validCredentials2 = true;
        break;
      }
    }


    if (validCredentials1===true && validCredentials2===true) {
      window.location.href = '/Principal';
    } else {
      alert('Correo electrónico o contraseña incorrectos');
    }
  };

  
  useEffect(() => {
   readGoogleSheet();
    
 }, []);

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
        <input  type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Contraseña:
        <input  type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button className="boton" type="submit">Iniciar sesión</button  >

      <textarea value={JSON.stringify(clave)} readOnly />

      
    </div> 
    </form>
    
  );

}

export default Login