import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Signup } from './components/LoginSignup/Signup';
import { Login } from './components/LoginSignup/Login';


function App() {
  return (
    <div>
      <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;


