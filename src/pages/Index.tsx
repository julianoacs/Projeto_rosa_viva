import { AccessibilityBar } from "@/components/AccessibilityBar";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Prevention } from "@/components/Prevention";
import { SelfExam } from "@/components/SelfExam";
import { WarningSigns } from "@/components/WarningSigns";
import { Quiz } from "@/components/Quiz";
import { Support } from "@/components/Support";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Rosa Viva — Conectando Mulheres à Prevenção";
    const meta = document.querySelector('meta[name="description"]') || (() => {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
      return m;
    })();
    meta.setAttribute(
      "content",
      "Rosa Viva: informação acolhedora sobre prevenção do câncer de mama, autoexame, sinais de alerta e apoio. Acessível para todas as mulheres."
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <AccessibilityBar />
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <Prevention />
        <SelfExam />
        <WarningSigns />
        <Quiz />
        <Support />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
