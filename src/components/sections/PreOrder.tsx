"use client";

import { useEffect, useState } from "react";

// Target: next Friday at 23:59 local time
function getTarget(): Date {
  const now = new Date();
  const daysUntilFriday = (5 - now.getDay() + 7) % 7 || 7;
  const target = new Date(now);
  target.setDate(now.getDate() + daysUntilFriday);
  target.setHours(23, 59, 0, 0);
  return target;
}

function formatUnit(n: number) {
  return String(Math.max(0, n)).padStart(2, "0");
}

export function PreOrder() {
  const [target] = useState(getTarget);
  const [diff, setDiff] = useState(0);

  useEffect(() => {
    setDiff(target.getTime() - Date.now());
    const id = setInterval(() => setDiff(target.getTime() - Date.now()), 1000);
    return () => clearInterval(id);
  }, [target]);

  const totalSecs = Math.max(0, Math.floor(diff / 1000));
  const days  = Math.floor(totalSecs / 86400);
  const hours = Math.floor((totalSecs % 86400) / 3600);
  const mins  = Math.floor((totalSecs % 3600) / 60);
  const secs  = totalSecs % 60;

  return (
    <section id="preorder" className="preorder">
      <div className="wrap">
        <h2>
          CLOSES <span className="accent">FRIDAY.</span>
          <br />120 PAIRS.
          <br />ZERO RESTOCKS.
        </h2>

        <div className="ts">
          <div className="countdown">
            {[
              { num: formatUnit(days),  lbl: "Days"  },
              { num: formatUnit(hours), lbl: "Hours" },
              { num: formatUnit(mins),  lbl: "Min"   },
              { num: formatUnit(secs),  lbl: "Sec"   },
            ].map(({ num, lbl }) => (
              <div key={lbl} className="unit">
                <div className="num">{num}</div>
                <div className="lbl">{lbl}</div>
              </div>
            ))}
          </div>

          <p>
            Drop 04 is closing Friday at midnight. 120 pairs numbered and signed.
            When the run closes, it&rsquo;s over — no waitlist, no restocks, no exceptions.
          </p>

          <a href="#" className="btn btn-primary" style={{ marginTop: 20, display: "inline-flex" }}>
            Secure Your Pair
            <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
