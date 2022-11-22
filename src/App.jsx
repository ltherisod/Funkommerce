import Nav from './components/Nav/NavBar'
import Home from './pages/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
