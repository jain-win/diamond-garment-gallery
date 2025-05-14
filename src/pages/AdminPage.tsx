
import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useToast } from '@/hooks/use-toast';
import FormSubmissionsPanel from '@/components/admin/FormSubmissionsPanel';
import ProductsManagement from '@/components/admin/ProductsManagement';
import GalleryManagement from '@/components/admin/GalleryManagement';
import DashboardPanel from '@/components/admin/DashboardPanel';
import { Skeleton } from "@/components/ui/skeleton";

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const adminToken = localStorage.getItem('adminToken');
    setIsLoggedIn(!!adminToken);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Demo login - in a real app, this would validate against Supabase
    if (email === 'admin@example.com' && password === 'admin123') {
      // Store token in localStorage
      localStorage.setItem('adminToken', 'demo-admin-token');
      setIsLoggedIn(true);
      toast({
        title: "Login successful",
        description: "Welcome to the admin panel!",
      });
    } else {
      toast({
        title: "Login failed",
        description: "Invalid email or password",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsLoggedIn(false);
    navigate('/admin');
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
  };

  // Show loading state
  if (isLoggedIn === null) {
    return (
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <Skeleton className="h-8 w-3/4 mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-5/6 mb-8" />
          <Skeleton className="h-10 w-full mb-4" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
    );
  }

  // Login form
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Admin Login</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-brand hover:bg-brand-dark"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </Button>
              <p className="text-sm text-center text-gray-500 mt-4">
                Demo credentials: admin@example.com / admin123
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Admin dashboard
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
          <Button variant="outline" onClick={handleLogout}>Logout</Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="mb-8 bg-white p-1 rounded shadow">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="submissions">Form Submissions</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
          </TabsList>
          
          <TabsContent value="dashboard" className="mt-0">
            <DashboardPanel />
          </TabsContent>
          
          <TabsContent value="submissions" className="mt-0">
            <FormSubmissionsPanel />
          </TabsContent>
          
          <TabsContent value="products" className="mt-0">
            <ProductsManagement />
          </TabsContent>
          
          <TabsContent value="gallery" className="mt-0">
            <GalleryManagement />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminPage;
