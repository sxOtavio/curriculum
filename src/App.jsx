import "./App.css";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        <Profile />
        <Footer />
      </div>
    </>
  );
}

export default App;
