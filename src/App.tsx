import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import { ITEMS_PATH, type ItemsLocationState } from "@/lib/routes";
import Index from "./pages/Index";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";

const queryClient = new QueryClient();

// Keeps old /category/:id links (bookmarks, QR codes) working.
const LegacyCategoryRedirect = () => {
  const { categoryId } = useParams();
  const state: ItemsLocationState = { categoryId };
  return <Navigate to={ITEMS_PATH} replace state={state} />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path={ITEMS_PATH} element={<Category />} />
            <Route path="/category/:categoryId" element={<LegacyCategoryRedirect />} />
            <Route path="/cart" element={<Cart />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
