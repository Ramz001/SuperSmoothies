import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./routes/Home";
import Create from "./routes/Create";
import Update from "./routes/Update";

//01R1iN2lXrPTtWij

function App() {
  return (
    <BrowserRouter>
      <nav>
        <h1>Super Smoothies</h1>
        <Link to="/">Home</Link>
        <Link to="/create">Create New Smoothie</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
