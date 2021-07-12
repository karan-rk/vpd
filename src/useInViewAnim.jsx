import { useInView } from "react-hook-inview";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

export function useInViewAnim(threshold) {
  const [ref, isVisible] = useInView({
    threshold: threshold || 0.5,
    // unobserveOnEnter:true,
  });
  const controller = useAnimation();

  useEffect(() => {
    if (controller) {
      controller.set({ opacity: 0, y: 10 });
      if (isVisible) {
        controller.start({
          opacity: 1,
          y: 0,
        });
      }
      if (!isVisible) {
        controller.set({ opacity: 0, y: 10 });
      }
    }
  }, [isVisible, controller]);
  return [ref, controller];
}
