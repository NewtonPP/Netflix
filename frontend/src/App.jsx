import './App.css'
import Netflix from '../Pages/Netflix'
import Header from '../Components/Header'
import {BrowserRouter as Router, Routes,Route, Navigate} from "react-router-dom"
import Home from '../Pages/Home'
import Player from '../Pages/Player'
import DifferentGenreMovie from '../Pages/DifferentGenreMovie'
import Signin from '../Components/Signin'
import MyList from '../Components/MyList'
import { useAuthContext } from '../Context/AuthContext'
import NotFound from '../Pages/NotFound'

function App() {
const {authUser} = useAuthContext();

  return(
    <>
   
    <Router>

      <Routes>
      <Route path='/' element={authUser?<Home/>:<Netflix/>}/>
      <Route path='/home' element={authUser?<Home/>:<NotFound/>}/>
      <Route path='/player' element={authUser?<Player/>:<NotFound/>}/>
      <Route path='/:section' element={<DifferentGenreMovie/>}/>
      <Route path='/mylist' element={<MyList/>}/>
      <Route path='/login' element={authUser?<Home/>:<Signin/>}/>
      </Routes>
      
    </Router>
   
    </> 
  )
}

export default App
