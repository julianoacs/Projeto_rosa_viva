import { useState } from "react";
import { ChevronLeft, ChevronRight, Volume2 } from "lucide-react";
import selfexamImg from "@/assets/selfexam.jpg";
import { Button } from "@/components/ui/button";
import { useSpeech } from "@/hooks/useSpeech";

const steps = [
  {
    title: "1. Em frente ao espelho",
    text: "Fique de pé, com os braços ao longo do corpo. Observe suas mamas com calma: formato, tamanho e pele. Esse é o momento de se conhecer.",
  },
  {
    title: "2. Braços para cima",
    text: "Levante os braços lentamente acima da cabeça. Veja se há mudanças na pele, no contorno ou nos mamilos.",
  },
  {
    title: "3. Mãos na cintura",
    text: "Apoie as mãos na cintura e pressione suavemente, contraindo o peito. Observe novamente.",
  },
  {
    title: "4. Deitada com calma",
    text: "Deite-se de costas. Coloque um travesseiro sob o ombro direito e o braço direito atrás da cabeça. Use a mão esquerda para examinar a mama direita.",
  },
  {
    title: "5. Toque suave em círculos",
    text: "Com as pontas dos dedos, faça movimentos circulares suaves. Cubra toda a mama, inclusive a região da axila. Repita do outro lado.",
  },
  {
    title: "6. Aperte o mamilo",
    text: "Aperte delicadamente cada mamilo e observe se sai algum líquido. Se notar algo diferente, anote e converse com um médico.",
  },
];

export const SelfExam = () => {
  const [step, setStep] = useState(0);
  const { speak, speaking, stop } = useSpeech();
  const current = steps[step];

  return (
    <section id="autoexame" className="py-20 lg:py-28 gradient-soft">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-primary font-semibold uppercase tracking-wider text-sm">Autoexame</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-balance">
            Conheça seu corpo, <span className="text-primary">no seu ritmo</span>.
          </h2>
          <p className="mt-5 text-lg text-foreground/75 leading-relaxed">
            Faça uma vez por mês, de preferência alguns dias depois da menstruação. É um momento só seu, com carinho.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <img
              src={selfexamImg}
              alt="Ilustração delicada de uma mulher fazendo o autoexame em frente ao espelho"
              loading="lazy"
              width={1024}
              height={1024}
              className="rounded-[2rem] shadow-bloom bg-card"
            />
            <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-full bg-card shadow-soft font-bold text-primary">
              Passo {step + 1} de {steps.length}
            </div>
          </div>

          <div className="bg-card p-8 rounded-[2rem] shadow-card border border-border">
            <div className="flex gap-2 mb-6" role="progressbar" aria-valuenow={step + 1} aria-valuemin={1} aria-valuemax={steps.length}>
              {steps.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 flex-1 rounded-full transition-gentle ${
                    i <= step ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>

            <h3 className="text-3xl font-bold">{current.title}</h3>
            <p className="mt-4 text-xl leading-relaxed text-foreground/80">{current.text}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
              >
                <ChevronLeft /> Voltar
              </Button>
              <Button
                size="lg"
                onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
                disabled={step === steps.length - 1}
                className="gradient-warm"
              >
                Próximo passo <ChevronRight />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => (speaking ? stop() : speak(`${current.title}. ${current.text}`))}
                aria-label="Ouvir este passo"
              >
                <Volume2 /> Ouvir
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
