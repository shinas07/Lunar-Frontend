"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    // Defer the initial read out of the synchronous effect body.
    const id = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-[80]">
      <div className="container-px pt-3 md:pt-4">
        <nav
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between rounded-full border px-3 py-2.5 transition-all duration-500 ease-[var(--ease-out-expo)] md:px-4",
            scrolled
              ? "glass border-line-strong shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)]"
              : "border-transparent bg-transparent"
          )}
        >
          <Link href="/" aria-label="Lunar — home" className="shrink-0 pl-1">
            <Logo />
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    active ? "text-cloud" : "text-mist hover:text-cloud"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    >
                      {/* soft halo for depth */}
                      <span
                        aria-hidden
                        className="absolute -inset-1 rounded-full bg-electric/10 blur-md"
                      />
                      {/* faint base so the active page reads between sweeps */}
                      <span className="absolute inset-0 rounded-full bg-electric/[0.06] ring-1 ring-inset ring-electric/25" />
                      {/* bloom — blurred comet glow behind */}
                      <span
                        aria-hidden
                        className="absolute inset-0 overflow-hidden rounded-full blur-[2.5px] motion-reduce:hidden"
                        style={{
                          padding: "2px",
                          WebkitMask:
                            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                          WebkitMaskComposite: "xor",
                          maskComposite: "exclude",
                        }}
                      >
                        <span
                          className="absolute left-1/2 top-1/2 aspect-square w-[180%] -translate-x-1/2 -translate-y-1/2 animate-[spin_3.2s_linear_infinite] [will-change:transform]"
                          style={{
                            background:
                              "conic-gradient(from 0deg, rgba(0,194,255,0) 0deg, rgba(0,194,255,0.2) 220deg, rgba(0,194,255,0.6) 320deg, rgba(127,227,255,0.95) 352deg, rgba(0,194,255,0) 360deg)",
                          }}
                        />
                      </span>
                      {/* crisp orbiting head + trailing comet */}
                      <span
                        aria-hidden
                        className="absolute inset-0 overflow-hidden rounded-full motion-reduce:hidden"
                        style={{
                          padding: "1.5px",
                          WebkitMask:
                            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                          WebkitMaskComposite: "xor",
                          maskComposite: "exclude",
                        }}
                      >
                        <span
                          className="absolute left-1/2 top-1/2 aspect-square w-[170%] -translate-x-1/2 -translate-y-1/2 animate-[spin_3.2s_linear_infinite] [will-change:transform]"
                          style={{
                            background:
                              "conic-gradient(from 0deg, rgba(0,194,255,0) 0deg, rgba(0,194,255,0) 215deg, rgba(0,194,255,0.45) 305deg, rgba(180,240,255,1) 348deg, #ffffff 357deg, rgba(0,194,255,0) 360deg)",
                          }}
                        />
                      </span>
                    </motion.span>
                  )}
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <Button href="/contact" size="sm">
              Get a Free Quote
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-cloud md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-0 z-[-1] bg-ink/95 backdrop-blur-xl md:hidden"
          >
            <div className="container-px flex h-dvh flex-col justify-center gap-2 pb-20">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i + 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-display text-4xl font-medium text-cloud"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * navLinks.length + 0.1 }}
                className="mt-6"
              >
                <Button
                  href="/contact"
                  size="lg"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Get a Free Quote
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
