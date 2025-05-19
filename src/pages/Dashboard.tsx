
import { useState } from "react";
import { DashboardTable } from "@/components/DashboardTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("all-articles");
  const navigate = useNavigate();
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Articles</h1>
        <Button 
          className="flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/80"
          onClick={() => navigate("/create-article")}
        >
          <PlusCircle className="h-4 w-4" />
          Create Article
        </Button>
      </div>

      <div className="flex flex-col gap-4 justify-between">
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
      </div>
    </div>
  );
};

export default Dashboard;
