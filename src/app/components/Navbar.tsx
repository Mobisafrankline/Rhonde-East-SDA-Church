import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Moon, Sun, Menu, X, Church } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/beliefs', label: 'SDA Beliefs' },
    { to: '/ministries', label: 'Ministries' },
    { to: '/sermons', label: 'Sermons & Media' },
    { to: '/events', label: 'Events' },
    { to: '/live', label: 'Live Worship' },
    { to: '/announcements', label: 'News' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      {/* Top Layer - Logo, Members, Give, Theme Toggle */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <Church className="h-8 w-8 text-primary" />
              <span className="text-xl font-heading font-semibold">Rhonde East SDA</span>
            </Link>

            {/* Right side - Members, Give, Theme Toggle */}
            <div className="hidden md:flex items-center gap-3">
              <Button variant="outline" size="sm" asChild>
                <Link to="/members">Members</Link>
              </Button>
              <Button variant="default" size="sm" asChild>
                <Link to="/giving">Give</Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Layer - Main Navigation Links */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-8 h-12">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary relative group ${
                  location.pathname === link.to ? 'text-primary' : 'text-foreground'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-3 left-0 right-0 h-0.5 bg-primary transition-all ${
                    location.pathname === link.to ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                  }`}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-3 py-2 rounded-md text-base transition-colors ${
                  location.pathname === link.to
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-2 border-t mt-4">
              <Button variant="outline" className="w-full" asChild>
                <Link to="/members">Members Portal</Link>
              </Button>
              <Button variant="default" className="w-full" asChild>
                <Link to="/giving">Give</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}