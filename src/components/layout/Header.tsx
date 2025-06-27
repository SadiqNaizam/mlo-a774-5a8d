import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LockKeyhole, LayoutDashboard, User, LogOut, Settings } from 'lucide-react';

const Header: React.FC = () => {
  // NOTE: This is a mock authentication state for demonstration purposes.
  // In a real application, this would come from a context, store, or hook.
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  console.log('Header loaded');

  const handleLogout = () => {
    // In a real app, this would clear tokens, update state management, etc.
    setIsAuthenticated(false);
    console.log('User logged out');
  };
  
  // Mock function to simulate login
  const handleLogin = () => setIsAuthenticated(true);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <LockKeyhole className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">SwiftLogin</span>
        </Link>

        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                <NavLink 
                  to="/dashboard"
                  className={({ isActive }) => 
                    `transition-colors hover:text-foreground/80 ${isActive ? 'text-foreground' : 'text-foreground/60'}`
                  }
                >
                  <div className="flex items-center gap-2">
                    <LayoutDashboard className="h-4 w-4" />
                    Dashboard
                  </div>
                </NavLink>
              </nav>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="@user" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">User</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        user@example.com
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile-settings" className="cursor-pointer">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Profile Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-500 focus:text-red-500">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              {/* This button is for demo purposes to simulate logging in */}
              <Button variant="outline" size="sm" onClick={handleLogin}>
                Simulate Login
              </Button>
              <nav className="flex items-center gap-2">
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/">Login</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link to="/sign-up">Sign Up</Link>
                </Button>
              </nav>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;