"use client";

import { useEffect, useMemo, useState } from "react";

type StatProps = {
  value: string;
  label: string;
};

export function Stat({ value, label }: StatProps) {
  const { target, suffix } = useMemo(() => {
    const match = value.match(/^(\d+)(.*)$/);
    return {
      target: match ? Number(match[1]) : 1,
      suffix: match?.[2] ?? ""
    };
  }, [value]);

  const [displayValue, setDisplayValue] = useState(1);

  useEffect(() => {
    let frameId = 0;
    let startTime = 0;
    const duration = 9000;

    const tick = (time: number) => {
      if (!startTime) startTime = time;

      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.max(1, Math.round(1 + (target - 1) * eased)));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    const delayId = window.setTimeout(() => {
      frameId = window.requestAnimationFrame(tick);
    }, 3500);

    return () => {
      window.clearTimeout(delayId);
      window.cancelAnimationFrame(frameId);
    };
  }, [target]);

  return (
    <div>
      <p>{displayValue}{suffix}</p>
      <span>{label}</span>
    </div>
  );
}
