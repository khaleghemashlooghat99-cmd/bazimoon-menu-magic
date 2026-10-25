import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Coffee,
  CookingPot,
  CupSoda,
  Droplets,
  Flame,
  Gamepad2,
  GlassWater,
  Leaf,
  Milk,
  Pizza,
  Sandwich,
  Soup,
  Utensils,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { menuData } from "@/data/menuData";
import Dividers from "@/pages/dividers";

const categoryIcons: Record<string, LucideIcon> = {
  pizza: Pizza,
  coffee: Coffee,
  burger: Sandwich,
  pasta: CookingPot,
  sushi: Utensils,
  "milk-shake": Milk,
  "ice-coffee": GlassWater,
  tea: CupSoda,
  smoothie: CupSoda,
  matcha: Leaf,
  hotdrinks: Coffee,
  snack: Soup,
  appetizer: Utensils,
  sauce: Droplets,
  mafia: Flame,
  "board-game": Gamepad2,
};

const pricedInTomans = new Set([
  "pizza", "coffee", "hotdrinks", "pasta", "sushi", "milk-shake", "ice-coffee",
  "tea", "smoothie", "matcha", "burger", "snack", "appetizer", "sauce", "mafia", "board-game",
]);

const categoryScrollOffset = 96;

const Category = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [activeCategoryId, setActiveCategoryId] = useState(categoryId ?? menuData[0]?.id ?? "");

  const scrollToCategory = useCallback((id: string) => {
    document.getElementById(`menu-category-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    if (categoryId && menuData.some((category) => category.id === categoryId)) {
      const frame = window.requestAnimationFrame(() => scrollToCategory(categoryId));
      return () => window.cancelAnimationFrame(frame);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [categoryId, scrollToCategory]);

  useEffect(() => {
    const sections = menuData
      .map(({ id }) => document.getElementById(`menu-category-${id}`))
      .filter((section): section is HTMLElement => section !== null);
    let frame = 0;

    const updateActiveCategory = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const activationLine = categoryScrollOffset;
        let current = sections[0];

        for (const section of sections) {
          if (section.getBoundingClientRect().top <= activationLine) current = section;
          else break;
        }

        const atPageBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
        if (atPageBottom) current = sections[sections.length - 1] ?? current;

        if (current) {
          const id = current.id.replace("menu-category-", "");
          setActiveCategoryId((previous) => previous === id ? previous : id);
        }
      });
    };

    updateActiveCategory();
    window.addEventListener("scroll", updateActiveCategory, { passive: true });
    window.addEventListener("resize", updateActiveCategory);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveCategory);
      window.removeEventListener("resize", updateActiveCategory);
    };
  }, []);

  useEffect(() => {
    document.getElementById(`category-nav-${activeCategoryId}`)?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeCategoryId]);

  if (!categoryId || !menuData.some((category) => category.id === categoryId)) {
    return (
      <div className="menu-pattern-bg flex min-h-screen items-center justify-center gap-4 px-4" dir="rtl" lang="fa">
        <p className="text-foreground">دسته‌بندی پیدا نشد</p>
        <Button onClick={() => navigate("/")} className="bg-primary text-primary-foreground shadow-glow">برگشت به منو</Button>
      </div>
    );
  }

  return (
    <div className="menu-red-bg flex min-h-screen w-full flex-col overflow-x-clip" dir="rtl" lang="fa">
      <nav aria-label="دسته‌بندی‌های منو" className="category-nav sticky top-0 z-20 w-full max-w-full overflow-x-auto overscroll-x-contain border-b border-border bg-background/95 px-3 py-3 shadow-card backdrop-blur-md">
        <div className="flex w-max min-w-full items-center justify-start gap-2 sm:justify-center">
          {menuData.map((category) => {
            const Icon = categoryIcons[category.id] ?? Utensils;
            const active = activeCategoryId === category.id;
            return (
              <button
                key={category.id}
                id={`category-nav-${category.id}`}
                type="button"
                aria-current={active ? "location" : undefined}
                onClick={() => scrollToCategory(category.id)}
                className={`flex min-h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-full border-2 px-4 py-2 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${active ? "border-primary bg-primary text-primary-foreground shadow-glow" : "border-border bg-card text-foreground hover:bg-secondary"}`}
              >
                {category.name}
              </button>
            );
          })}
        </div>
      </nav>

      <main className="menu-pattern-bg flex-1">
        <h1 className="sr-only">منوی بازیمون</h1>
        <div className="container mx-auto max-w-2xl space-y-12 px-4 py-7">
          {menuData.map((category) => {
            const Icon = categoryIcons[category.id] ?? Utensils;
            return (
              <section key={category.id} id={`menu-category-${category.id}`} className="menu-category-section scroll-mt-24" aria-label={category.name}>
                <div className="mb-6"><Dividers Icon={Icon} /></div>
                <div className="space-y-4">
                  {category.items.map((item, index) => (
                    <article key={`${category.id}-${item.id}-${index}`} className="overflow-hidden rounded-lg border border-border bg-card shadow-card transition-all duration-300 hover:shadow-glow">
                      {pricedInTomans.has(category.id) ? (
                        <div className="flex min-h-28 items-center gap-3 p-3" dir="rtl">
                          <div className="h-24 w-24 shrink-0"><img src={item.image} alt={item.name} loading="lazy" className="h-full w-full rounded-lg border border-primary/30 object-cover" /></div>
                          <div className="min-w-0 flex-1 text-right"><h3 className="mb-1 text-lg font-semibold text-foreground">{item.name}</h3>{item.ingredients && <p className="text-sm leading-6 text-muted-foreground">{item.ingredients}</p>}</div>
                          <p className="flex shrink-0 flex-col items-center border-r border-border pr-3 text-center text-base font-bold text-primary"><span>{new Intl.NumberFormat("fa-IR").format(Math.round(item.price * 1000))}</span><span>تومان</span></p>
                        </div>
                      ) : (
                        <div className="flex gap-4 p-4"><div className="flex-1"><h3 className="mb-2 text-xl font-semibold text-foreground">{item.name}</h3><p className="text-2xl font-bold text-primary">${item.price.toFixed(2)}</p></div><div className="h-24 w-24 shrink-0"><img src={item.image} alt={item.name} loading="lazy" className="h-full w-full rounded-lg border border-primary/30 object-cover" /></div></div>
                      )}
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
        <div className="h-24" />
      </main>

      <div className="fixed inset-x-0 bottom-[calc(1.5rem+env(safe-area-inset-bottom))] z-30 flex justify-center px-4 pointer-events-none">
        <Button onClick={() => navigate("/")} className="pointer-events-auto h-14 w-[33.333vw] min-w-36 max-w-64 rounded-full border-2 border-primary-foreground/20 bg-primary text-base font-bold text-primary-foreground shadow-glow backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-primary-glow">برگشت به منو</Button>
      </div>
    </div>
  );
};

export default Category;
