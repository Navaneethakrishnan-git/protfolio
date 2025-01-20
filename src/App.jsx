
import './App.css'
import About from './compomets/AboutMe/About'

import Home from './compomets/Home/Home'
import Navabar from './compomets/Navbar/Navabar'
import Service from './compomets/Services/Service.jsx'
import Contect from './compomets/Contect/Contect.jsx'
import Footer from './compomets/Footer/Footer.jsx'


function App() {

  return (<div>
    <Navabar/>
    <Home/>
    <About></About>
    <Service/>
    <Contect/>
    <Footer/> 
  </div>)


    
  
}

export default App
