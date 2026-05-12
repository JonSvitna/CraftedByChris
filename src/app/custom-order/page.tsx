"use client";

import Link from "next/link";
import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function CustomOrderPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [source, setSource] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message, source, tag: "custom-order" }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 18px",
    border: "1px solid rgba(10,10,12,0.2)",
    borderRadius: 10,
    background: "transparent",
    fontFamily: "var(--font-body)",
    fontSize: "0.95rem",
    color: "var(--bone)",
    outline: "none",
    boxSizing: "border-box",
  };

  return (
    <main style={{ background: "var(--ink)", minHeight: "100vh", padding: "0 1.5rem 4rem" }}>
      {/* Nav bar */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.5rem 0",
        borderBottom: "1px solid var(--rule)",
        marginBottom: "4rem",
      }}>
        <Link href="/" style={{
          fontFamily: "var(--font-display)",
          fontSize: "1rem",
          color: "var(--bone)",
          textDecoration: "none",
          letterSpacing: "0.04em",
        }}>
          ← CRAFTEDBYCHRIS
        </Link>
      </div>

      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        {status === "success" ? (
          <div style={{ textAlign: "center", paddingTop: "4rem" }}>
            <p style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 6vw, 3.5rem)",
              letterSpacing: "0.04em",
              lineHeight: 1,
              color: "var(--bone)",
            }}>
              REQUEST SENT.
            </p>
            <p style={{ marginTop: "1.25rem", color: "var(--ash)", fontSize: "0.95rem", lineHeight: 1.6 }}>
              Chris will review your request and reach out within 1–3 business days to discuss
              your custom pair. Keep an eye on your inbox.
            </p>
            <Link href="/" className="btn btn-primary" style={{ marginTop: "2rem", display: "inline-flex" }}>
              Back to Home <span className="arrow">→</span>
            </Link>
          </div>
        ) : (
          <>
            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--ash)",
              marginBottom: "1rem",
            }}>
              CBC · Custom Order
            </p>
            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
              letterSpacing: "0.03em",
              lineHeight: 1,
              color: "var(--bone)",
              marginBottom: "1rem",
            }}>
              GET A CUSTOM<br />PAIR.
            </h1>
            <p style={{ color: "var(--ash)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "2.5rem", maxWidth: "52ch" }}>
              Tell Chris what you have in mind — your team, your colors, your vision.
              This is a general inquiry. Chris will reach out to discuss every detail
              before anything is started. No commitment yet, just a conversation.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--ash)", marginBottom: 6 }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    required
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--ash)", marginBottom: 6 }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--ash)", marginBottom: 6 }}>
                  Phone <span style={{ opacity: 0.5 }}>(optional)</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(443) 555-0100"
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--ash)", marginBottom: 6 }}>
                  What do you have in mind? *
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="My team, colors, style… e.g. 'Ravens colors on AF1 lows, black base, purple and gold accents, number 8 on the heel.'"
                  required
                  rows={5}
                  style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--ash)", marginBottom: 6 }}>
                  How did you hear about us? <span style={{ opacity: 0.5 }}>(optional)</span>
                </label>
                <input
                  type="text"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                  placeholder="Etsy, Instagram, word of mouth…"
                  style={inputStyle}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn btn-primary"
                style={{ marginTop: 8, display: "flex", justifyContent: "center", width: "100%" }}
              >
                {status === "loading" ? "Sending your request…" : "Send My Request"}
                {status !== "loading" && <span className="arrow">→</span>}
              </button>

              {status === "error" && (
                <p style={{ color: "#e05c5c", fontSize: "0.8rem", textAlign: "center" }}>
                  Something went wrong. Please try again or email craftedbychrisllc@gmail.com directly.
                </p>
              )}

              <p style={{ fontSize: "0.75rem", color: "var(--ash)", textAlign: "center", marginTop: 4, lineHeight: 1.6 }}>
                This is a general inquiry — no payment is collected here.
                Chris will reach out within 1–3 business days to discuss your custom order.
              </p>
            </form>
          </>
        )}
      </div>
    </main>
  );
}
