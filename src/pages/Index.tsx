import { useNavigate } from "react-router-dom";
import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { menuData } from "@/data/menuData";
import cafeBanner from "@/assets/cafe-banner.jpg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Banner */}
      <div className="relative h-64 overflow-hidden shadow-glow">
        <img
          src={cafeBanner}
          alt="Bazimoon Cafe"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg">
            Bazimoon
          </h1>
          <p className="text-white/90 mb-6 text-lg drop-shadow">
            Café & Restaurant
          </p>
          
          {/* Social Media Icons */}
          <div className="flex gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary-glow transition-all duration-300 hover:scale-110 transform drop-shadow-lg"
            >
              <Instagram className="h-7 w-7" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary-glow transition-all duration-300 hover:scale-110 transform drop-shadow-lg"
            >
              <Facebook className="h-7 w-7" />
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary-glow transition-all duration-300 hover:scale-110 transform drop-shadow-lg"
            >
              <MessageCircle className="h-7 w-7" />
            </a>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="container max-w-2xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
          Our Menu
        </h2>
        
        <div className="grid grid-cols-2 gap-4">
          {menuData.map((category, index) => (
            <button
              key={category.id}
              onClick={() => navigate(`/category/${category.id}`)}
              className="bg-card border-2 border-border hover:border-primary rounded-xl p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 group"
              style={{
                animation: `slideInRight 0.4s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.1}s both`
              }}
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
