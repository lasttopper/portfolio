import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[55] h-1 origin-left bg-gradient-to-r from-[#FF3B30] via-[#22C55E] to-[#3B82F6]"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
