import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { menuData } from "@/data/menuData";

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
    <div className="min-h-screen bg-background pb-24">
      <div className="sticky top-0 z-10 bg-gradient-hero p-6 shadow-glow">
        <h1 className="text-3xl font-bold text-center text-primary-foreground">
          {category.name}
        </h1>
      </div>

      <div className="container max-w-2xl mx-auto px-4 py-6 space-y-4">
        {category.items.map((item) => (
          <div
            key={item.id}
            className="bg-card border border-border rounded-lg overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 hover:scale-[1.02]"
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

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background via-background to-transparent">
        <div className="container max-w-2xl mx-auto">
          <Button
            onClick={() => navigate("/")}
            className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-semibold py-6 shadow-glow"
            size="lg"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Categories
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Category;
