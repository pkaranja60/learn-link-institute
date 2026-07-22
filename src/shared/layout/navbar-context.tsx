"use client";

import { createContext, type ReactNode, useContext, useState } from "react";

// ─────────────────────────────────────────────
// SECTION: Context Shape
// ─────────────────────────────────────────────

interface NavbarState {
  isNavSticky: boolean;
  setIsNavSticky: (value: boolean) => void;
}

const NavbarContext = createContext<NavbarState>({
  isNavSticky: false,
  setIsNavSticky: () => {
    // noop — overridden by provider
  },
});

// ─────────────────────────────────────────────
// SECTION: Provider
// ─────────────────────────────────────────────

export function NavbarProvider({ children }: { children: ReactNode }) {
  const [isNavSticky, setIsNavSticky] = useState(false);

  return (
    <NavbarContext.Provider value={{ isNavSticky, setIsNavSticky }}>
      {children}
    </NavbarContext.Provider>
  );
}

// ─────────────────────────────────────────────
// SECTION: Hook
// ─────────────────────────────────────────────

export function useNavbar() {
  return useContext(NavbarContext);
}
