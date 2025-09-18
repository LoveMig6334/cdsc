"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const router = useRouter();
  const [transitioning, setTransitioning] = useState(false);
  const [targetPath, setTargetPath] = useState("");

  // Navigation handler that adds a delay for transition animation
  const handleNavigation = useCallback(
    (path: string) => {
      setTransitioning(true);
      setTargetPath(path);

      // Navigate after the animation completes
      setTimeout(() => {
        router.push(path);
        setTransitioning(false);
      }, 500); // Match this with the exit animation duration
    },
    [router]
  );

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={transitioning ? "transitioning" : "content"}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
