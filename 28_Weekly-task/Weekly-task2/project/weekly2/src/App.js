import "./App.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Footer />
      <div className="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
