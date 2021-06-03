import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Content from "./components/Content/Content";
import Personal from "./components/Sections/Personal/Personal";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Content />
      <Personal />
    </div>
  );
}

export default App;
