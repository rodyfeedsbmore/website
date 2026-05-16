import React, { useEffect, useState } from "react";

export default function DonorCarousel({ names = [
  "First Donator: Gabriela G $5", "Kei $25",
  "Robert Spicer $20", 
  "Joshua Green $25", 
  "CRH (Anon) $100", 
  "Melvin Woolfork $20", 
  "Kenny $20", 
  "Erkia $20"
], visible = 1.2, durationPerItem = 2 }) {
  // Ensure at least 1 item visible
  const list = names.length ? names : ["No donors yet"];
  // Compute total animation duration so each item stays for durationPerItem seconds
  const totalSeconds = list.length * durationPerItem;
  
  const [value, setValue] = useState(0);
  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => {
    if (value >= 80) return;
    const id = setInterval(() => {
      setValue((v) => {
        const next = Math.min(80, v + 1);
        setAnimateKey((k) => k + 1); // retrigger slide animation
        if (next >= 80) clearInterval(id);
        return next;
      });
    }, 40); // adjust speed (ms per increment)
    return () => clearInterval(id);
  }, [value]);

  // color morphs from black (0) to green (80)
  const pct = Math.min(1, value / 80);
  const color = `rgb(${Math.round(0 + (0 - 0) * pct)}, ${Math.round(
    0 + (128 - 0) * pct
  )}, ${Math.round(0 + (0 - 0) * pct)})`; // from rgb(0,0,0) to rgb(0,128,0)
    
  
  return (
    <section className="container-inner card">

      <style jsx>{`
        .small-this {
          font-size: 0.8rem;
          display: flex;
          justify-content: center;
          font-weight: bold;
        }
      `}</style>

      <div className="wrap">
      <h2 className="sentence">
        Delievered:
        <span
          className="number"
          key={animateKey} /* re-mount to retrigger CSS animation */
          style={{ color }}
        >
          {value}
        </span>
        / 250 Goodie Bags
      </h2>
    </div>
          

          <p className="small">
            Contact: <a href="mailto:rodyfeedsbmore@gmail.com">rodyfeedsbmore@gmail.com</a>
          </p>

          <p className="small">
            Donate: $rodyfeedsbmore (Cash App)
          </p>

    <img src="linkbreakers-io-qr-code-generator.svg" alt="Linebreakers QR Code" className="profile" />
    <p className="small">Scan to donate via Cash App

    </p>
      
    <div className="donor-wrap" style={{ height: `${visible * 1.6}rem` }}>
      <div
        className="donor-track"
        style={{
          // set animation duration dynamically for smooth timing
          animationDuration: `${totalSeconds}s`,
          // size of a single item used by CSS spacing; keep matching .donor-item height
        }}
        aria-live="polite"
      >
        {/* duplicate list for seamless infinite scroll */}
        {[...list, ...list].map((name, i) => (
          <p className="donor-item small-this" key={i}>
            {name}
          </p>
        ))}
      </div>
    </div>
    
    <p className="small">
      Last Delievery Run: 5/11/2026
    </p>
    </section>
  );
}
