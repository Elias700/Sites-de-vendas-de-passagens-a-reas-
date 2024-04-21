
import './App.css'
import Principal from './components/main/main'
import Passagens from './components/passagens/passagens'
import Login from './components/login/login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  

  return (
    <>


      <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login />}/>
            <Route path='/' element={<Principal />}/>
            <Route path='/passagens' element={<Passagens />}/>
        </Routes>
      </BrowserRouter>


    </>
      
  )
}

export default App
