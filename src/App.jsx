import './App.css'
import { Home } from './components/Home/Home'
import { NavBar } from './components/NavBar/NavBar'
import { Profile } from './components/Profile/Profile'
import { Register } from './components/Register/Register'
import { Login } from './components/login/Login'
import { AuthProvider } from './context/AuthContext'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {


  return (
    <>
      <AuthProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login />} />
            <Route path='/registro' element={<Register />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  )
}

export default App
