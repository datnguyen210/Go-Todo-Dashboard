import React from "react";
import { Main } from "./main";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./modules/common/sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1">
          <Main />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
