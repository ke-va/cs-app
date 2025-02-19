import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import Home from './pages/Home';
import PostDetails from './pages/PostDetails';
import PostCreate from './pages/PostCreate';
import Navbar from './components/Header';

const App = () => (
  <DataProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/list" element={<Home />} />
        <Route path="/details/:id" element={<PostDetails />} />
        <Route path="/create" element={<PostCreate />} />
      </Routes>
    </Router>
  </DataProvider>
);

export default App;