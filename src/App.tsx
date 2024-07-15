import React from "react";
import Sidebar from "./modules/sidebar";
import MainContent from "./modules/main";

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default App;
