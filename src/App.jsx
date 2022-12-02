import "./App.scss";
import Nav from "./components/nav/Nav";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Testimonial from "./components/testimonial/Testimonial";
import Outro from "./components/outro/Outro";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <About />
      <Testimonial />
      <Outro />
      <Footer />
    </div>
  );
};

export default App;
