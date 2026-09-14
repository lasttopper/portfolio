import { useRef } from "react";
import type { MouseEvent } from "react";

/**
 * Lightweight 3D tilt hook. Returns ref + mouse handlers applying a subtle,
 * clamped rotateX/rotateY. Disabled on touch devices (no hover) and when
 * reduced motion is preferred. Smoothly resets on pointer leave.
 */
export function useTilt<T extends HTMLElement>(max = 3, enabled = true) {
  const ref = useRef<T | null>(null);

  const onMouseMove = (e: MouseEvent<T>) => {
    const el = ref.current;
    if (!el || !enabled) return;

    // Skip on coarse (touch) pointers
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    const rx = (-py * max).toFixed(2);
    const ry = (px * max).toFixed(2);

    // transition only applied on leave (see onMouseLeave) so movement is 1:1
    el.style.transition = "transform 0.08s ease-out";
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)";
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  };

  return { ref, onMouseMove, onMouseLeave };
}
