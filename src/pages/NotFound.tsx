import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="menu-pattern-bg flex min-h-screen items-center justify-center px-4" dir="rtl" lang="fa">
      <section className="w-full max-w-xl rounded-xl border border-primary/25 bg-background/70 px-5 py-8 text-center shadow-card sm:px-8" style={{ animation: "sectionEntrance 0.5s cubic-bezier(0.22, 1, 0.36, 1) both" }}>
        <h1 className="text-7xl font-extrabold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-bold text-foreground sm:text-2xl">این صفحه پیدا نشد</h2>
        <span className="mx-auto mt-3 block h-[3px] w-14 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent" />
        <p className="mx-auto mt-4 text-base leading-8 text-foreground/80 sm:text-lg sm:leading-9">به نظر می‌رسه مسیر اشتباهی اومدید. این صفحه وجود نداره؛ از دکمه زیر به منوی اصلی برگردید.</p>
        <div className="mt-6 flex justify-center"><Link to="/" className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-bold text-primary-foreground shadow-glow transition-all duration-300 hover:scale-[1.02] hover:bg-primary-glow sm:w-auto">برگشت به منو</Link></div>
      </section>
    </div>
  );
};

export default NotFound;
