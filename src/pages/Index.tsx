import { useNavigate } from "react-router-dom";
import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { menuData } from "@/data/menuData";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Banner */}
      <div className="bg-gradient-hero p-8 shadow-glow">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-primary-foreground mb-6">
          Bazimoon
        </h1>
        <p className="text-center text-primary-foreground/90 mb-6 text-lg">
          Café & Restaurant
        </p>
        
        {/* Social Media Icons */}
        <div className="flex justify-center gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground hover:text-primary-glow transition-colors duration-300 hover:scale-110 transform"
          >
            <Instagram className="h-7 w-7" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground hover:text-primary-glow transition-colors duration-300 hover:scale-110 transform"
          >
            <Facebook className="h-7 w-7" />
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground hover:text-primary-glow transition-colors duration-300 hover:scale-110 transform"
          >
            <MessageCircle className="h-7 w-7" />
          </a>
        </div>
      </div>

      {/* Categories */}
      <div className="container max-w-2xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
          Our Menu
        </h2>
        
        <div className="grid grid-cols-2 gap-4">
          {menuData.map((category) => (
            <button
              key={category.id}
              onClick={() => navigate(`/category/${category.id}`)}
              className="bg-card border-2 border-border hover:border-primary rounded-xl p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {category.name}
              </h3>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
