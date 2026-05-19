import { Link } from "@tanstack/react-router";
import { User, LayoutGrid, Images, MessageSquare, Mail } from "lucide-react";

const tabs: Array<{ to: "/" | "/portfolio" | "/gallery" | "/reviews" | "/contact"; label: string; icon: typeof User; exact?: boolean }> = [
  { to: "/", label: "About", icon: User, exact: true },
  { to: "/portfolio", label: "Portfolio", icon: LayoutGrid },
  { to: "/gallery", label: "Gallery", icon: Images },
  { to: "/reviews", label: "Reviews", icon: MessageSquare },
  { to: "/contact", label: "Contact", icon: Mail },
];

export function BottomNav() {
  return (
    <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 px-3 w-full max-w-md">
      <nav className="flex items-center justify-between rounded-full border border-border bg-card/95 px-2 py-2 shadow-lg backdrop-blur">
        {tabs.map(({ to, label, icon: Icon, exact }) => (
          <Link
            key={to}
            to={to}
            activeOptions={{ exact: !!exact }}
            className="group flex flex-1 flex-col items-center gap-0.5 rounded-full px-2 py-1.5 text-[10px] font-medium text-muted-foreground transition-colors data-[status=active]:bg-primary/10 data-[status=active]:text-primary"
          >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
