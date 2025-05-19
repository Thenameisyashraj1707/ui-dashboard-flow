
import { useState } from "react";
import { DashboardTable } from "@/components/DashboardTable";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search, PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("all-articles");
  const navigate = useNavigate();
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Articles</h1>
        <Button 
          className="hidden md:flex items-center gap-2"
          onClick={() => navigate("/create-article")}
        >
          <PlusCircle className="h-4 w-4" />
          Create Article
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <Tabs 
          defaultValue="all-articles" 
          className="w-full" 
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="grid grid-cols-4 w-fit">
            <TabsTrigger value="all-articles">All Articles</TabsTrigger>
            <TabsTrigger value="published-articles">Published Articles</TabsTrigger>
            <TabsTrigger value="scheduled-articles">Scheduled Articles</TabsTrigger>
            <TabsTrigger value="archived-articles">Archived Articles</TabsTrigger>
          </TabsList>
          
          <div className="mt-4">
            <TabsContent value="all-articles" className="m-0">
              <DashboardTable />
            </TabsContent>
            <TabsContent value="published-articles" className="m-0">
              <DashboardTable filter="published" />
            </TabsContent>
            <TabsContent value="scheduled-articles" className="m-0">
              <DashboardTable filter="scheduled" />
            </TabsContent>
            <TabsContent value="archived-articles" className="m-0">
              <DashboardTable filter="archived" />
            </TabsContent>
          </div>
        </Tabs>

        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for articles..."
            className="pl-8 w-full sm:w-[300px] bg-background"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
