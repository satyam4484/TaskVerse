import React from "react";
import Layout from "./Components/Layout/Layout";
import { useGlobalContext } from "./context/context";

const App: React.FC = () => {
  const {theme} = useGlobalContext();

  console.log("theme--",theme)

  return (
    <div data-theme={theme}>
    <Layout>
      <div className="min-h-full">hello</div>
    </Layout>
    </div>
  );
};

export default App;