import { Heart } from "lucide-react";

export const Footer = () => (
  <footer className="bg-card border-t border-border py-10">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
      <div className="flex items-center gap-3">
        <span className="grid place-items-center size-10 rounded-2xl gradient-warm">
          <Heart className="size-5 text-primary-foreground" fill="currentColor" />
        </span>
        <p className="font-display text-xl font-bold">
          Rosa <span className="text-primary">Viva</span>
        </p>
      </div>
      <p className="text-foreground/60">
        Conteúdo educativo. Não substitui consulta médica. Em caso de dúvida, procure um profissional.
      </p>
      <p className="text-foreground/60">Feito com ❤ para você</p>
    </div>
  </footer>
);
