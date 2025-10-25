import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { menuData } from "@/data/menuData";
import cafeBanner from "@/assets/cafe-banner.jpg";

const Category = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  
  const category = menuData.find(cat => cat.id === categoryId);

  if (!category) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-foreground">Category not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background page-enter">
      {/* Banner with back button */}
      <div className="sticky top-0 z-10 shadow-glow">
        <div className="relative h-48 overflow-hidden">
          <img
            src={cafeBanner}
            alt="Bazimoon Cafe"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
          
          {/* Floating back button */}
          <Button
            onClick={() => navigate("/")}
            size="icon"
            className="absolute top-4 left-4 w-12 h-12 rounded-full bg-background/90 hover:bg-background text-foreground border-2 border-primary shadow-glow backdrop-blur-sm transition-all duration-300 hover:scale-110"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>

          <h1 className="absolute bottom-4 left-0 right-0 text-3xl font-bold text-center text-white drop-shadow-lg">
            {category.name}
          </h1>
        </div>
      </div>

      <div className="container max-w-2xl mx-auto px-4 py-6 space-y-4">
        {category.items.map((item, index) => (
          <div
            key={item.id}
            className="bg-card border border-border rounded-lg overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 hover:scale-[1.02]"
            style={{
              animation: `slideInRight 0.4s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.1}s both`
            }}
          >
            <div className="flex gap-4 p-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {item.name}
                </h3>
                <p className="text-2xl font-bold text-primary">
                  ${item.price.toFixed(2)}
                </p>
              </div>
              <div className="w-24 h-24 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-lg border border-primary/30"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="h-6" />
    </div>
  );
};

export default Category;
