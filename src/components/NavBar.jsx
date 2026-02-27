import { useNavigate } from "react-router-dom";
function NavBar() {
  const navigate =useNavigate();
    return (
    
      <div className="navBar">
        <div> <button onClick={()=>navigate("/")}>Inicio</button> </div>
        <div> <button onClick={()=>navigate("/curriculum")}>Curriculo</button> </div>
        <div> <button onClick={()=>navigate("/projects")}>Projetos</button> </div>
      </div>
  )
}

export default NavBar;
