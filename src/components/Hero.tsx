import { ArrowRight, BookHeart, HandHeart, Stethoscope } from "lucide-react";
import heroImg from "@/assets/hero-women.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden gradient-hero">
      <div className="absolute -top-24 -left-24 size-72 rounded-full bg-primary/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-24 -right-24 size-72 rounded-full bg-accent/20 blur-3xl" aria-hidden />

      <div className="container relative grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
        <div className="animate-bloom">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-soft text-primary font-semibold text-sm">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            Cuidar de você é um ato de amor
          </span>
          <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-balance">
            Conhecer é o<br />
            primeiro passo para <span className="text-primary">se cuidar</span>.
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-foreground/75 max-w-xl text-balance leading-relaxed">
            Aqui você encontra informação acolhedora, simples e confiável sobre prevenção do câncer de mama. Sem pressa, sem medo — no seu tempo.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#prevencao"
              className="group inline-flex items-center justify-center gap-3 px-7 py-5 rounded-2xl gradient-warm text-primary-foreground text-lg font-bold shadow-bloom hover:scale-[1.02] transition-gentle"
            >
              <BookHeart className="size-6" />
              Aprender sobre prevenção
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-gentle" />
            </a>
            <a
              href="#autoexame"
              className="inline-flex items-center justify-center gap-3 px-7 py-5 rounded-2xl bg-card border-2 border-primary/30 text-primary text-lg font-bold hover:bg-primary-soft transition-gentle"
            >
              <HandHeart className="size-6" />
              Como fazer o autoexame
            </a>
            <a
              href="#sinais"
              className="inline-flex items-center justify-center gap-3 px-7 py-5 rounded-2xl bg-card border-2 border-accent/30 text-accent text-lg font-bold hover:bg-accent-soft transition-gentle"
            >
              <Stethoscope className="size-6" />
              Quando procurar um médico
            </a>
          </div>
        </div>

        <div className="relative animate-float">
          <div className="absolute inset-0 gradient-warm rounded-[3rem] blur-3xl opacity-30" aria-hidden />
          <img
            src={heroImg}
            alt="Ilustração de mulheres de diferentes idades abraçadas em sinal de apoio mútuo, com flores rosas e laço da campanha Outubro Rosa"
            width={1536}
            height={1280}
            className="relative rounded-[3rem] shadow-bloom bg-card"
          />
        </div>
      </div>
    </section>
  );
};
