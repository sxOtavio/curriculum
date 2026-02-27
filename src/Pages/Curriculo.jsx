import NavBar from "../components/NavBar";
import Profile from "../components/Profile";
import Footer from "../components/Footer";
import Curriculum from "../components/Curriculum";
import DownloadButton from "../components/DownloadButton";
import "./Curriculo.css";

function Curriculo() {
  return (
    <div className="container">
      <NavBar />
      <DownloadButton />
      <Curriculum />
      <Footer />
    </div>
  );
}
export default Curriculo;
