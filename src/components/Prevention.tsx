import { Apple, Dumbbell, Moon, Wine, Cigarette, Sun } from "lucide-react";
import preventionImg from "@/assets/prevention.jpg";
import { useState } from "react";

const habits = [
  { icon: Apple, title: "Alimentação colorida", text: "Frutas, verduras e grãos integrais todos os dias." },
  { icon: Dumbbell, title: "Mexa o corpo", text: "30 minutos de caminhada já fazem diferença." },
  { icon: Moon, title: "Sono tranquilo", text: "Dormir bem ajuda o corpo a se renovar." },
  { icon: Wine, title: "Cuidado com bebidas", text: "Diminuir o álcool reduz riscos." },
  { icon: Cigarette, title: "Sem cigarro", text: "Não fumar protege todo o seu corpo." },
  { icon: Sun, title: "Vitamina D", text: "Tome um sol leve pela manhã." },
];

export const Prevention = () => {
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const done = Object.values(checked).filter(Boolean).length;

  return (
    <section id="prevencao" className="py-20 lg:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <div className="lg:sticky lg:top-32">
            <p className="text-primary font-semibold uppercase tracking-wider text-sm">Prevenção</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-balance">
              Pequenos hábitos, <span className="text-primary">grandes cuidados</span>.
            </h2>
            <p className="mt-5 text-lg text-foreground/75 leading-relaxed">
              Prevenir é cuidar de si todos os dias. Aqui vão hábitos simples que fortalecem seu corpo e sua saúde.
            </p>
            <img
              src={preventionImg}
              alt="Frutas frescas, copo de água e tênis representando hábitos saudáveis"
              loading="lazy"
              width={1024}
              height={1024}
              className="mt-8 rounded-[2rem] shadow-soft"
            />
          </div>

          <div>
            <div className="mb-6 p-5 rounded-2xl bg-primary-soft flex items-center justify-between gap-4">
              <p className="font-semibold text-primary">
                Sua jornada de cuidado: {done} de {habits.length} hábitos
              </p>
              <div className="flex-1 max-w-[200px] h-3 rounded-full bg-card overflow-hidden">
                <div
                  className="h-full gradient-warm transition-gentle"
                  style={{ width: `${(done / habits.length) * 100}%` }}
                />
              </div>
            </div>

            <ul className="grid sm:grid-cols-2 gap-4">
              {habits.map((h, i) => {
                const Icon = h.icon;
                const isChecked = !!checked[i];
                return (
                  <li key={i}>
                    <label className="flex gap-4 p-5 rounded-2xl bg-card border-2 border-border hover:border-primary/40 cursor-pointer transition-gentle has-[:checked]:bg-primary-soft has-[:checked]:border-primary">
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={isChecked}
                        onChange={() => setChecked((c) => ({ ...c, [i]: !c[i] }))}
                      />
                      <span
                        className={`shrink-0 grid place-items-center size-12 rounded-xl transition-gentle ${
                          isChecked ? "gradient-warm" : "bg-secondary"
                        }`}
                        aria-hidden
                      >
                        <Icon
                          className={`size-6 ${isChecked ? "text-primary-foreground" : "text-secondary-foreground"}`}
                        />
                      </span>
                      <div>
                        <p className="font-bold text-lg">{h.title}</p>
                        <p className="text-foreground/70">{h.text}</p>
                      </div>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
