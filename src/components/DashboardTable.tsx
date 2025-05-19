
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { MoreHorizontal, Eye, Edit, Trash2 } from "lucide-react";
import { TableLoader } from "@/components/Loader";

// Mock article data
const articlesData = [
  {
    id: 1,
    title: "How to improve Your Skills in League of Legends",
    category: "league of legends [23456000]",
    words: 4879,
    createdOn: "29 hours ago",
    status: "published",
  },
  {
    id: 2,
    title: "Master Valorant Aiming in League of Legends",
    category: "league of legends [23456000]",
    words: 3542,
    createdOn: "29 hours ago",
    status: "published",
  },
  {
    id: 3,
    title: "7 Tips for Better Teamplay in League of Legends",
    category: "league of legends [23456000]",
    words: 2520,
    createdOn: "4 days ago",
    status: "published",
  },
  {
    id: 4,
    title: "The Virtual Economy: Assistant Services 2024",
    category: "virtual assistants [237013]",
    words: 3430,
    createdOn: "7 Oct, 24",
    status: "scheduled",
  },
  {
    id: 5,
    title: "Unleashed Graphic Design Solutions",
    category: "unleashed graphic design services [1205]",
    words: 1785,
    createdOn: "5 Oct, 24",
    status: "published",
  },
  {
    id: 6,
    title: "Top Growth Payment Methods for Quick Access to Funds",
    category: "amazon payments [35003]",
    words: 3547,
    createdOn: "2 Oct, 24",
    status: "published",
  },
  {
    id: 7,
    title: "Backlinks VS What are backlinks and why they're important (First template)",
    category: "backlinks [2050]",
    words: 2001,
    createdOn: "1 Oct, 24",
    status: "draft",
  },
  {
    id: 8,
    title: "A Complete AI SEO Guide to 2024 (Beyond & Onwards)",
    category: "ai seo software [500]",
    words: 1643,
    createdOn: "28 Sep, 24",
    status: "draft",
  },
  {
    id: 9,
    title: "Unleashed Graphic Design Services You Can Rely On",
    category: "unleashed graphic design services [1205]",
    words: 1578,
    createdOn: "26 Sep, 24",
    status: "archived",
  },
];

interface DashboardTableProps {
  filter?: "all" | "published" | "scheduled" | "draft" | "archived";
}

export const DashboardTable = ({ filter = "all" }: DashboardTableProps) => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState<typeof articlesData>([]);

  // Simulate a loading state and data fetch
  useState(() => {
    setTimeout(() => {
      const filteredArticles = filter === "all" 
        ? articlesData 
        : articlesData.filter(article => article.status === filter);
      setArticles(filteredArticles);
      setLoading(false);
    }, 1000);
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "published":
        return <Badge className="bg-green-500">Published</Badge>;
      case "scheduled":
        return <Badge className="bg-amber-500">Scheduled</Badge>;
      case "draft":
        return <Badge variant="outline">Draft</Badge>;
      case "archived":
        return <Badge variant="secondary">Archived</Badge>;
      default:
        return null;
    }
  };

  if (loading) {
    return <TableLoader />;
  }

  return (
    <div className="border rounded-lg bg-white overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[40px]">
              <Checkbox />
            </TableHead>
            <TableHead>Article Title</TableHead>
            <TableHead className="hidden md:table-cell">Category [Traffic]</TableHead>
            <TableHead className="hidden sm:table-cell">Words</TableHead>
            <TableHead className="hidden lg:table-cell">Created On</TableHead>
            <TableHead>Action</TableHead>
            <TableHead className="text-right">Publish</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {articles.map((article) => (
            <TableRow key={article.id}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell className="font-medium">{article.title}</TableCell>
              <TableCell className="hidden md:table-cell">{article.category}</TableCell>
              <TableCell className="hidden sm:table-cell">{article.words}</TableCell>
              <TableCell className="hidden lg:table-cell">{article.createdOn}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Eye className="mr-2 h-4 w-4" /> View
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" /> Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="mr-2 h-4 w-4" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
              <TableCell className="text-right">
                {getStatusBadge(article.status)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between px-4 py-3 border-t">
        <div className="text-sm text-muted-foreground">
          Total: 9 Articles | Page: 1 Shows: 9
        </div>
        <div className="flex items-center gap-1">
          <Button size="sm" variant="outline" disabled>
            ←
          </Button>
          <Button size="sm" variant="outline">
            →
          </Button>
        </div>
      </div>
    </div>
  );
};
