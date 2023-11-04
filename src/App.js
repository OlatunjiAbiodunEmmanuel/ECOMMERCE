
import './App.css';
import NavBar from './NavBar';
import Error404 from './Error404';
import HeroSection from './HeroSection';
import Header from './Header';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App bg-secondary">
      <BrowserRouter>
    <NavBar/>
    <HeroSection/>
    <Header/>

    <Routes>
    <Route path='/' element={<NavBar/>}/>
    {/* <Route path='/Contact' element={<Contact/>}/> */}
    {/* <Route path='/AMBASSADORS & LEMO CLUB' element={<Ambasado/>}/> */}
    <Route path='*' element={<Error404/>}/>
    </Routes>
    
      {/* <Footer/> */}
    </BrowserRouter>
    </div>
  );
}

export default App;
