import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<Login />} />
      <Route
        path='/pokemones'
        element={<Home />} />
      <Route
        path='/pokemon/:id'
        element={<Pokemon />} />
    </Routes>
  )
}

export default App
