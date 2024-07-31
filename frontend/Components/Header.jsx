import "../Styles/Header.css"
import { useNavigate } from "react-router-dom"
const Header = () => {
  const Navigate = useNavigate();
  return (
    <>
    <div className="HeaderContainer">
        <img className="NetflixLogo" src="/Images/Netflix-logo.png"></img>
        <select name="Languages" className="LanguagesContainer">
            <option value="English">English</option>
            <option value="Espanol">Espanol</option>
        </select>
        <button className="SigninButton" type="button" onClick={()=>Navigate("/login")}>Sign in</button>
    </div>
    </>
  )
}

export default Header
