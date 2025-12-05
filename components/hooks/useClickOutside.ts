"use client";

import { MutableRefObject, useEffect } from "react";

export default function useClickOutside(ref: MutableRefObject<HTMLElement | null>, handler: () => void) {
  useEffect(() => {
    const onPointer = (e: PointerEvent) => {
      if (!ref.current) return;
      const target = e.target as Node | null;
      if (target && ref.current.contains(target)) return;
      handler();
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handler();
    };

    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [ref, handler]);
}
