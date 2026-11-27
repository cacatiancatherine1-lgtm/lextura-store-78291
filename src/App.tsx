import { useState } from 'react'

const SERVER_IP = 'LexturaSMP.minevex.site:35407'
const DISCORD_URL = 'https://discord.gg/HAkg5a6cK'

const ranks = [
  { name: 'VIP', price: '₱50', icon: '⚡', color: '#37b7ff' },
  { name: 'ELITE', price: '₱100', icon: '💎', color: '#a070ff' },
  { name: 'LEGEND', price: '₱200', icon: '👑', color: '#ffc857' }
]

export default function App() {
  const [copied, setCopied] = useState(false)

  async function copyIP() {
    try {
      await navigator.clipboard.writeText(SERVER_IP)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      alert(SERVER_IP)
    }
  }

  return (
    <div style={{ background: '#080d1b', color: 'white', minHeight: '100vh', fontFamily: 'Arial' }}>
      <nav style={{ padding: 25, display: 'flex', justifyContent: 'space-between', background: '#101a32' }}>
        <strong style={{ color: '#37b7ff', fontSize: 23 }}>⚡ LexturaSMP</strong>
        <a href={DISCORD_URL} style={{ color: 'white' }}>Discord</a>
      </nav>

      <main style={{ textAlign: 'center', padding: '100px 20px' }}>
        <p style={{ color: '#37b7ff', letterSpacing: 4 }}>WELCOME TO</p>
        <h1 style={{ fontSize: 'clamp(40px, 8vw, 75px)' }}>
          LEXTURA<span style={{ color: '#37b7ff' }}>SMP</span>
        </h1>
        <p style={{ color: '#b7c5df', lineHeight: 1.8 }}>
          Explore. Survive. Build your empire.
          <br />Join our Minecraft SMP community!
        </p>

        <button onClick={copyIP} style={{ padding: 16, margin: 10, background: '#168cff', color: 'white', border: 0, borderRadius: 10, fontWeight: 'bold' }}>
          {copied ? 'COPIED!' : '📋 COPY SERVER IP'}
        </button>

        <a href={DISCORD_URL} target="_blank" rel="noreferrer" style={{ display: 'inline-block', padding: 16, margin: 10, background: '#5865F2', color: 'white', borderRadius: 10, textDecoration: 'none', fontWeight: 'bold' }}>
          JOIN DISCORD
        </a>

        <p style={{ marginTop: 30, color: '#37b7ff' }}>SERVER IP</p>
        <h3>{SERVER_IP}</h3>
      </main>

      <section style={{ padding: 30, textAlign: 'center' }}>
        <h2>OUR <span style={{ color: '#37b7ff' }}>RANKS</span></h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 20 }}>
          {ranks.map(rank => (
            <div key={rank.name} style={{ background: '#14213d', border: `1px solid ${rank.color}`, borderRadius: 15, padding: 25, width: 220 }}>
              <h1>{rank.icon}</h1>
              <h2 style={{ color: rank.color }}>{rank.name}</h2>
              <h2>{rank.price}</h2>
              <p>Exclusive rank rewards</p>
              <a href={DISCORD_URL} style={{ color: 'white', background: '#168cff', padding: 12, display: 'inline-block', borderRadius: 8, textDecoration: 'none' }}>GET RANK</a>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ textAlign: 'center', padding: 35, color: '#8da4c8' }}>
        <p>© 2026 LexturaSMP. All rights reserved.</p>
        <a href={DISCORD_URL} style={{ color: '#37b7ff' }}>Join our Discord</a>
      </footer>
    </div>
  )
}

