
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserIcon, MessageSquare, ImageIcon, ShoppingBag } from "lucide-react";

const DashboardPanel = () => {
  // Simulated data - in a real app, this would come from your database
  const stats = [
    { 
      title: "Total Form Submissions", 
      value: 38, 
      icon: <MessageSquare className="h-5 w-5 text-blue-500" />,
      change: "+12% from last month",
      color: "bg-blue-50" 
    },
    { 
      title: "Total Products", 
      value: 24, 
      icon: <ShoppingBag className="h-5 w-5 text-amber-500" />,
      change: "+3 new products",
      color: "bg-amber-50" 
    },
    { 
      title: "Gallery Items", 
      value: 56, 
      icon: <ImageIcon className="h-5 w-5 text-green-500" />,
      change: "+8 new images",
      color: "bg-green-50" 
    },
    { 
      title: "Users", 
      value: 152, 
      icon: <UserIcon className="h-5 w-5 text-purple-500" />,
      change: "+24% from last month",
      color: "bg-purple-50" 
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardHeader className={`flex flex-row items-center justify-between pb-2 ${stat.color} rounded-t-lg`}>
                <CardTitle className="text-md font-medium">{stat.title}</CardTitle>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                  {stat.icon}
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: "New form submission", time: "2 minutes ago" },
                { action: "Product 'School Uniform' updated", time: "3 hours ago" },
                { action: "New image added to gallery", time: "Yesterday" },
                { action: "User login", time: "2 days ago" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b pb-2 last:border-0">
                  <p className="text-sm font-medium">{item.action}</p>
                  <p className="text-xs text-gray-500">{item.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg cursor-pointer flex items-center justify-center flex-col text-center transition-colors">
                <ShoppingBag className="h-8 w-8 text-brand mb-2" />
                <p className="font-medium">Add New Product</p>
              </div>
              <div className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg cursor-pointer flex items-center justify-center flex-col text-center transition-colors">
                <ImageIcon className="h-8 w-8 text-brand mb-2" />
                <p className="font-medium">Upload to Gallery</p>
              </div>
              <div className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg cursor-pointer flex items-center justify-center flex-col text-center transition-colors">
                <MessageSquare className="h-8 w-8 text-brand mb-2" />
                <p className="font-medium">View Messages</p>
              </div>
              <div className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg cursor-pointer flex items-center justify-center flex-col text-center transition-colors">
                <UserIcon className="h-8 w-8 text-brand mb-2" />
                <p className="font-medium">User Management</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPanel;
