"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", target: "home" },
  { label: "Shop", target: "shop" },
  { label: "About", target: "about" },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    // Small delay lets the mobile menu close before scrolling
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 60);
    console.log("Scrolled");
  };

  return (
    <>
      {/* ─── Fixed background ─────────────────────────────────────── */}
      <div
        aria-hidden
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: "url('/images/bg_pink_space.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* ─── Navbar ───────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(255, 240, 245, 0.95)"
            : "rgba(255, 240, 245, 0.70)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: scrolled
            ? "1px solid rgba(224, 127, 160, 0.25)"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 2px 24px rgba(224, 127, 160, 0.12)" : "none",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px",
          }}
        >
          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            style={{ touchAction: "manipulation", background: "none", border: "none", cursor: "pointer", padding: 0, lineHeight: 0 }}
            aria-label="Go to top"
          >
            <Image
              src="/images/CrochetStoreTextLogo.png"
              alt="Crochet Store Logo"
              width={110}
              height={34}
              style={{ objectFit: "contain" }}
              priority
            />
          </button>

          {/* Desktop links — centered absolutely */}
          <div
            className="nav-desktop"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            {NAV_LINKS.map(({ label, target }) => (
              <button
                key={target}
                onClick={() => scrollTo(target)}
                className="nav-link"
                style={{
                  touchAction: "manipulation",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-nunito)",
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#2D1A2E",
                  padding: "6px 18px",
                  borderRadius: 999,
                  letterSpacing: "0.01em",
                  transition: "background 0.18s, color 0.18s",
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Hamburger — mobile only */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            style={{
              touchAction: "manipulation",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              gap: 5,
              WebkitTapHighlightColor: "transparent",
            }}
          >
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "#2D1A2E",
                borderRadius: 2,
                transition: "transform 0.2s, opacity 0.2s",
                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "#2D1A2E",
                borderRadius: 2,
                transition: "opacity 0.2s",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "#2D1A2E",
                borderRadius: 2,
                transition: "transform 0.2s, opacity 0.2s",
                transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="nav-mobile-menu">
            <div style={{ padding: "8px 16px 16px", display: "flex", flexDirection: "column", gap: 4 }}>
              {NAV_LINKS.map(({ label, target }) => (
                <button
                  key={target}
                  onClick={() => scrollTo(target)}
                  style={{
                    touchAction: "manipulation",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "var(--font-nunito)",
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#2D1A2E",
                    padding: "10px 16px",
                    borderRadius: 12,
                    textAlign: "left",
                    WebkitTapHighlightColor: "transparent",
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* ─── Centered card ────────────────────────────────────────── */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <main
          className="site-card"
          style={{
            background: "#ffffff",
            boxShadow: "0 0 60px rgba(45,26,46,0.22), 0 0 0 1px rgba(224,127,160,0.1)",
            width: "90%",
          }}
        >

          {/* ── HOME ──────────────────────────────────────────────── */}
          <section
            id="home"
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "100px 32px 64px",
              background: "linear-gradient(180deg,#FFF5F8 0%,#ffffff 100%)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
              <span style={{ color: "#FFB7D5", fontSize: 18 }}>✦</span>
              <span
                style={{
                  fontFamily: "var(--font-nunito)",
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#E07FA0",
                }}
              >
                Handmade with love
              </span>
              <span style={{ color: "#FFB7D5", fontSize: 18 }}>✦</span>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(32px, 8vw, 60px)",
                fontWeight: 600,
                color: "#2D1A2E",
                lineHeight: 1.15,
                marginBottom: 20,
                maxWidth: 520,
              }}
            >
              Your cozy corner of{" "}
              <span style={{ color: "#E07FA0" }}>crochet magic</span>
            </h1>

            <p
              style={{
                fontFamily: "var(--font-nunito)",
                fontSize: 16,
                lineHeight: 1.75,
                color: "#9B7B8C",
                maxWidth: 380,
                marginBottom: 36,
              }}
            >
              Beautiful, one-of-a-kind crochet pieces made with care.
              Add your tagline or welcome message here.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
              <button
                onClick={() => scrollTo("shop")}
                className="btn-primary"
                style={{
                  touchAction: "manipulation",
                  fontFamily: "var(--font-nunito)",
                  fontWeight: 800,
                  fontSize: 15,
                  color: "#fff",
                  background: "linear-gradient(135deg,#E07FA0 0%,#C0566A 100%)",
                  border: "none",
                  borderRadius: 999,
                  padding: "14px 32px",
                  cursor: "pointer",
                  boxShadow: "0 4px 20px rgba(224,127,160,0.45)",
                  letterSpacing: "0.02em",
                  WebkitTapHighlightColor: "transparent",
                  transition: "opacity 0.15s",
                }}
              >
                Browse the shop ↓
              </button>
              <button
                onClick={() => scrollTo("about")}
                className="btn-outline"
                style={{
                  touchAction: "manipulation",
                  fontFamily: "var(--font-nunito)",
                  fontWeight: 700,
                  fontSize: 15,
                  color: "#C0566A",
                  background: "transparent",
                  border: "2px solid #FFB7D5",
                  borderRadius: 999,
                  padding: "12px 28px",
                  cursor: "pointer",
                  WebkitTapHighlightColor: "transparent",
                  transition: "background 0.15s, border-color 0.15s",
                }}
              >
                About us
              </button>
            </div>

            <div
              style={{
                marginTop: 56,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
                color: "#D4A0B5",
              }}
            >
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                scroll
              </span>
              <span style={{ fontSize: 18, animation: "bounce 1.6s infinite" }}>↓</span>
            </div>
          </section>

          {/* Divider */}
          <div style={{ height: 2, background: "linear-gradient(90deg,transparent,#FFB7D5 30%,#FFB7D5 70%,transparent)", margin: "0 32px" }} />

          {/* ── SHOP ──────────────────────────────────────────────── */}
          <section
            id="shop"
            style={{
              minHeight: "100vh",
              padding: "72px 32px",
              background: "#ffffff",
            }}
          >
            <div style={{ marginBottom: 40 }}>
              <p style={{ fontFamily: "var(--font-nunito)", fontSize: 12, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#E07FA0", marginBottom: 10 }}>
                ✦ The collection
              </p>
              <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(26px, 5vw, 44px)", fontWeight: 600, color: "#2D1A2E", lineHeight: 1.2, marginBottom: 12 }}>
                Shop
              </h2>
              <p style={{ fontFamily: "var(--font-nunito)", fontSize: 15, color: "#9B7B8C", maxWidth: 360, lineHeight: 1.7 }}>
                Your shop description goes here. Tell customers what makes your pieces special.
              </p>
            </div>

            {/* Product grid */}
            <div className="product-grid">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="product-card">
                  <div
                    style={{
                      aspectRatio: "1",
                      background: "linear-gradient(135deg,#FFF0F5 0%,#FFE4EF 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 32,
                    }}
                  >
                    🧶
                  </div>
                  <div style={{ padding: 14 }}>
                    <p style={{ fontFamily: "var(--font-nunito)", fontWeight: 700, fontSize: 14, color: "#2D1A2E", marginBottom: 4 }}>
                      Product Name
                    </p>
                    <p style={{ fontFamily: "var(--font-nunito)", fontSize: 13, color: "#E07FA0", fontWeight: 700 }}>
                      $XX.XX
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Divider */}
          <div style={{ height: 2, background: "linear-gradient(90deg,transparent,#FFB7D5 30%,#FFB7D5 70%,transparent)", margin: "0 32px" }} />

          {/* ── ABOUT ─────────────────────────────────────────────── */}
          <section
            id="about"
            style={{
              minHeight: "80vh",
              padding: "72px 32px 88px",
              background: "linear-gradient(180deg,#ffffff 0%,#FFF5F8 100%)",
            }}
          >
            <div style={{ marginBottom: 40 }}>
              <p style={{ fontFamily: "var(--font-nunito)", fontSize: 12, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#E07FA0", marginBottom: 10 }}>
                ✦ Our story
              </p>
              <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(26px, 5vw, 44px)", fontWeight: 600, color: "#2D1A2E", lineHeight: 1.2 }}>
                About
              </h2>
            </div>

            <div className="about-grid">
              <div
                style={{
                  aspectRatio: "4/3",
                  borderRadius: 20,
                  background: "linear-gradient(135deg,#FFF0F5 0%,#FFE4EF 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 48,
                  border: "1.5px solid #FFD6E8",
                }}
              >
                🎀
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-nunito)", fontSize: 15, lineHeight: 1.8, color: "#9B7B8C", marginBottom: 20 }}>
                  Share your story here. Tell customers who you are, how you got started with crochet, and what drives your passion for creating.
                </p>
                <p style={{ fontFamily: "var(--font-nunito)", fontSize: 15, lineHeight: 1.8, color: "#9B7B8C" }}>
                  Add more details about your process, materials, or values. Make it personal and warm!
                </p>
              </div>
            </div>
          </section>

          {/* ── Footer ────────────────────────────────────────────── */}
          <footer
            style={{
              padding: "28px 32px",
              background: "#2D1A2E",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <Image
              src="/images/CrochetStoreLogo.png"
              alt="Crochet Store"
              width={90}
              height={28}
              style={{ objectFit: "contain",  }}
            />
            <p style={{ fontFamily: "var(--font-nunito)", fontSize: 13, color: "#9B7B8C", margin: 0 }}>
              © 2026 Crochet Store · Designed by Claude
            </p>
          </footer>
        </main>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }

        /* Card width: side strips on desktop, full-width on mobile */
        .site-card {
          width: calc(100vw - 160px);
        }

        /* Nav: show desktop links, hide hamburger by default */
        .nav-desktop { display: flex; }
        .nav-hamburger { display: none; }
        .nav-mobile-menu { display: none; }

        /* Desktop nav hover */
        .nav-link:hover {
          background: rgba(224, 127, 160, 0.18) !important;
          color: #C0566A !important;
        }

        /* Button hover — desktop only */
        @media (hover: hover) {
          .btn-primary:hover { opacity: 0.88; }
          .btn-outline:hover {
            background: #FFF0F5 !important;
            border-color: #E07FA0 !important;
          }
          .product-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 32px rgba(224,127,160,0.18);
          }
        }

        /* Product grid */
        .product-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .product-card {
          border-radius: 18px;
          overflow: hidden;
          border: 1.5px solid #FFE4EF;
          background: #FFF8FB;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        /* About two-column */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 36px;
          align-items: center;
        }

        /* ── Mobile breakpoint ── */
        @media (max-width: 640px) {
          /* Full-width card, no side strip */
          .site-card {
            width: 100vw !important;
            box-shadow: none !important;
          }

          /* Show hamburger, hide desktop links */
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
          .nav-mobile-menu { display: block !important; }

          /* Product grid → 2 columns on mobile */
          .product-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }

          /* About → stacked */
          .about-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }

        /* Narrow phones → 1 column product grid */
        @media (max-width: 380px) {
          .product-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Intermediate tablet: slightly narrower side strips */
        @media (min-width: 641px) and (max-width: 900px) {
          .site-card {
            width: calc(100vw - 80px) !important;
          }
        }
      `}</style>
    </>
  );
}