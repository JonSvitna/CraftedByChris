"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function PreOrder() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, tag: "pre-order" }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="preorder" className="preorder">
      <div className="wrap">
        <h2>
          COMING <span className="accent">SOON.</span>
          <br />GET NOTIFIED
          <br />FIRST.
        </h2>

        <div className="ts">
          {status === "success" ? (
            <div style={{ padding: "2rem 0" }}>
              <p style={{ fontSize: "1.25rem", fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}>
                YOU&rsquo;RE ON THE LIST.
              </p>
              <p style={{ marginTop: "0.75rem", color: "var(--ash)", fontSize: "0.875rem" }}>
                Chris will reach out when the next run opens. Stay tuned.
              </p>
            </div>
          ) : (
            <>
              <p>
                Pre-orders are coming soon. Drop your info below and you&rsquo;ll be the
                first to know when the next run opens — no waitlist, just your place in line.
              </p>

              <form onSubmit={handleSubmit} style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 12 }}>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  style={{
                    padding: "12px 16px",
                    border: "1px solid var(--rule-strong)",
                    borderRadius: 8,
                    background: "transparent",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                    color: "var(--bone)",
                    outline: "none",
                  }}
                />
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    padding: "12px 16px",
                    border: "1px solid var(--rule-strong)",
                    borderRadius: 8,
                    background: "transparent",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                    color: "var(--bone)",
                    outline: "none",
                  }}
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn btn-primary"
                  style={{ marginTop: 8, display: "inline-flex", justifyContent: "center" }}
                >
                  {status === "loading" ? "Sending…" : "Notify Me When It Opens"}
                  {status !== "loading" && <span className="arrow">→</span>}
                </button>
                {status === "error" && (
                  <p style={{ color: "#e05c5c", fontSize: "0.8rem", marginTop: 4 }}>
                    Something went wrong. Try again or email us directly.
                  </p>
                )}
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
