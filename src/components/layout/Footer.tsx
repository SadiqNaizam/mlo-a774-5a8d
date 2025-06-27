import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/40 border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:h-20 md:flex-row md:py-0">
        <div className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {currentYear} SwiftLogin. All rights reserved.
        </div>
        <nav className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link to="/privacy-policy" className="transition-colors hover:text-foreground">
            Privacy Policy
          </Link>
          <Link to="/terms-of-service" className="transition-colors hover:text-foreground">
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;