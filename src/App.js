import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Content from "./components/Content/Content";
import ModalsContainer from "./components/Modal/ModalsContainer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div id="home" className="App">
      <Header />
      <NavBar />
      <Content />
      <div className="footer-spacer" />
      <Footer />
      <ModalsContainer />
    </div>
  );
}

export default App;
