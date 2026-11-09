import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import AddToCartControl from "@/components/cart/AddToCartControl";
import Dividers from "@/pages/dividers";
import { useCart } from "@/context/CartContext";
import { getCartGroups } from "@/lib/cart";
import { formatFaNumber, formatToman } from "@/lib/format";

const Cart = () => {
  const navigate = useNavigate();
  const { quantities, totalCount, clear } = useCart();
  const groups = useMemo(() => getCartGroups(quantities), [quantities]);
  const totalPrice = useMemo(
    () => groups.reduce((sum, group) => sum + group.lines.reduce((s, line) => s + line.item.price * line.quantity, 0), 0),
    [groups],
  );

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const goBack = () => (window.history.state?.idx > 0 ? navigate(-1) : navigate("/"));

  return (
    <div className="menu-red-bg flex min-h-screen w-full flex-col overflow-x-clip" dir="rtl" lang="fa">
      <main className="menu-pattern-bg flex-1">
        <div className="cart-content-enter container mx-auto max-w-2xl px-4 py-9">
          <header className="menu-title">
            <h1 className="menu-title-text">سبد خرید</h1>
            <div className="menu-title-rule" aria-hidden="true">
              <span className="menu-title-line menu-title-line-end" />
              <span className="menu-title-dot" />
              <span className="menu-title-diamond" />
              <span className="menu-title-dot" />
              <span className="menu-title-line menu-title-line-start" />
            </div>
            <p className="text-center text-sm leading-6 text-white/75">لیست آیتم‌هایی که انتخاب کرده‌اید، برای یادآوری هنگام سفارش</p>
          </header>

          {groups.length === 0 ? (
            <div className="flex flex-col items-center gap-4 rounded-xl border border-white/10 bg-zinc-950 px-6 py-12 text-center shadow-card">
              <span className="menu-divider-badge-circle h-16 w-16"><ShoppingCart className="h-7 w-7" /></span>
              <h2 className="text-lg font-bold text-foreground">سبد خرید شما خالی است</h2>
              <p className="text-sm text-muted-foreground">از منو روی «افزودن» بزنید تا آیتم اینجا اضافه شود.</p>
              <Button onClick={() => navigate("/")} className="rounded-full px-6 font-bold shadow-glow">مشاهده منو</Button>
            </div>
          ) : (
            <div className="space-y-10">
              <div aria-label="آیتم‌های سبد خرید" className="space-y-10 rounded-2xl border-2 border-primary/40 bg-zinc-950/85 p-4 shadow-card backdrop-blur-sm sm:p-6">
              {groups.map(({ category, lines }) => (
                <section key={category.id} aria-label={category.name}>
                  <div className="mb-5"><Dividers icon={category.icon} name={category.name} /></div>
                  <ul className="space-y-4">
                    {lines.map(({ key, item, quantity }) => (
                      <li key={key} className="overflow-hidden rounded-lg border border-border bg-card shadow-card">
                        <div className="flex min-h-28 items-center gap-3 p-3">
                          <div className="h-20 w-20 shrink-0"><img src={item.image} alt={item.name} loading="lazy" className="h-full w-full rounded-lg border border-primary/30 object-cover" /></div>
                          <div className="min-w-0 flex-1 text-right">
                            <h3 className="mb-1 text-lg font-semibold text-foreground">{item.name}</h3>
                            <p className="text-sm text-muted-foreground">{formatToman(item.price)} × {formatFaNumber(quantity)}</p>
                          </div>
                          <div className="flex shrink-0 flex-col items-center gap-2 border-r border-border pr-3 text-center">
                            <span className="text-base font-bold text-primary">{formatToman(item.price * quantity)}</span>
                            <AddToCartControl cartKey={key} itemName={item.name} />
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
              </div>

              <section aria-label="جمع سبد خرید" className="rounded-xl border border-white/10 bg-zinc-950 p-5 text-white shadow-card">
                <dl className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <dt className="text-white/70">تعداد آیتم‌ها</dt>
                    <dd className="font-bold">{formatFaNumber(totalCount)}</dd>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/10 pt-3">
                    <dt className="text-base font-bold">جمع کل</dt>
                    <dd className="text-xl font-extrabold text-primary">{formatToman(totalPrice)} <span className="text-sm font-bold">تومان</span></dd>
                  </div>
                </dl>
                <Button variant="ghost" onClick={clear} className="mt-4 w-full rounded-full border border-white/15 text-white/80 hover:bg-white/10 hover:text-white">
                  <Trash2 />
                  پاک کردن همه
                </Button>
              </section>
            </div>
          )}
        </div>
        <div className="h-24" />
      </main>

      <div className="fixed inset-x-0 bottom-[calc(1.5rem+env(safe-area-inset-bottom))] z-30 flex justify-center px-4 pointer-events-none">
        <Button onClick={goBack} className="pointer-events-auto h-14 w-[33.333vw] min-w-36 max-w-64 rounded-full border-2 border-primary-foreground/20 bg-primary text-base font-bold text-primary-foreground shadow-glow backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-primary-glow">برگرد به منو</Button>
      </div>
    </div>
  );
};

export default Cart;
