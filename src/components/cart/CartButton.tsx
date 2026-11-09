import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { formatFaNumber } from "@/lib/format";

const CartButton = () => {
  const navigate = useNavigate();
  const { totalCount } = useCart();

  if (totalCount === 0) return null;

  return (
    <Button
      type="button"
      onClick={() => navigate("/cart")}
      aria-label={`سبد خرید، ${formatFaNumber(totalCount)} آیتم`}
      className="cart-button-enter pointer-events-auto relative h-14 w-14 shrink-0 rounded-full border-2 border-primary-foreground/20 bg-primary p-0 text-primary-foreground shadow-glow transition-transform duration-300 hover:scale-105 hover:bg-primary-glow [&_svg]:size-6"
    >
      {/* Keyed by count so the shake replays whenever the cart changes. */}
      <span key={totalCount} className="cart-shake flex items-center justify-center">
        <span className="cart-shake-loop flex items-center justify-center">
          <ShoppingCart />
        </span>
      </span>
      <span className="absolute -left-1 -top-1 flex h-6 min-w-6 items-center justify-center rounded-full border-2 border-primary bg-primary-foreground px-1 text-xs font-bold text-primary">
        {formatFaNumber(totalCount)}
      </span>
    </Button>
  );
};

export default CartButton;
