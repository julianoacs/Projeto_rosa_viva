import { Phone, MapPin, Globe, LifeBuoy } from "lucide-react";

const contacts = [
  { icon: Phone, title: "SUS — Disque Saúde", text: "Ligue 136. Atendimento gratuito do Ministério da Saúde.", href: "tel:136" },
  { icon: MapPin, title: "Unidade de saúde mais próxima", text: "Procure a UBS do seu bairro para agendar consultas e exames gratuitos.", href: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/u/unidade-basica-de-saude-ubs" },
  { icon: Globe, title: "INCA — Instituto Nacional de Câncer", text: "Informações oficiais sobre prevenção e tratamento.", href: "https://www.gov.br/inca/pt-br" },
  { icon: LifeBuoy, title: "Femama — Apoio a pacientes", text: "Rede de apoio para mulheres com câncer de mama.", href: "https://femama.org.br" },
];

export const Contact = () => (
  <section id="contato" className="py-20 lg:py-28 gradient-soft">
    <div className="container">
      <div className="max-w-2xl">
        <p className="text-primary font-semibold uppercase tracking-wider text-sm">Ajuda e contato</p>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold text-balance">
          Você nunca está <span className="text-primary">sozinha</span>.
        </h2>
        <p className="mt-5 text-lg text-foreground/75">
          Estes são caminhos confiáveis para buscar atendimento, informação e apoio.
        </p>
      </div>

      <ul className="mt-12 grid md:grid-cols-2 gap-5">
        {contacts.map((c, i) => {
          const Icon = c.icon;
          return (
            <li key={i}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex gap-5 p-6 rounded-[1.75rem] bg-card border border-border hover:border-primary/50 hover:shadow-bloom transition-gentle"
              >
                <span className="grid place-items-center size-14 rounded-2xl gradient-warm shrink-0">
                  <Icon className="size-7 text-primary-foreground" />
                </span>
                <div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-gentle">{c.title}</h3>
                  <p className="mt-1 text-foreground/75 text-lg">{c.text}</p>
                </div>
              </a>
            </li>
          );
        })}
      </ul>

      <a
        href="tel:192"
        className="mt-10 flex items-center justify-between gap-5 p-6 rounded-[2rem] gradient-warm text-primary-foreground shadow-bloom animate-pulse-soft"
      >
        <div className="flex items-center gap-5">
          <LifeBuoy className="size-12 shrink-0" />
          <div>
            <p className="text-sm uppercase tracking-wider opacity-90">Emergência</p>
            <p className="text-2xl font-bold">SAMU — Ligue 192</p>
          </div>
        </div>
        <span className="hidden md:block text-lg font-semibold opacity-95">Atendimento 24h</span>
      </a>
    </div>
  </section>
);
