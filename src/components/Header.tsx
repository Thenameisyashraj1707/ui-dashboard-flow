
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="border-b border-border flex items-center h-14 px-4 md:px-6">
      <SidebarTrigger className="lg:hidden mr-2" />
      <div className="flex-1 flex items-center">
        <div className="relative max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for articles..."
            className="pl-8 w-full md:w-[300px] bg-background"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
