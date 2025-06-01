import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MotorcycleDetail from "./pages/MotorcycleDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/motorcycle/:id" element={<MotorcycleDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
