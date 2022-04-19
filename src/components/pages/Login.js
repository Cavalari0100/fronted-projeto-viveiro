import React, { useEffect, useState } from 'react';
import './Login.css';
import axios from 'axios';
function Login(props) {

  const [newLogin, setLogin] = useState({ email: '', password: '' });
  const url = 'http://localhost:3001/loginfuncionario'

  const onChange = (e) => {
    e.persist();
    setLogin({ ...newLogin, [e.target.name]: e.target.value });
  }

  const Login = async (e) => {
    e.preventDefault();
    const result = await axios.post(url, newLogin).then(res => {
      return res.data;
    }).catch(err => {
      return false;
    })
    console.log(result);
    if (result.token) {
      localStorage.setItem("token", result.token);
      window.location = "/cadastronoticia"
    } else {
      alert("Você esta com problema de BIOs (bixo ignorante operando o sistema) ERRO!!!!!!")
    }

  }
  return (
    <div style={{ padding: "4rem" }}>
      <div className='login__box'>
        <form>
          <label for='email'>E-mail</label>
          <input type="email" name="email" id="email" placeholder="Digite seu email de contato" value={newLogin.email} onChange={onChange}></input>
          <br />
          <label for='senha'>Password</label>
          <input type="password" name="password" id="passWord" placeholder="Digite uma senha para acesso" value={newLogin.password} onChange={onChange}></input>
        <div><button  style={{ background: "#3399ff" }} type="submit" /* className="btn btn-secondary mb-1" */ block onClick={() => Login()}>Login</button></div>
        </form>
      </div>
    </div>
  );
}
export default Login;