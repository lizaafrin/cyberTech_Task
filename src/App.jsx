import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCancel, faCross, faXmark } from '@fortawesome/free-solid-svg-icons'
import Maincontent from './components/Maincontent';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

function App() {

  const navItems = <>
    <li className='active:bg-blue-500s'><a>Home</a></li>
    <li><a>About</a></li>
    <li><a>Blog</a></li>
    <li><a>Contact</a></li>
  </>

  return (
    <div className="App">
      
    </div>
  )
}

export default App;
