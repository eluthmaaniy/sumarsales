import type { ReactNode } from "react";
import { useLocation } from "@tanstack/react-router";
import { BottomNav } from "./BottomNav";
import { ProfileCard } from "./ProfileCard";
import { PartnerMarquee } from "./PartnerMarquee";
import { useScrollToNextPage } from "@/hooks/use-scroll-to-next-page";
import { SITE } from "@/lib/site";

export function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const { atBottom, nextTab } = useScrollToNextPage();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main key={pathname} className="page-enter flex-1 pb-nav pt-0">
        <ProfileCard />
        <PartnerMarquee />
        {children}
      </main>
      <footer className="pb-nav">
        <div className="mx-auto max-w-2xl px-6 pb-6 pt-4 text-center text-xs text-muted-foreground">
          © 2026 {SITE.name}. All rights reserved.
        </div>
      </footer>
      {atBottom && nextTab && (
        <div className="next-page-hint glass-pill pointer-events-none" aria-hidden>
          <i className="ri-arrow-down-s-line bounce-down" />
          <span>Continue to {nextTab.label}</span>
        </div>
      )}
      <BottomNav />
    </div>
  );
}
