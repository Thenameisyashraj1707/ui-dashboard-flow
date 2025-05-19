
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

const Settings = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "Admin User",
    email: "admin@example.com",
    timezone: "UTC+00:00"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSaveChanges = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast.success("Settings saved successfully!");
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences.</p>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="bg-background/60 backdrop-blur-sm">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
        </TabsList>
        <TabsContent value="general" className="space-y-4">
          <Card className="border-2 shadow-md hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>
                Update your personal information.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    className="focus:ring-2 focus:ring-primary/25" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    placeholder="Your email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    className="focus:ring-2 focus:ring-primary/25" 
                  />
                </div>
              </div>
              <Button 
                onClick={handleSaveChanges} 
                disabled={loading}
                className="relative overflow-hidden shadow-lg hover:shadow-xl bg-gradient-to-r from-primary to-primary/80 transition-all duration-300"
              >
                {loading ? "Saving..." : "Save changes"}
              </Button>
            </CardContent>
          </Card>
          
          <Card className="border-2 shadow-md hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Update your account settings.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Input 
                  id="timezone" 
                  placeholder="Your timezone" 
                  value={formData.timezone}
                  onChange={handleInputChange}
                  className="focus:ring-2 focus:ring-primary/25"
                />
              </div>
              <Button 
                onClick={handleSaveChanges} 
                disabled={loading}
                className="relative overflow-hidden shadow-lg hover:shadow-xl bg-gradient-to-r from-primary to-primary/80 transition-all duration-300"
              >
                {loading ? "Saving..." : "Save changes"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notifications" className="space-y-4">
          <Card className="border-2 shadow-md hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Manage how you receive notifications.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications via email.
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Push Notifications</p>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications via push notifications.
                  </p>
                </div>
                <Switch />
              </div>
              <Button 
                onClick={handleSaveChanges} 
                disabled={loading}
                className="relative overflow-hidden shadow-lg hover:shadow-xl bg-gradient-to-r from-primary to-primary/80 transition-all duration-300"
              >
                {loading ? "Saving..." : "Save changes"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="appearance" className="space-y-4">
          <Card className="border-2 shadow-md hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle>Theme</CardTitle>
              <CardDescription>
                Manage your theme preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Dark Mode</p>
                  <p className="text-sm text-muted-foreground">
                    Enable dark mode for the dashboard.
                  </p>
                </div>
                <Switch />
              </div>
              <Button 
                onClick={handleSaveChanges} 
                disabled={loading}
                className="relative overflow-hidden shadow-lg hover:shadow-xl bg-gradient-to-r from-primary to-primary/80 transition-all duration-300"
              >
                {loading ? "Saving..." : "Save changes"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
