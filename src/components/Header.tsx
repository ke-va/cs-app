import { Link } from 'react-router-dom';

const Header = () => (
<nav className="p-4 bg-blue-600 text-white flex justify-between">
    <Link to="/list" className="text-xl font-bold">Posts list</Link>
    <Link to="/create" className="text-xl font-bold">Create post</Link>
  </nav>
);

export default Header;