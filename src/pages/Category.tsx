import { NavLink, useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { menuData } from "@/data/menuData";
import cafeBanner from "@/assets/cafe-banner.jpg";

const Category = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  
  const category = menuData.find(cat => cat.id === categoryId);

  if (!category) {
    return (
      <div className="menu-pattern-bg min-h-screen flex items-center justify-center" dir="rtl" lang="fa">
        <p className="text-foreground">دسته‌بندی پیدا نشد😢</p>
        <Button className="bg-primary hover:bg-primary-glow text-primary-foreground border-2 border-primary-foreground/20 shadow-glow" onClick={() => navigate("/")}>
          برگرد به منو
        </Button>
      </div>
    );
  }

  return (
    <div className="menu-red-bg min-h-screen w-full overflow-x-clip" dir="rtl" lang="fa">
      {/* Banner */}
      <div className="sticky top-0 z-10 shadow-glow">
        <div className="banner-fade relative h-64 overflow-hidden">
          <img
            src={cafeBanner}
            alt="Bazimoon Cafe"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

          <h1 className="sr-only">{category.name}</h1>
          <nav
            aria-label="دسته‌بندی‌های منو"
            className="category-nav absolute bottom-4 inset-x-0 z-10 w-full max-w-full overflow-x-auto overscroll-x-contain bg-background/90 px-4 py-3 shadow-card backdrop-blur-md"
          >
            <div className="flex w-max min-w-full items-center justify-center gap-3">
              {menuData.map((menuCategory) => (
                <NavLink
                  key={menuCategory.id}
                  to={`/category/${menuCategory.id}`}
                  end
                  className={({ isActive }) =>
                    `flex min-h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-full border-2 px-5 py-2 text-base font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                      isActive
                        ? "border-primary bg-primary text-primary-foreground shadow-glow"
                        : "border-border bg-card text-foreground hover:border-primary hover:bg-secondary"
                    }`
                  }
                >
                  {menuCategory.name}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
      </div>

      <div className="menu-pattern-bg min-h-[calc(100vh-16rem)]">
        <div className="container max-w-2xl mx-auto px-4 py-6 space-y-4">
          {category.items.map((item, index) => (
            <div
              key={`${category.id}-${item.id}-${index}`}
              className="bg-card border border-border rounded-lg overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 hover:scale-[1.02]"
              style={{
                animation: `slideInRight 0.4s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.1}s both`
              }}
            >
              {["pizza", "coffee", "hot-drinks", "appetizer", "mocktail", "chips-cheese", "sandwich", "fried", "mafia", "board-game"].includes(category.id) ? (
                <div className="flex min-h-28 items-center gap-3 p-3" dir="rtl">
                  <div className="h-24 w-24 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full rounded-lg border border-primary/30 object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1 text-right">
                    <h3 className="mb-1 text-lg font-semibold text-foreground">
                      {item.name}
                    </h3>
                    {item.ingredients && (
                      <p className="text-sm leading-6 text-muted-foreground">
                        {item.ingredients}
                      </p>
                    )}
                  </div>
                  <p className="flex-shrink-0 border-r border-border pr-3 flex flex-col items-center text-center text-base font-bold text-primary">
                    <span>{new Intl.NumberFormat("fa-IR").format(Math.round(item.price * 1000))}</span>
                    <span>تومان</span>
                  </p>
                </div>
              ) : (
                <div className="flex gap-4 p-4">
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold text-foreground">
                      {item.name}
                    </h3>
                    <p className="text-2xl font-bold text-primary">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="h-24 w-24 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full rounded-lg border border-primary/30 object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="h-24" />
      </div>

      {/* Fixed floating back button */}
      <div className="fixed inset-x-0 bottom-[calc(1.5rem+env(safe-area-inset-bottom))] z-20 flex justify-center px-4 pointer-events-none">
        <Button
          onClick={() => navigate("/")}
          className="pointer-events-auto h-14 w-[33.333vw] min-w-36 max-w-64 rounded-full bg-primary hover:bg-primary-glow text-primary-foreground border-2 border-primary-foreground/20 shadow-glow backdrop-blur-sm transition-all duration-300 hover:scale-105 text-base font-bold"
        >
          برگرد به منو
        </Button>
      </div>
    </div>
  );
};

export default Category;
