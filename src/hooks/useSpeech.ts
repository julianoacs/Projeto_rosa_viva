import { useCallback, useEffect, useState } from "react";

export const useSpeech = () => {
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    const onEnd = () => setSpeaking(false);
    window.speechSynthesis?.addEventListener?.("voiceschanged", () => {});
    return () => {
      window.speechSynthesis?.cancel?.();
      window.removeEventListener("end", onEnd);
    };
  }, []);

  const speak = useCallback((text: string) => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "pt-BR";
    u.rate = 0.95;
    u.pitch = 1;
    u.onend = () => setSpeaking(false);
    u.onerror = () => setSpeaking(false);
    setSpeaking(true);
    window.speechSynthesis.speak(u);
  }, []);

  const stop = useCallback(() => {
    window.speechSynthesis?.cancel();
    setSpeaking(false);
  }, []);

  const speakPage = useCallback(() => {
    const main = document.querySelector("main");
    const text = main?.innerText?.replace(/\s+/g, " ").slice(0, 4000) ?? "";
    if (text) speak(text);
  }, [speak]);

  return { speaking, speak, stop, speakPage };
};
