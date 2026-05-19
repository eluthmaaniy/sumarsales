export const navTabs = [
  { to: "/", label: "About", icon: "ri-user-line" },
  { to: "/portfolio", label: "Portfolio", icon: "ri-layout-grid-line" },
  { to: "/gallery", label: "Gallery", icon: "ri-film-line" },
  { to: "/reviews", label: "Reviews", icon: "ri-chat-3-line" },
  { to: "/contact", label: "Contact", icon: "ri-mail-line" },
] as const;

export type NavTab = (typeof navTabs)[number];
