import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import LandingPage from "./components/LandingPage";
import NavigationBar from "./components/NavigationBar/NavigationBar";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className="home">
        <LandingPage />
      </div>
      <div className="about">
        <About />
      </div>
      <div className="contact">
        <Home />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
