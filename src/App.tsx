
import { useState } from 'react'

const SERVER_IP = 'Lexturasmp.minevex.site'
const DISCORD_URL = 'https://discord.gg/HAkg5a6cK'

const ranks = [
  { name: 'VIP', price: 50, category: 'STARTER', perks: ['Exclusive VIP rank', 'Special rewards', 'VIP perks'] },
  { name: 'VIP+', price: 75, category: 'STARTER+', perks: ['VIP+ rank', 'Extra rewards', 'Exclusive perks'] },
  { name: 'MVP', price: 85, category: 'PREMIUM', perks: ['MVP rank', 'Special rewards', 'MVP perks'] },
  { name: 'MVP+', price: 95, category: 'PREMIUM+', perks: ['MVP+ rank', 'Better rewards', 'Exclusive perks'] },
  { name: 'ELITE', price: 115, category: 'ELITE', perks: ['Elite rank', 'Premium rewards', 'Elite perks'] },
  { name: 'ELITE+', price: 125, category: 'ELITE+', perks: ['Elite+ rank', 'Extra rewards', 'Special privileges'] },
  { name: 'LEXTURA', price: 145, category: 'SPECIAL', perks: ['Lextura rank', 'Legendary rewards', 'Exclusive privileges'] },
  { name: 'LEXTURA+', price: 150, category: 'SPECIAL+', perks: ['Lextura+ rank', 'Premium rewards', 'Special privileges'] },
  { name: 'CUSTOM RANK', price: 160, category: 'EXCLUSIVE', perks: ['Custom rank', 'Custom name and style', 'Special privileges'] },
]

export default function App() {
  const [copied, setCopied] = useState(false)

  async function copyIP() {
    try {
      await navigator.clipboard.writeText(SERVER_IP)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      alert('Server IP: ' + SERVER_IP)
    }
  }

  return (
    <div className="app">
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        button { font: inherit; }

        .app {
          min-height: 100vh;
          background: #08060e;
          color: white;
          font-family: Arial, sans-serif;
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 6%;
          background: #0d0915;
          border-bottom: 1px solid #38204d;
          position: sticky;
          top: 0;
          z-index: 5;
        }

        .brand {
          font-size: 21px;
          font-weight: 900;
          color: #c58aff;
          letter-spacing: 2px;
        }

        .links { display: flex; gap: 22px; flex-wrap: wrap; }
        .links a { color: #c9b8dc; text-decoration: none; }

        .hero {
          text-align: center;
          padding: 85px 6%;
          background: radial-gradient(ellipse at center, #32164b, #130b20 55%, #08060e 85%);
        }

        .hero h1 {
          font-size: clamp(42px, 8vw, 78px);
          letter-spacing: 4px;
          margin: 20px 0;
        }

        .hero p {
          color: #c4b2d7;
          line-height: 1.8;
          max-width: 650px;
          margin: 15px auto 30px;
        }

        .btn {
          display: inline-block;
          padding: 15px 24px;
          border-radius: 10px;
          font-weight: bold;
          cursor: pointer;
          text-decoration: none;
          border: 1px solid #8651b4;
        }

        .primary { background: #9149c8; color: white; }
        .secondary { background: #1a1422; color: #e4caff; }

        .section {
          padding: 65px 6%;
          max-width: 1250px;
          margin: auto;
        }

        .section h2 { text-align: center; font-size: 32px; }

        .sub {
          text-align: center;
          color: #a998bb;
          margin-bottom: 38px;
        }

        .ranks {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
          gap: 22px;
        }

        .rank {
          background: linear-gradient(145deg, #15151b, #0d0d13);
          border: 1px solid #39313f;
          border-radius: 24px;
          padding: 30px;
          transition: .2s;
        }

        .rank:hover {
          border-color: #a45bda;
          transform: translateY(-4px);
        }

        .category {
          color: #aaa4b5;
          font-size: 14px;
          font-weight: bold;
          letter-spacing: 3px;
        }

        .rank h3 { font-size: 38px; margin: 20px 0; }

        .price {
          font-size: 30px;
          font-weight: bold;
          margin: 18px 0;
          color: #c58aff;
        }

        .rank ul {
          list-style: none;
          padding: 0;
          margin: 25px 0;
        }

        .rank li {
          color: #c8c3d0;
          margin: 16px 0;
          font-size: 16px;
        }

        .rank li::before {
          content: '+';
          color: #c58aff;
          font-weight: bold;
          margin-right: 13px;
        }

        .join {
          text-align: center;
          background: #171020;
          border: 1px solid #563477;
          border-radius: 20px;
          padding: 35px;
        }

        .footer {
          text-align: center;
          padding: 30px;
          border-top: 1px solid #30203d;
          color: #92839e;
        }

        @media(max-width:600px) {
          .nav { flex-direction: column; gap: 15px; }
          .links { gap: 13px; font-size: 13px; justify-content: center; }
          .hero { padding: 60px 5%; }
          .section { padding: 45px 5%; }
          .rank { padding: 25px; }
        }
      `}</style>

      <header className="nav">
        <div className="brand">LEXTURASMP</div>
        <nav className="links">
          <a href="#ranks">Ranks</a>
          <a href="#join">Join</a>
          <a href="#faq">FAQ</a>
        </nav>
      </header>

      <section className="hero">
        <p>THE ULTIMATE SMP EXPERIENCE</p>
        <h1>LEXTURA<span style={{color:'#b875ed'}}>SMP</span></h1>
        <p>
          Welcome to LexturaSMP. Unlock exclusive ranks
          and experience your Minecraft adventure.
        </p>
        <a className="btn primary" href="#ranks">VIEW RANKS</a>
        {' '}
        <a
          className="btn secondary"
          href={DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          JOIN DISCORD
        </a>
        <div style={{marginTop:30}}>
          <button type="button" className="btn secondary" onClick={copyIP}>
            {copied ? 'IP COPIED' : 'COPY SERVER IP'}
          </button>
        </div>
      </section>

      <section id="ranks" className="section">
        <h2>OUR RANKS</h2>
        <p className="sub">Choose your rank and upgrade your adventure.</p>

        <div className="ranks">
          {ranks.map(rank => (
            <div className="rank" key={rank.name}>
              <div className="category">{rank.category}</div>
              <h3>{rank.name}</h3>
              <div className="price">₱{rank.price}</div>
              <ul>
                {rank.perks.map(perk => (
                  <li key={perk}>{perk}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="join" className="section">
        <div className="join">
          <h2>JOIN LEXTURASMP</h2>
          <p>Java and Bedrock players are welcome!</p>
          <button type="button" className="btn primary" onClick={copyIP}>
            {copied ? 'COPIED' : 'COPY SERVER IP'}
          </button>
          <p>{SERVER_IP}</p>
          <a
            className="btn secondary"
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            JOIN DISCORD
          </a>
        </div>
      </section>

      <section id="faq" className="section">
        <h2>FAQ</h2>
        <div className="rank">
          <h3>How do I get a rank?</h3>
          <p>Contact the LexturaSMP staff through Discord.</p>
          <h3>Can Java and Bedrock players join?</h3>
          <p>Yes! Both Java and Bedrock players are welcome.</p>
        </div>
      </section>

      <footer className="footer">
        © 2026 LexturaSMP. All rights reserved.
      </footer>
    </div>
  )
}
