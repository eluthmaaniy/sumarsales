import { Link, useLocation } from "@tanstack/react-router";
import { navTabs as tabs } from "./nav-tabs";

export function BottomNav() {
  const { pathname } = useLocation();

  return (
    <nav aria-label="Primary" className="floating-nav">
      {tabs.map((t) => {
        const isActive =
          t.to === "/" ? pathname === "/" : pathname === t.to || pathname.startsWith(`${t.to}/`);
        return (
          <Link
            key={t.to}
            to={t.to}
            className={`nav-tab ${isActive ? "active" : ""}`}
            aria-current={isActive ? "page" : undefined}
          >
            <i className={t.icon} aria-hidden />
            <span className="nav-label">{t.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
