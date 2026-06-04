import { Circle, Droplet, Mountain, Shrink, Thermometer, Eye, AlertCircle } from "lucide-react";

const signs = [
  { icon: Circle, title: "Caroço novo", text: "Um nódulo que você não sentia antes, na mama ou na axila." },
  { icon: Mountain, title: "Mudança no formato", text: "A mama mudou de tamanho ou contorno." },
  { icon: Shrink, title: "Pele diferente", text: "Pele enrugada, com 'casca de laranja' ou avermelhada." },
  { icon: Droplet, title: "Saída de líquido", text: "Líquido saindo do mamilo sem motivo, especialmente com sangue." },
  { icon: Eye, title: "Mamilo mudou", text: "O mamilo afundou ou virou para dentro." },
  { icon: Thermometer, title: "Vermelhidão ou calor", text: "Área quente, vermelha ou inchada que não passa." },
];

export const WarningSigns = () => (
  <section id="sinais" className="py-20 lg:py-28">
    <div className="container">
      <div className="max-w-2xl">
        <p className="text-primary font-semibold uppercase tracking-wider text-sm">Sinais de alerta</p>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold text-balance">
          O que observar com <span className="text-primary">carinho</span>.
        </h2>
        <p className="mt-5 text-lg text-foreground/75 leading-relaxed">
          Estes sinais nem sempre significam câncer, mas merecem uma conversa com seu médico. Confiar em quem cuida de você é parte do processo.
        </p>
      </div>

      <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {signs.map((s, i) => {
          const Icon = s.icon;
          return (
            <li
              key={i}
              className="group p-6 rounded-[1.75rem] bg-card border border-border shadow-card hover:shadow-bloom hover:-translate-y-1 transition-gentle"
            >
              <span className="grid place-items-center size-14 rounded-2xl bg-primary-soft text-primary group-hover:gradient-warm group-hover:text-primary-foreground transition-gentle">
                <Icon className="size-7" />
              </span>
              <h3 className="mt-4 text-2xl font-bold">{s.title}</h3>
              <p className="mt-2 text-foreground/75 text-lg">{s.text}</p>
            </li>
          );
        })}
      </ul>

      <div className="mt-10 p-6 lg:p-8 rounded-[2rem] gradient-warm text-primary-foreground flex flex-col md:flex-row items-start md:items-center gap-5 shadow-bloom">
        <AlertCircle className="size-12 shrink-0" />
        <div className="flex-1">
          <p className="text-2xl font-bold">Notou algo diferente? Procure ajuda.</p>
          <p className="mt-1 text-lg opacity-95">
            Você não está sozinha. Ligue para o SUS pelo número <strong>136</strong> ou procure a unidade de saúde mais próxima.
          </p>
        </div>
        <a
          href="#contato"
          className="px-6 py-3 rounded-xl bg-card text-primary font-bold hover:scale-105 transition-gentle"
        >
          Onde buscar ajuda
        </a>
      </div>
    </div>
  </section>
);
