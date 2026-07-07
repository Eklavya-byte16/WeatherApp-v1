import { useEffect, useState } from "react";

function Counter({ to, suffix = "", duration = 1400, start }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let raf;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(Math.round(to * eased));

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [start, to, duration]);

  return (
    <span>
      {value}
      {suffix}
    </span>
  );
}

export default Counter;
