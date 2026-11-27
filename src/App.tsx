
import { useState } from "react";
import "./index.css";

const SERVER_IP = "Lexturasmp.minevex.site";
const DISCORD_URL = "https://discord.gg/HAkg5a6cK";
const GCASH = "09319176296";

const ranks = [
  { name: "VIP", price: 50, category: "STARTER", perks: ["Exclusive VIP rank", "Special rewards", "VIP perks"] },
  { name: "VIP+", price: 75, category: "STARTER+", perks: ["VIP+ rank", "Extra rewards", "Exclusive perks"] },
  { name: "MVP", price: 85, category: "PREMIUM", perks: ["MVP rank", "Special rewards", "MVP perks"] },
  { name: "MVP+", price: 95, category: "PREMIUM+", perks: ["MVP+ rank", "Better rewards", "Exclusive perks"] },
  { name: "ELITE", price: 115, category: "ELITE", perks: ["Elite rank", "Premium rewards", "Elite perks"] },
  { name: "ELITE+", price: 125, category: "ELITE+", perks: ["Elite+ rank", "Extra rewards", "Special privileges"] },
  { name: "LEXTURA", price: 145, category: "SPECIAL", perks: ["Lextura rank", "Legendary rewards", "Exclusive privileges"] },
  { name: "LEXTURA+", price: 150, category: "SPECIAL+", perks: ["Lextura+ rank", "Premium rewards", "Special privileges"] },
  { name: "CUSTOM RANK", price: 160, category: "EXCLUSIVE", perks: ["Custom rank", "Custom name and style", "Special privileges"] }
];

export default function App() {
  const [selected, setSelected] = useState(null);
  const [payment, setPayment] = useState("GCash");
  const [username, setUsername] = useState("");
  const [proof, setProof] = useState(null);
  const [order, setOrder] = useState(false);

  const copyIP = async () => {
    try {
      await navigator.clipboard.writeText(SERVER_IP);
      alert("Server IP copied!");
    } catch {
      alert("Server IP: " + SERVER_IP);
    }
  };

  const submitOrder = (e) => {
    e.preventDefault();
    if (!selected || !username.trim()) return;
    setOrder(true);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <a className="logo" href="#">LEXTURA<span>SMP</span></a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#store">Store</a>
          <a href="#about">About</a>
        </div>
        <a className="discord" href={DISCORD_URL} target="_blank" rel="noreferrer">
          Discord
        </a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-tag">✦ OFFICIAL MINECRAFT SERVER STORE ✦</div>
        <h1>WELCOME TO<br /><span>LEXTURASMP</span></h1>
        <p>Upgrade your adventure. Unlock exclusive ranks and rewards.</p>
        <div className="hero-actions">
          <a href="#store" className="primary-btn">EXPLORE RANKS</a>
          <button className="secondary-btn" onClick={copyIP}>COPY SERVER IP</button>
        </div>
        <div className="server-ip">
          SERVER IP: <strong>{SERVER_IP}</strong>
        </div>
      </section>

      <section className="store-section" id="store">
        <div className="section-heading">
          <span>✦ OUR STORE ✦</span>
          <h2>CHOOSE YOUR <span>RANK</span></h2>
          <p>Choose your favorite rank and upgrade your gameplay.</p>
        </div>

        <div className="rank-grid">
          {ranks.map((rank) => (
            <div className="rank-card" key={rank.name}>
              <div className="rank-category">{rank.category}</div>
              <h3>{rank.name}</h3>
              <div className="price">₱{rank.price}<small> PHP</small></div>
              <div className="rank-line" />
              <ul>
                {rank.perks.map((perk) => (
                  <li key={perk}>✦ {perk}</li>
                ))}
              </ul>
              <button
                className="buy-btn"
                onClick={() => {
                  setSelected(rank);
                  setOrder(false);
                  document.getElementById("checkout").scrollIntoView({ behavior: "smooth" });
                }}
              >
                BUY NOW →
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="checkout-section" id="checkout">
        <div className="section-heading">
          <span>✦ SECURE CHECKOUT ✦</span>
          <h2>COMPLETE YOUR <span>ORDER</span></h2>
          <p>Review your rank and payment information.</p>
        </div>

        <form className="checkout-box" onSubmit={submitOrder}>
          {selected ? (
            <>
              <div className="selected-rank">
                <div>
                  <small>SELECTED RANK</small>
                  <h3>{selected.name}</h3>
                </div>
                <strong>₱{selected.price}</strong>
              </div>

              <label>Minecraft Username</label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your Minecraft username"
                required
              />

              <label>Choose Payment Method</label>
              <div className="payment-options">
                <button
                  type="button"
                  className={payment === "GCash" ? "payment active" : "payment"}
                  onClick={() => setPayment("GCash")}
                >
                  GCash
                </button>
                <button
                  type="button"
                  className={payment === "Maya" ? "payment active" : "payment"}
                  onClick={() => setPayment("Maya")}
                >
                  Maya
                </button>
              </div>

              <div className="payment-details">
                {payment === "GCash" ? (
                  <>
                    <small>GCASH ACCOUNT NUMBER</small>
                    <h3>{GCASH}</h3>
                    <button
                      type="button"
                      className="copy-btn"
                      onClick={() => navigator.clipboard.writeText(GCASH).then(() => alert("Copied!"))}
                    >
                      COPY NUMBER
                    </button>
                  </>
                ) : (
                  <>
                    <small>MAYA PAYMENT</small>
                    <h3>COMING SOON</h3>
                    <p>Maya payment details are not available yet.</p>
                  </>
                )}
              </div>

              <label>Payment Proof (Optional)</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setProof(e.target.files?.[0] || null)}
              />
              {proof && <small>Selected: {proof.name}</small>}

              <button
                className="primary-btn submit-btn"
                type="submit"
                disabled={payment === "Maya"}
              >
                SUBMIT ORDER
              </button>

              {order && (
                <div className="order-success">
                  <h3>ORDER DETAILS CREATED!</h3>
                  <p>Rank: {selected.name}</p>
                  <p>Username: {username}</p>
                  <p>Payment: {payment}</p>
                  <p>Status: PENDING VERIFICATION</p>
                  <p>Contact the server staff through Discord to complete verification.</p>
                  <a href={DISCORD_URL} target="_blank" rel="noreferrer">OPEN DISCORD →</a>
                </div>
              )}
            </>
          ) : (
            <div className="empty-checkout">
              <h3>NO RANK SELECTED</h3>
              <p>Please select a rank from the store first.</p>
              <a href="#store" className="primary-btn">BROWSE RANKS</a>
            </div>
          )}
        </form>
      </section>

      <section className="about-section" id="about">
        <h2>ABOUT <span>LEXTURASMP</span></h2>
        <p>Your adventure. Your rank. Your legacy.</p>
        <button className="secondary-btn" onClick={copyIP}>COPY SERVER IP</button>
      </section>

      <footer>
        <a className="logo" href="#">LEXTURA<span>SMP</span></a>
        <p>© 2026 LEXTURASMP. All rights reserved.</p>
        <p>Not affiliated with Mojang or Microsoft.</p>
      </footer>
    </div>
  );
}

