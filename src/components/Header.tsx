import { Heart, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#prevencao", label: "Prevenção" },
  { href: "#autoexame", label: "Autoexame" },
  { href: "#sinais", label: "Sinais de alerta" },
  { href: "#apoio", label: "Apoio" },
  { href: "#quiz", label: "Quiz" },
  { href: "#contato", label: "Ajuda" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-background/85 border-b border-border">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Pular para o conteúdo
      </a>
      <div className="container flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-3" aria-label="Rosa Viva — página inicial">
          <span className="grid place-items-center size-11 rounded-2xl gradient-warm shadow-soft">
            <Heart className="size-6 text-primary-foreground" fill="currentColor" />
          </span>
          <span className="font-display text-2xl font-bold tracking-tight">
            Rosa <span className="text-primary">Viva</span>
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 rounded-full font-semibold text-foreground/80 hover:text-primary hover:bg-primary-soft transition-gentle"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          <Menu className="size-6" />
        </Button>
      </div>
      {open && (
        <nav
          aria-label="Navegação móvel"
          className="lg:hidden border-t border-border bg-background"
        >
          <ul className="container flex flex-col py-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-lg font-semibold rounded-lg hover:bg-primary-soft hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};
