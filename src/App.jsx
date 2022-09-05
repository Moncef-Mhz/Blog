import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./screen/Home";

function App() {
  return (
    <>
      <div className="">
        <Header />
        <Home />
      </div>
    </>
  );
}

export default App;
