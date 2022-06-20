import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DataList from "./pages/DataList";
import Alert from "./components/Alert";
function App() {
  return (
    <div className="App container">
      <Alert />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scrapted-data" element={<DataList />} />
          <Route path="*" element={<h6>Route not found!!</h6>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
