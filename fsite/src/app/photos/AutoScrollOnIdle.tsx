"use client";
import { useEffect, useRef, useState } from "react";

export default function AutoScrollOnIdle({ children }: { children: React.ReactNode }) {
  const [idle, setIdle] = useState(false);
  const idleTimeout = useRef<NodeJS.Timeout | null>(null);
  const scrollInterval = useRef<NodeJS.Timeout | null>(null);
  const direction = useRef<"down" | "up">("down");

  const resetIdle = () => {
    setIdle(false);
    if (idleTimeout.current) clearTimeout(idleTimeout.current);
    if (scrollInterval.current) clearInterval(scrollInterval.current);
    idleTimeout.current = setTimeout(() => setIdle(true), 10000); // 1 minute
  };

  useEffect(() => {
    resetIdle();
    window.addEventListener("mousemove", resetIdle);
    window.addEventListener("keydown", resetIdle);
    window.addEventListener("touchstart", resetIdle);
    window.addEventListener("wheel", resetIdle);
    return () => {
      window.removeEventListener("mousemove", resetIdle);
      window.removeEventListener("keydown", resetIdle);
      window.removeEventListener("touchstart", resetIdle);
      window.removeEventListener("wheel", resetIdle);
      if (idleTimeout.current) clearTimeout(idleTimeout.current);
      if (scrollInterval.current) clearInterval(scrollInterval.current);
    };
  }, []);

  useEffect(() => {
    if (idle) {
      // Start auto-scroll
      scrollInterval.current = setInterval(() => {
        const scrollY = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const step = 1; // Faster and smoother
        if (direction.current === "down") {
          if (scrollY < maxScroll) {
            window.scrollTo({ top: Math.min(scrollY + step, maxScroll), behavior: "auto" });
          } else {
            direction.current = "up";
          }
        } else {
          if (scrollY > 0) {
            window.scrollTo({ top: Math.max(scrollY - step, 0), behavior: "auto" });
          } else {
            direction.current = "down";
          }
        }
      }, 10); // Smoother and faster
    } else {
      if (scrollInterval.current) clearInterval(scrollInterval.current);
    }
    // Clean up on unmount or idle change
    return () => {
      if (scrollInterval.current) clearInterval(scrollInterval.current);
    };
  }, [idle]);

  return <>{children}</>;
}
