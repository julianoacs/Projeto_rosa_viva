import { useState } from "react";
import { MessageCircleHeart, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const phrases = [
  "Você é mais forte do que imagina. 💗",
  "Cuidar de você não é egoísmo, é amor.",
  "Cada pequeno passo conta. Você está indo bem.",
  "Você não está sozinha — somos muitas juntas.",
  "Respira. Hoje, você já fez algo bom por você.",
];

const botReplies: Record<string, string> = {
  medo: "É natural sentir medo. Respira fundo. Conhecer o seu corpo é uma forma de ter mais tranquilidade. Posso te guiar pelo autoexame, quer ver?",
  caroco: "Encontrar algo diferente assusta — entendo. Nem todo caroço é grave, mas vale uma conversa com um médico. Procure uma unidade de saúde ou ligue 136 (SUS).",
  exame: "Que bom que você quer cuidar de você! O autoexame pode ser feito uma vez por mês. Olha o passo a passo aqui no site, com bastante carinho.",
  default: "Estou aqui pra te ouvir e te orientar com carinho. Conta o que está sentindo — posso falar sobre prevenção, autoexame, sinais de alerta ou onde buscar ajuda.",
};

const getReply = (msg: string) => {
  const m = msg.toLowerCase();
  if (m.includes("medo") || m.includes("ansios")) return botReplies.medo;
  if (m.includes("caroço") || m.includes("caroco") || m.includes("nódulo") || m.includes("nodulo")) return botReplies.caroco;
  if (m.includes("exame") || m.includes("mamografia")) return botReplies.exame;
  return botReplies.default;
};

export const Support = () => {
  const [phrase, setPhrase] = useState(phrases[0]);
  const [messages, setMessages] = useState<{ role: "bot" | "you"; text: string }[]>([
    { role: "bot", text: "Oi, querida! Sou a Flor 🌸 — estou aqui pra te ouvir. Como você está se sentindo hoje?" },
  ]);
  const [input, setInput] = useState("");

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = input;
    setMessages((m) => [...m, { role: "you", text: userMsg }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", text: getReply(userMsg) }]);
    }, 600);
  };

  return (
    <section id="apoio" className="py-20 lg:py-28">
      <div className="container grid lg:grid-cols-2 gap-10 items-stretch">
        <div className="p-8 lg:p-10 rounded-[2.5rem] gradient-card border border-border flex flex-col justify-between">
          <div>
            <p className="text-primary font-semibold uppercase tracking-wider text-sm">Apoio</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-balance">
              Uma palavra <span className="text-primary">para você</span>.
            </h2>
            <p className="mt-5 text-lg text-foreground/75">
              Sempre que precisar de um carinho, vem buscar uma frase aqui.
            </p>
          </div>

          <div className="mt-10 p-8 rounded-[2rem] bg-card shadow-soft text-center min-h-[200px] flex items-center justify-center">
            <p className="text-2xl md:text-3xl font-display font-semibold text-balance leading-snug">
              "{phrase}"
            </p>
          </div>

          <Button
            size="lg"
            onClick={() => setPhrase(phrases[Math.floor(Math.random() * phrases.length)])}
            className="mt-6 gradient-warm self-start"
          >
            <Sparkles /> Nova mensagem de carinho
          </Button>
        </div>

        <div className="p-6 lg:p-8 rounded-[2.5rem] bg-card border border-border shadow-card flex flex-col">
          <div className="flex items-center gap-3 pb-4 border-b border-border">
            <span className="grid place-items-center size-12 rounded-full gradient-warm">
              <MessageCircleHeart className="size-6 text-primary-foreground" />
            </span>
            <div>
              <p className="font-bold text-lg">Flor</p>
              <p className="text-sm text-foreground/60">Aqui pra te acolher</p>
            </div>
          </div>

          <div
            className="flex-1 mt-4 space-y-3 overflow-y-auto max-h-80 pr-2"
            aria-live="polite"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] p-4 rounded-2xl text-lg ${
                  m.role === "bot"
                    ? "bg-primary-soft text-foreground rounded-tl-sm"
                    : "bg-secondary text-secondary-foreground ml-auto rounded-tr-sm"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          <form onSubmit={send} className="mt-4 flex gap-2">
            <label htmlFor="chat" className="sr-only">Escreva uma mensagem</label>
            <input
              id="chat"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escreva como está se sentindo..."
              className="flex-1 px-5 py-4 rounded-2xl bg-secondary border-2 border-transparent focus:border-primary text-lg outline-none"
            />
            <Button type="submit" size="lg" className="gradient-warm" aria-label="Enviar mensagem">
              <Send />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
