import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const close = () => setOpen(false);

  return (
    <nav className="fixed top-6 right-6 z-50">
      <div className="md:hidden">
        <Button variant="ghost" size="icon" onClick={toggle}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
        {open && (
          <div className="mt-2 flex flex-col items-end space-y-2 bg-background/80 backdrop-blur-sm rounded-md p-4 shadow">
            <Link to="/" onClick={close} className="hover:text-primary">
              Accueil
            </Link>
            <Link to="/overlay-pro-tt" onClick={close} className="hover:text-primary">
              Overlay Pro TT
            </Link>
            <Link to="/about" onClick={close} className="hover:text-primary">
              A propos
            </Link>
          </div>
        )}
      </div>
      <ul className="hidden md:flex space-x-6 items-center">
        <li>
          <Link to="/" className="text-sm font-medium hover:text-primary">
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/overlay-pro-tt" className="text-sm font-medium hover:text-primary">
            Overlay Pro TT
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-sm font-medium hover:text-primary">
            A propos
          </Link>
        </li>
      </ul>
    </nav>
  );
}
