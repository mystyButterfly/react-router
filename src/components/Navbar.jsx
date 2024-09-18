import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      
        <Link to="/dashboard/overview">Overview</Link>
        <Link to="/dashboard/settings">Settings</Link>
      
    </nav>
  );
}
export default Navbar;