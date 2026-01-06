import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
//bg-[#e9f0f1]
  return (
    <div id="blog-nav-bar"className="flex items-center py-2 justify-between w-full h-16 z-9999 bg-[#e9f0f1]" style={{ padding: '0 20%' }}> 
      <Button 
        variant="ghost"

        size="lg"
        onClick={() => navigate("/about#projects")}
      >
        <ArrowLeft className="size-4" />
        Back to projects
      </Button>
      <Button variant="ghost" size="lg" onClick={() => navigate("/")}>
        <Typography variant="span" id="navbar-me-label">
          Chris Porter
        </Typography>
      </Button>
    </div>
  );
}

export { NavBar };
