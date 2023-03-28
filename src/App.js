import { Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";

import Detail from "./pages/Detail";
import Home from "./pages/Home";

function App() {
  return (
    <GlobalProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:id" element={<Detail />} />
      </Routes>
    </GlobalProvider>
  );
}

export default App;
