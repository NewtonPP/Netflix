import "../Styles/NotFound.css"
import { useNavigate } from "react-router-dom"
const NotFound = () => {
    const Navigate = useNavigate();
  return (
    <>
   <div className="NotFoundPage">
        <div className="header">
        <img className={"Logo"} src="/Images/Netflix-logo.png"></img>
        </div>
        <img className={"LostinSpace"} src="/Images/LostInSpace.avif"></img>
        <div className="NotFoundContent">
            <h1>Lost Your Way?</h1>
            <p>Sorry, we can't find that page. You'll find lots to explore on the home page</p>
            <button onClick={()=>Navigate("/")}>Netflix Home</button>
        </div>
   </div>
   </>
  )
}

export default NotFound
