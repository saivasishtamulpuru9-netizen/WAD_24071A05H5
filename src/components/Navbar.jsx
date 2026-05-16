
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <h1>Sports Club Management</h1>
      <hr />
      <Link to="/">Home</Link> | 
      <Link to="/memberships">Memberships</Link> | 
      <Link to="/events">Events</Link> | 
      <Link to="/contact">Contact</Link> | 
      <Link to="/login">Login</Link>
      <hr />
    </div>
  );
};

export default Navbar;
