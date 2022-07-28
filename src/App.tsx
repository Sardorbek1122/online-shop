import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { AboutPage } from './Pages/AboutPage';
import { StorePage } from './Pages/StorePage';
import { Navbar } from './Components/Navbar/Navbar';
import { ShoppingCartProvider } from './Context/ShoppingCartContext';

const App = () => (
  <ShoppingCartProvider>
    <Navbar />
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route
        path="/store"
        element={<StorePage />}
      />

      <Route
        path="/about"
        element={<AboutPage />}
      />
    </Routes>
  </ShoppingCartProvider>
);

export default App;
