import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import Home from './pages/Home';
import PostDetails from './pages/PostDetails';
import Header from './components/Header';
import PostCreate from './pages/PostCreate';

const App = () => (
  <DataProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/list" element={<Home />} />
        <Route path="/details/:id" element={<PostDetails />} />
        <Route path="/create" element={<PostCreate />} />
      </Routes>
    </Router>
  </DataProvider>
);

export default App;