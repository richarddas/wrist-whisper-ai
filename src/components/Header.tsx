import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-navy py-4 shadow-md">
      <div className="section-container">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="bg-teal text-white w-8 h-8 rounded-full flex items-center justify-center mr-2">
              w
            </span>
            <span className="text-2xl font-bold text-white">wristGPT</span>
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-silver-light hover:text-teal transition-colors">
              Home
            </Link>
            <Link to="/terms" className="text-silver-light hover:text-teal transition-colors">
              Terms
            </Link>
            <Link to="/privacy" className="text-silver-light hover:text-teal transition-colors">
              Privacy
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
