import React, {useEffect , useState} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './components/pages/Products';
import Login from '../src/components/pages/Login';
import Services from './components/pages/Services';
import CriarNoticia from './components/pages/CriarNoticia';
import jwtDecode from 'jwt-decode';
function App(props) {

  const [login, setLogin] = useState("");

  useEffect(async () => {
    buildJwt()
  }, [])

  const buildJwt = () => {
    try {
      const jwt = localStorage.getItem('token')
      const user = jwtDecode(jwt)
      setLogin({ email: user.email, password: user.password })
    } catch (err) { }
  }

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/noticia' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/cadastronoticia' component={CriarNoticia} />
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
