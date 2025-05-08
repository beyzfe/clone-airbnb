import "antd/dist/reset.css";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="max-w-[1400px] mx-auto">
        <Home />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
