import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Sizing Guide · CraftedByChris",
  description: "Custom shoe sizing guide for CBC hand-painted Air Force 1s — Crafted By Chris, Baltimore MD.",
};

export default function SizingPage() {
  return (
    <main style={{ background: "var(--ink)", minHeight: "100vh", padding: "0 1.5rem 4rem" }}>
      {/* Nav bar */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.5rem 0",
        borderBottom: "1px solid var(--rule)",
        marginBottom: "3rem",
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

      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--ash)",
          marginBottom: "1rem",
        }}>
          CBC · Help
        </p>
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          letterSpacing: "0.04em",
          lineHeight: 1,
          color: "var(--bone)",
          marginBottom: "1rem",
        }}>
          SIZING GUIDE.
        </h1>
        <p style={{ color: "var(--ash)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "2rem", maxWidth: "52ch" }}>
          All CBC custom pairs are built on Air Force 1 bases. AF1s run true to size
          for most customers. If you&rsquo;re between sizes, we recommend sizing up half.
          Questions? Reach out before ordering.
        </p>

        <Image
          src="/images/sizing.jpg"
          alt="CBC shoe sizing guide"
          width={900}
          height={600}
          style={{ width: "100%", height: "auto", borderRadius: 12, border: "1px solid var(--rule)" }}
          priority
        />

        <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link href="/custom-order" className="btn btn-primary" style={{ display: "inline-flex" }}>
            Place a Custom Order <span className="arrow">→</span>
          </Link>
          <Link href="/" className="btn btn-ghost" style={{ display: "inline-flex" }}>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
