
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Membership from './pages/Membership';
import EventRegistration from './pages/EventRegistration';
import Payment from './pages/Payment';
import Contact from './pages/Contact';

// Main App Component
function App() {
  return (
    <Router>
      {/* Navbar will show on all pages */}
      <Navbar />
      
      {/* Main content area */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/memberships" element={<Membership />} />
          <Route path="/events" element={<EventRegistration />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      
      {/* Footer will show on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
