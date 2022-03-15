import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard, Register, Enter, Error } from './pages/';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/enter" element={<Enter />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
