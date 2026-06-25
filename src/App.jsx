import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Welcome from './pages/welcome/Welcome'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import  Account  from './pages/account/Account'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/account' element={<Account/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
