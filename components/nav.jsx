import React from "react";

export default function Nav({
  brand = "rodyfeedsbmore",
  links = [
    { href: "#home", label: "Home" },
  ],
  onBrandClick,
}) {
  return (
    <>
      <style>{`
        .nav-root { font-family: Arial, sans-serif; }
        .nav-bar {
          height:56px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:0 16px;
          background:#fff;
          border-bottom:1px solid #e6e6e6;
          position:relative;
          z-index:10;
          box-shadow:0 1px 0 rgba(0,0,0,0.03);
        }
        .nav-brand { font-weight:700; font-size:16px; color:#222; cursor:pointer; }
        .nav-links { display:flex; gap:14px; align-items:center; }
        .nav-links a {
          color:#555;
          text-decoration:none;
          font-size:14px;
          padding:8px 6px;
          border-radius:4px;
        }
        .nav-links a:hover { color:#2ecc71; background:rgba(46,204,113,0.06); }
        .nav-toggle { display:none; background:none; border:0; font-size:20px; cursor:pointer; color:#555; }
        @media (max-width:640px) {
          .nav-links { display:none; }
          .nav-toggle { display:block; }
        }
      `}</style>

      <div className="nav-root">
        <header className="nav-bar" role="navigation" aria-label="Main navigation">
          <div
            className="nav-brand"
            onClick={(e) => onBrandClick && onBrandClick(e)}
            tabIndex={0}
            onKeyPress={(e) => (e.key === "Enter" && onBrandClick && onBrandClick(e))}
          >
            {brand}
          </div>

          <nav className="nav-links" aria-label="Primary">
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="nav-toggle"
            aria-label="Open menu"
            onClick={() => {
              // simple toggle for small screens: show/hide links
              const nav = document.querySelector(".nav-links");
              if (nav) nav.style.display = nav.style.display === "flex" ? "none" : "flex";
            }}
          >
            ☰
          </button>
        </header>
      </div>
    </>
  );
}
