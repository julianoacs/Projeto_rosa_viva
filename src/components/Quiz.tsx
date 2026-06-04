import { useState } from "react";
import { CheckCircle2, XCircle, RefreshCw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const questions = [
  {
    q: "Com que frequência é recomendado fazer o autoexame das mamas?",
    options: ["Uma vez por semana", "Uma vez por mês", "Apenas quando sentir dor"],
    correct: 1,
    explain: "Uma vez por mês, alguns dias depois da menstruação, é o ideal.",
  },
  {
    q: "A partir de qual idade a mamografia é indicada pelo SUS para a maioria das mulheres?",
    options: ["A partir dos 30 anos", "A partir dos 50 anos", "Apenas após sintomas"],
    correct: 1,
    explain: "O SUS oferece mamografia de rastreio a partir dos 50 anos (ou antes, com indicação médica).",
  },
  {
    q: "Qual hábito ajuda a reduzir o risco de câncer de mama?",
    options: ["Praticar atividade física", "Pular refeições", "Ficar em casa o dia todo"],
    correct: 0,
    explain: "Movimento regular protege seu corpo e melhora seu bem-estar.",
  },
  {
    q: "Encontrar um caroço significa, com certeza, câncer?",
    options: ["Sim, sempre", "Não, mas merece avaliação médica", "Só se doer"],
    correct: 1,
    explain: "A maioria dos nódulos é benigna, mas todo achado merece ser avaliado por um profissional.",
  },
];

export const Quiz = () => {
  const [i, setI] = useState(0);
  const [answer, setAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const current = questions[i];

  const handleAnswer = (idx: number) => {
    if (answer !== null) return;
    setAnswer(idx);
    if (idx === current.correct) setScore((s) => s + 1);
  };

  const next = () => {
    if (i + 1 < questions.length) {
      setI(i + 1);
      setAnswer(null);
    } else {
      setDone(true);
    }
  };

  const reset = () => {
    setI(0); setAnswer(null); setScore(0); setDone(false);
  };

  return (
    <section id="quiz" className="py-20 lg:py-28 gradient-soft">
      <div className="container max-w-3xl">
        <div className="text-center">
          <p className="text-primary font-semibold uppercase tracking-wider text-sm">Quiz</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-balance">
            Teste o que você <span className="text-primary">já sabe</span>.
          </h2>
          <p className="mt-5 text-lg text-foreground/75">
            Sem certo ou errado: cada resposta é um aprendizado.
          </p>
        </div>

        <div className="mt-10 p-8 rounded-[2rem] bg-card shadow-bloom border border-border">
          {done ? (
            <div className="text-center py-8 animate-bloom">
              <Sparkles className="size-16 mx-auto text-primary" />
              <h3 className="mt-4 text-3xl font-bold">Você acertou {score} de {questions.length}!</h3>
              <p className="mt-3 text-lg text-foreground/75">
                O importante é continuar aprendendo e cuidando de você. ❤
              </p>
              <Button size="lg" onClick={reset} className="mt-6 gradient-warm">
                <RefreshCw /> Refazer o quiz
              </Button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-6">
                <span className="font-semibold text-primary">Pergunta {i + 1}/{questions.length}</span>
                <span className="font-semibold text-foreground/60">Acertos: {score}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold leading-snug">{current.q}</h3>
              <ul className="mt-6 grid gap-3">
                {current.options.map((opt, idx) => {
                  const isCorrect = idx === current.correct;
                  const isSelected = answer === idx;
                  const showState = answer !== null;
                  return (
                    <li key={idx}>
                      <button
                        onClick={() => handleAnswer(idx)}
                        disabled={answer !== null}
                        className={`w-full text-left p-5 rounded-2xl border-2 text-lg font-semibold flex items-center justify-between gap-3 transition-gentle ${
                          showState && isCorrect
                            ? "border-primary bg-primary-soft"
                            : showState && isSelected && !isCorrect
                            ? "border-destructive bg-destructive/10"
                            : "border-border bg-card hover:border-primary/40 hover:bg-primary-soft/40"
                        }`}
                      >
                        {opt}
                        {showState && isCorrect && <CheckCircle2 className="text-primary" />}
                        {showState && isSelected && !isCorrect && <XCircle className="text-destructive" />}
                      </button>
                    </li>
                  );
                })}
              </ul>
              {answer !== null && (
                <div className="mt-6 p-5 rounded-2xl bg-secondary animate-bloom">
                  <p className="text-secondary-foreground"><strong>💡 </strong>{current.explain}</p>
                  <Button onClick={next} size="lg" className="mt-4 gradient-warm">
                    {i + 1 === questions.length ? "Ver resultado" : "Próxima pergunta"}
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};
