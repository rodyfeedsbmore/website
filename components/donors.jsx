import React from "react";

export default function DonorCarousel({ names = [
  "First Donator: Gabriela G $5", "Robert Spicer $20", "Joshua Green $25", "CRH (Anon) $100", 
  "Melvin Woolfork $20", "Kenny $20", "Erkia $20"
], visible = 1.2, durationPerItem = 2 }) {
  // Ensure at least 1 item visible
  const list = names.length ? names : ["No donors yet"];
  // Compute total animation duration so each item stays for durationPerItem seconds
  const totalSeconds = list.length * durationPerItem;
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

    <h2>Delievered 80+ Goodie Bags to people in need within Baltimore with help thanks to our donators!</h2>
          

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
