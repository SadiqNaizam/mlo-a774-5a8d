import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// shadcn/ui Components
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const DashboardPage = () => {
  console.log('DashboardPage loaded');
  const navigate = useNavigate();

  // In a real application, this would clear auth state/tokens.
  const handleLogout = () => {
    console.log('User logging out...');
    navigate('/'); // Navigate to the login page as per App.tsx
  };

  return (
    <div className="flex flex-col min-h-screen bg-muted/20">
      {/* The Header component manages its own state for demo purposes */}
      <Header />

      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <Card className="w-full max-w-lg shadow-lg">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Avatar className="h-24 w-24 border-4 border-primary/20">
                <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User Avatar" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>
            <CardTitle className="text-2xl">Welcome Back!</CardTitle>
            <CardDescription>You have successfully logged in. What would you like to do next?</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center text-muted-foreground">
              <p>This is your central hub. From here you can manage your account and access all features.</p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <Button asChild size="lg">
              <Link to="/profile-settings">Go to Profile Settings</Link>
            </Button>
            <Button variant="destructive" size="lg" onClick={handleLogout}>
              Logout
            </Button>
          </CardFooter>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default DashboardPage;