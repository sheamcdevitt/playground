import React, { useState } from "react";
import SideBar from "./components/SideBar";
import Topbar from "./components/Topbar";

const App = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="App">
      <Topbar setIsActive={setIsActive} isActive={isActive} />
      <SideBar isActive={isActive} />
    </div>
  );
};

export default App;
