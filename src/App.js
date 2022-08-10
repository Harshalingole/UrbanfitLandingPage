import "./App.css";
import Home from "./Pages/Home/Home";
import Why from "./Pages/Why/Why";
import Location from "./Pages/Location/Location.jsx";
import Franchise from "./Pages/Franchise/Franchise";
import Procedure from "./Pages/Procedure/Procedure";
import Footer from "./Pages/Footer/Footer";
import Map from "./Pages/Map/Map";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <>
      <div className="App bg-body-black h-auto p-10 overflow-hidden">
        <Home />
        <Why />
        <Location />
        <Franchise />
        <Procedure />
        <Contact />
      </div>
      <Map />
      <Footer />
    </>
  );
}

export default App;
