import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/GoogleMeet/Home'
import Room from './components/GoogleMeet/Room'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/room/:roomId" element={<Room/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
