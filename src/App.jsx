import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";

function App() {
  const [data, setData] = useState([]);
  return (
    <>
      <Header data={data} />
      <div className="wrapper">
        <Main data={data} setData = {setData}/>
      </div>
    </>
  );
}

export default App;
