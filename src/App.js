import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home';
import CBB from './components/cbb';
import NBA from './components/nba';
import NFL from './components/nfl';
import MLB from './components/mlb';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/CBB' element={<CBB />} />
        <Route path='/NBA' element={<NBA />} />
        <Route path='/NFL' element={<NFL />} />
        <Route path='/MLB' element={<MLB />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
