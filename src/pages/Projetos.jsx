import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ComponentProjects from "../components/Projects";
import "./Projetos.css";

function Projects() {
  return (
    <div className="container">
      <NavBar />
      <ComponentProjects />
      <Footer />
    </div>
  );
}
export default Projects;
