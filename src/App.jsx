import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';
import Login from './pages/Login';
import { useSelector } from 'react-redux';

function App() {
  const { user } = useSelector(state => state.user);

  return (
    <Routes>
      <Route
        path='/'
        element={ user !== null ? <Navigate to='/pokemones' /> : <Login /> } />
      <Route
        path='/pokemones'
        element={ user !== null ? <Home /> : <Navigate to='/' /> } />
      <Route
        path='/pokemon/:id'
        element={ user !== null ? <Pokemon /> : <Navigate to='/' /> } />
    </Routes>
  )
}

export default App
