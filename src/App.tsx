
import { useState } from 'react'

const SERVER_IP = 'Lexturasmp.minevex.site'
const DISCORD_URL = 'https://discord.gg/HAkg5a6cK'

const ranks = [
  { name: 'VIP', price: '₱50', color: '#37bfff', icon: '⚡', perks: ['Exclusive VIP rank', 'Special rewards', 'VIP perks'] },
  { name: 'ELITE', price: '₱100', color: '#8b70ff', icon: '💎', perks: ['Elite rank', 'Better rewards', 'Exclusive perks'] },
  { name: 'LEGEND', price: '₱200', color: '#ffc857', icon: '👑', perks: ['Legend rank', 'Premium rewards', 'Special privileges'] },
]

export default function App() {
  const [copied, setCopied] = useState(false)

  async function copyIP() {
    try {
      await navigator.clipboard.writeText(SERVER_IP)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      alert('Please copy the IP: ' + SERVER_IP)
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#030817',
      color: '#eaf4ff',
      fontFamily: 'Arial, sans-serif',
    }}>
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        .nav { display:flex; justify-content:space-between; align-items:center; padding:18px 6%; border-bottom:1px solid #142c53; background:#050b1b; position:sticky; top:0; z-index:5; }
        .links { display:flex; gap:22px; }
        .links a { color:#b6c8e8; text-decoration:none; }
        .hero { padding:80px 6% 60px; text-align:center; background:radial-gradient(ellipse at center,#103c81 0%,#07152e 48%,#030817 80%); }
        .hero h1 { font-size:clamp(38px,8vw,78px); margin:15px 0; font-weight:900; letter-spacing:3px; }
        .hero p { color:#a9bfdf; font-size:17px; line-height:1.7; max-width:650px; margin:15px auto 30px; }
        .btn { display:inline-block; padding:15px 22px; border-radius:9px; text-decoration:none; font-weight:bold; border:1px solid #238bff; cursor:pointer; }
        .primary { color:white; background:linear-gradient(110deg,#126bff,#22c9ff); }
        .secondary { color:#bdeaff; background:#07152d; }
        .section { padding:65px 6%; max-width:1200px; margin:auto; }
        .section h2 { text-align:center; font-size:32px; margin-bottom:12px; }
        .sub { text-align:center; color:#90a9ce; margin-bottom:35px; }
        .ranks { display:grid; grid-template-columns:repeat(auto-fit,minmax(230px,1fr)); gap:20px; }
        .rank { padding:25px; border:1px solid #1b3e70; background:linear-gradient(160deg,#0c1b38,#060d1e); border-radius:15px; }
        .rank h3 { font-size:25px; margin:12px 0; }
        .price { font-size:32px; font-weight:bold; margin:20px 0; }
        .rank li { color:#afc5e7; margin:12px 0; }
        .rank button { width:100%; margin-top:15px; }
        .join { text-align:center; border:1px solid #174a85; border-radius:16px; background:#07152c; padding:30px; }
        .footer { text-align:center; color:#6e87ac; border-top:1px solid #15294a; padding:25px; }
        @media(max-width:600px) {
          .nav { padding:15px 4%; }
          .links { gap:12px; font-size:13px; }
          .hero { padding-top:55px; }
          .section { padding:50px 5%; }
        }
      `}</style>

      <header className="nav">
        <strong style={{ color: '#46c8ff', fontSize: 20 }}>⚡ LexturaSMP</strong>
        <nav className="links">
          <a href="#ranks">Ranks</a>
          <a href="#join">Join</a>
          <a href="#faq">FAQ</a>
        </nav>
      </header>

      <section className="hero">
        <div style={{ fontSize: 80 }}>⚔️</div>
        <p style={{ color: '#43bfff', fontWeight: 'bold', letterSpacing: 4 }}>
          THE ULTIMATE SMP EXPERIENCE
        </p>
        <h1>LEXTURA<span style={{ color: '#35bfff' }}>SMP</span></h1>
        <p>
          Welcome to LexturaSMP! Unlock exclusive ranks, get rewards,
          and experience your Minecraft adventure like never before.
        </p>
        <a className="btn primary" href="#ranks">✦ VIEW RANKS</a>
        {' '}
        <a className="btn secondary" href={DISCORD_URL}>JOIN DISCORD</a>
        <div style={{ marginTop: 35 }}>
          <button className="btn secondary" onClick={copyIP}>
            🎮 {copied ? 'IP COPIED!' : SERVER IP: ' + SERVER_IP}
          </button>
        </div>
      </section>

      <section id="ranks" className="section">
        <h2>✦ OUR RANKS ✦</h2>
        <p className="sub">Choose your rank and upgrade your adventure.</p>
        <div className="ranks">
          {ranks.map((rank) => (
            <div className="rank" key={rank.name} style={{ borderColor: rank.color }}>
              <div style={{ fontSize: 38 }}>{rank.icon}</div>
              <h3 style={{ color: rank.color }}>{rank.name}</h3>
              <div className="price">{rank.price}</div>
              <small style={{ color: '#8299bb' }}>One-time purchase</small>
              <ul>
                {rank.perks.map((perk) => <li key={perk}>{perk}</li>)}
              </ul>
              <a className="btn secondary" href={DISCORD_URL} style={{ display: 'block', textAlign: 'center' }}>
                BUY {rank.name}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="join" className="section">
        <div className="join">
          <h2 style={{ color: '#42bdff' }}>JOIN LEXTURASMP</h2>
          <p style={{ color: '#a6bfdf' }}>Java & Bedrock players are welcome!</p>
          <button className="btn primary" onClick={copyIP}>
            {copied ? 'COPIED!' : 'COPY SERVER IP'}
          </button>
          <p style={{ marginTop: 20, fontSize: 18 }}>{SERVER_IP}</p>
          <a className="btn secondary" href={DISCORD_URL}>JOIN OUR DISCORD</a>
        </div>
      </section>

      <section id="faq" className="section">
        <h2>FAQ</h2>
        <div className="rank">
          <h3>How do I buy a rank?</h3>
          <p style={{ color: '#a6bfdf' }}>Choose your rank and click Buy. You will be redirected to our Discord.</p>
          <h3>Can Java and Bedrock players join?</h3>
          <p style={{ color: '#a6bfdf' }}>Yes! Both Java and Bedrock players are welcome.</p>
        </div>
      </section>

      <footer className="footer">
        © 2026 LexturaSMP • All rights reserved.
      </footer>
    </div>
  )
}
