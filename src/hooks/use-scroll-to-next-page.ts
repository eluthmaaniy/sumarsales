import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { navTabs } from "@/components/site/nav-tabs";

const BOTTOM_THRESHOLD = 4;
const TOUCH_DELTA = 30;
const COOLDOWN_MS = 800;

export function useScrollToNextPage() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [atBottom, setAtBottom] = useState(false);

  const cooldownUntil = useRef(0);
  const touchStartY = useRef<number | null>(null);
  const atBottomRef = useRef(false);

  const currentIndex = navTabs.findIndex((t) => t.to === pathname);
  const nextTab =
    currentIndex >= 0 && currentIndex < navTabs.length - 1
      ? navTabs[currentIndex + 1]
      : null;

  useEffect(() => {
    atBottomRef.current = atBottom;
  }, [atBottom]);

  useEffect(() => {
    setAtBottom(false);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkBottom = () => {
      const scrolled = window.innerHeight + window.scrollY;
      const total = document.documentElement.scrollHeight;
      setAtBottom(scrolled >= total - BOTTOM_THRESHOLD);
    };

    const triggerNext = () => {
      if (!nextTab) return;
      if (Date.now() < cooldownUntil.current) return;
      if (!atBottomRef.current) return;
      cooldownUntil.current = Date.now() + COOLDOWN_MS;
      navigate({ to: nextTab.to });
    };

    const onScroll = () => checkBottom();
    const onWheel = (e: WheelEvent) => {
      if (atBottomRef.current && e.deltaY > 0) triggerNext();
    };
    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0]?.clientY ?? null;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (touchStartY.current == null) return;
      const currentY = e.touches[0]?.clientY ?? touchStartY.current;
      const delta = touchStartY.current - currentY;
      if (atBottomRef.current && delta > TOUCH_DELTA) {
        triggerNext();
        touchStartY.current = null;
      }
    };
    const onTouchEnd = () => {
      touchStartY.current = null;
    };

    checkBottom();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("resize", checkBottom);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", checkBottom);
    };
  }, [nextTab, navigate]);

  return {
    atBottom: atBottom && !!nextTab,
    nextTab,
  };
}
