import "./App.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Footer />
      <Profile />
      <div className="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
