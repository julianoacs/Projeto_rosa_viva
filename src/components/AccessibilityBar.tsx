import { useEffect, useState } from "react";
import { Contrast, Type, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSpeech } from "@/hooks/useSpeech";

export const AccessibilityBar = () => {
  const [scale, setScale] = useState(1);
  const [hc, setHc] = useState(false);
  const { speaking, stop, speakPage } = useSpeech();

  useEffect(() => {
    document.documentElement.style.setProperty("--font-scale", String(scale));
  }, [scale]);

  useEffect(() => {
    document.documentElement.classList.toggle("high-contrast", hc);
  }, [hc]);

  return (
    <div
      role="region"
      aria-label="Barra de acessibilidade"
      className="w-full bg-secondary/70 border-b border-border"
    >
      <div className="container flex flex-wrap items-center justify-end gap-2 py-2 text-sm">
        <span className="mr-auto font-semibold text-secondary-foreground">
          Acessibilidade
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setScale((s) => Math.max(0.9, +(s - 0.1).toFixed(2)))}
          aria-label="Diminuir tamanho da fonte"
        >
          <Type className="size-4" /> A−
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setScale(1)}
          aria-label="Tamanho de fonte padrão"
        >
          A
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setScale((s) => Math.min(1.6, +(s + 0.1).toFixed(2)))}
          aria-label="Aumentar tamanho da fonte"
        >
          <Type className="size-5" /> A+
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setHc((v) => !v)}
          aria-pressed={hc}
          aria-label="Alternar alto contraste"
        >
          <Contrast className="size-4" />
          {hc ? "Contraste normal" : "Alto contraste"}
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => (speaking ? stop() : speakPage())}
          aria-label={speaking ? "Parar leitura em voz" : "Ouvir conteúdo da página"}
        >
          {speaking ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
          {speaking ? "Parar leitura" : "Ouvir página"}
        </Button>
      </div>
    </div>
  );
};
