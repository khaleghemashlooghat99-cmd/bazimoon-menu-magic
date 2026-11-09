import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { formatFaNumber } from "@/lib/format";
import { cn } from "@/lib/utils";

interface AddToCartControlProps {
  cartKey: string;
  itemName: string;
  className?: string;
}

const iconButton =
  "h-8 w-8 shrink-0 rounded-full p-0 text-primary-foreground hover:bg-primary-foreground/15 hover:text-primary-foreground [&_svg]:size-4";

const AddToCartControl = ({ cartKey, itemName, className }: AddToCartControlProps) => {
  const { getQuantity, increment, decrement, remove } = useCart();
  const quantity = getQuantity(cartKey);

  if (quantity === 0) {
    return (
      <Button
        type="button"
        variant="outline"
        onClick={() => increment(cartKey)}
        aria-label={`افزودن ${itemName} به سبد خرید`}
        className={cn(
          "h-8 gap-1 rounded-full border-2 border-primary bg-transparent px-3 text-sm font-bold text-primary hover:bg-primary hover:text-primary-foreground [&_svg]:size-3.5",
          className,
        )}
      >
        افزودن
        <Plus strokeWidth={3} />
      </Button>
    );
  }

  return (
    <div
      role="group"
      aria-label={`تعداد ${itemName}`}
      className={cn("cart-stepper-enter flex h-8 items-center rounded-full bg-primary shadow-glow", className)}
    >
      <Button type="button" variant="ghost" onClick={() => increment(cartKey)} aria-label={`افزایش تعداد ${itemName}`} className={iconButton}>
        <Plus strokeWidth={3} />
      </Button>
      <span aria-live="polite" className="min-w-6 text-center text-sm font-bold text-primary-foreground">
        {formatFaNumber(quantity)}
      </span>
      {quantity === 1 ? (
        <Button type="button" variant="ghost" onClick={() => remove(cartKey)} aria-label={`حذف ${itemName} از سبد خرید`} className={iconButton}>
          <Trash2 />
        </Button>
      ) : (
        <Button type="button" variant="ghost" onClick={() => decrement(cartKey)} aria-label={`کاهش تعداد ${itemName}`} className={iconButton}>
          <Minus strokeWidth={3} />
        </Button>
      )}
    </div>
  );
};

export default AddToCartControl;
