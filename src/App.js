import './App.css';
import 'bulma@0.9.0/css/bulma.min.css';
import { Banner } from"./components/Banner";
import { NavBar } from"./components/NavBar";
import { Skills } from"./components/Skills";
import { Projects } from"./components/Projects";
import { Contact } from"./components/Contact";
import { Footer } from"./components/Footer";

function App() {
  return (
    <div className="App">
      <Banner />
      <NavBar />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
