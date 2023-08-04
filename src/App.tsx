import { useState } from "react";
import "./App.css";
import Home from "./pages/home/Home";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
