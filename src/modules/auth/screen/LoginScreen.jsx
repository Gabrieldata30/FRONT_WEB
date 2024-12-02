import React, { useContext, useState } from "react";
import { AuthContext } from "../componentes/LoginForm";
import Headers from "../componentes/Header";
import Footer from "../componentes/Footer";
import "./LoginScreen.css";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const { login } = useContext(AuthContext);

    const navigate=useNavigate();

    const IrRegister=()=>{
      navigate('/Register')
    }
  
    return (
      <div>
        <Headers></Headers>
        <div className="login-container">
         
          <form className="login-form">
            <h3>Accede a tu cuenta</h3>
            <input
              id="username"
              className="login-input"
              type="email"
              placeholder="Correo"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
           
            <input
              id="password"
              className="login-input"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="login-button"
              onClick={(e) => {
                e.preventDefault();
                login(username, password);
              }}
            >
              Iniciar Sesión
            </button>
            <button className="login-button" onClick={() => IrRegister()}>
              Regístrate
            </button>
          </form>
        </div>
        <Footer />
      </div>
    );
  };
  
  export default LoginScreen;

