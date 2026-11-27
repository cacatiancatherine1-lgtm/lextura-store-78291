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

const methods = ['GCash', 'Maya', 'Bank Transfer']

export default function App() {
  const [copied, setCopied] = useState(false)
  const [page, setPage] = useState('store')
  const [selectedRank, setSelectedRank] = useState(null)
  const [payment, setPayment] = useState('GCash')
  const [username, setUsername] = useState('')
  const [coupon, setCoupon] = useState('')
  const [accepted, setAccepted] = useState(false)
  const [invoice, setInvoice] = useState(null)

  const money = value => '₱' + value.toFixed(2)

  async function copyIP() {
    try {
      await navigator.clipboard.writeText(SERVER_IP)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      alert('Server IP: ' + SERVER_IP)
    }
  }

  function buy(rank) {
    setSelectedRank(rank)
    setPage('checkout')
    setAccepted(false)
    setCoupon('')
    setUsername('')
  }

  function createInvoice() {
    if (!username.trim()) {
      alert('Please enter your Minecraft username.')
      return
    }
    if (!accepted) {
      alert('Please accept the Terms of Service.')
      return
    }

    setInvoice({
      id: 'LEX-' + Date.now().toString().slice(-8),
      rank: selectedRank.name,
      price: selectedRank.price,
      payment,
      username,
      date: new Date().toLocaleString()
    })
    setPage('payment')
  }

  function backToStore() {
    setPage('store')
    setSelectedRank(null)
    setInvoice(null)
  }

  return (
    <div className="app">
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: #050b16; }
        button, input { font: inherit; }

        .app {
          min-height: 100vh;
          background: #050b16;
          color: #fff;
          font-family: Arial, sans-serif;
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 6%;
          background: #091426;
          border-bottom: 2px solid #1459a5;
          position: sticky;
          top: 0;
          z-index: 5;
        }

        .brand {
          font-size: 22px;
          font-weight: 900;
          color: #38aaff;
          letter-spacing: 2px;
          text-shadow: 0 0 15px #147dff;
        }

        .links { display: flex; gap: 22px; flex-wrap: wrap; }
        .links a {
          color: #b8d9ff;
          text-decoration: none;
        }
        .links a:hover { color: #38aaff; }

        .hero {
          text-align: center;
          padding: 85px 6%;
          background: radial-gradient(ellipse at center, #103c75, #09182e 55%, #050b16 90%);
          border-bottom: 3px solid #1261b8;
        }

        .hero h1 {
          font-size: clamp(42px, 8vw, 78px);
          letter-spacing: 4px;
          margin: 20px 0;
          text-shadow: 4px 4px #071b35;
        }

        .hero p {
          color: #b9d9ff;
          line-height: 1.8;
          max-width: 650px;
          margin: 15px auto 30px;
        }

        .btn {
          display: inline-block;
          padding: 15px 24px;
          font-weight: bold;
          cursor: pointer;
          text-decoration: none;
          border: 2px solid #287ed4;
          border-radius: 5px;
          transition: .2s;
        }

        .btn:hover { transform: translateY(-2px); filter: brightness(1.2); }
        .primary { background: #1266c3; color: white; box-shadow: 0 4px #073c79; }
        .secondary { background: #101e32; color: #c9e5ff; }
        .full { width: 100%; }

        .section {
          padding: 65px 6%;
          max-width: 1250px;
          margin: auto;
        }

        .section h2 { text-align: center; font-size: 32px; }

        .sub {
          text-align: center;
          color: #9dbde0;
          margin-bottom: 38px;
        }

        .ranks {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 22px;
        }

        .rank {
          background: linear-gradient(145deg, #112541, #091426);
          border: 2px solid #174b82;
          border-radius: 5px;
          padding: 30px;
          box-shadow: 5px 5px 0 #061020;
          transition: .2s;
        }

        .rank:hover {
          border-color: #38aaff;
          transform: translateY(-4px);
          box-shadow: 0 0 20px #1261b855;
        }

        .category {
          color: #65baff;
          font-size: 13px;
          font-weight: bold;
          letter-spacing: 3px;
        }

        .rank h3 { font-size: 34px; margin: 20px 0; }

        .price {
          font-size: 30px;
          font-weight: bold;
          margin: 18px 0;
          color: #38aaff;
        }

        .rank ul {
          list-style: none;
          padding: 0;
          margin: 25px 0;
        }

        .rank li {
          color: #c2d5eb;
          margin: 16px 0;
          font-size: 15px;
        }

        .rank li::before {
          content: '+';
          color: #38aaff;
          font-weight: bold;
          margin-right: 13px;
        }

        .join {
          text-align: center;
          background: #0d2039;
          border: 2px solid #1b69b3;
          border-radius: 5px;
          padding: 35px;
          box-shadow: 5px 5px 0 #061020;
        }

        .footer {
          text-align: center;
          padding: 30px;
          border-top: 2px solid #174b82;
          color: #8daacb;
        }

        /* CHECKOUT */

        .checkout {
          max-width: 850px;
          margin: 45px auto;
          padding: 20px;
        }

        .panel {
          background: #0c1c31;
          border: 2px solid #1d65a9;
          padding: 28px;
          margin-bottom: 20px;
          box-shadow: 5px 5px 0 #030a14;
        }

        .panel h2 {
          color: #58b9ff;
          margin-top: 0;
        }

        .panel h3 { color: #d9edff; }

        .field {
          width: 100%;
          padding: 14px;
          margin: 10px 0 18px;
          background: #071426;
          border: 2px solid #225b91;
          color: white;
          outline: none;
          border-radius: 4px;
        }

        .field:focus { border-color: #38aaff; }

        .summary {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          padding: 13px 0;
          border-bottom: 1px solid #23415f;
          color: #c7dff7;
        }

        .total {
          font-size: 23px;
          font-weight: bold;
          color: #38aaff;
          border: 0;
        }

        .methods {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
          gap: 12px;
        }

        .method {
          padding: 20px 10px;
          cursor: pointer;
          background: #0a1729;
          border: 2px solid #234b73;
          color: white;
          border-radius: 4px;
          font-weight: bold;
        }

        .method.active {
          border-color: #38aaff;
          background: #12365b;
          box-shadow: 0 0 12px #1687ff66;
        }

        .terms {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          color: #b8d4ef;
          margin: 20px 0;
          line-height: 1.6;
        }

        .terms input { margin-top: 5px; accent-color: #1687ff; }

        .notice {
          background: #112c49;
          border-left: 4px solid #38aaff;
          padding: 15px;
          color: #b9d9ff;
          line-height: 1.6;
          margin: 15px 0;
        }

        .status {
          display: inline-block;
          padding: 8px 15px;
          background: #493a13;
          border: 1px solid #b78a27;
          color: #ffda72;
          font-weight: bold;
          border-radius: 4px;
        }

        .back {
          background: transparent;
          color: #75c6ff;
          border: 0;
          cursor: pointer;
          margin-bottom: 20px;
          font-weight: bold;
        }

        @media(max-width:600px) {
          .nav { flex-direction: column; gap: 15px; }
          .links { gap: 13px; font-size: 13px; justify-content: center; }
          .hero { padding: 60px 5%; }
          .section { padding: 45px 5%; }
          .rank { padding: 25px; }
          .checkout { margin: 20px auto; padding: 12px; }
          .panel { padding: 20px; }
        }

        @media print {
          .nav, .back, .no-print, .footer { display: none !important; }
          .app { background: white; color: black; }
          .panel { background: white; color: black; box-shadow: none; }
          .panel h2, .panel h3, .summary, .notice { color: black; }
        }
      `}</style>

      <header className="nav">
        <div className="brand">LEXTURASMP</div>
        <nav className="links">
          <a href={page === 'store' ? '#ranks' : '#'} onClick={page !== 'store' ? backToStore : undefined}>Ranks</a>
          <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">Discord</a>
          <a href={page === 'store' ? '#join' : '#'} onClick={page !== 'store' ? backToStore : undefined}>Join</a>
        </nav>
      </header>

      {page === 'store' && (
        <>
          <section className="hero">
            <p>THE ULTIMATE SMP EXPERIENCE</p>
            <h1>LEXTURA<span style={{color:'#38aaff'}}>SMP</span></h1>
            <p>
              Welcome to LexturaSMP. Unlock exclusive ranks
              and experience your Minecraft adventure.
            </p>
            <a className="btn primary" href="#ranks">VIEW RANKS</a>{' '}
            <a className="btn secondary" href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
              JOIN DISCORD
            </a>
            <div style={{marginTop:30}}>
              <button className="btn secondary" onClick={copyIP}>
                {copied ? 'IP COPIED!' : 'COPY SERVER IP'}
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
                  <div className="price">{money(rank.price)}</div>
                  <ul>
                    {rank.perks.map(perk => <li key={perk}>{perk}</li>)}
                  </ul>
                  <button className="btn primary full" onClick={() => buy(rank)}>
                    BUY NOW
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section id="join" className="section">
            <div className="join">
              <h2>JOIN LEXTURASMP</h2>
              <p>Java and Bedrock players are welcome!</p>
              <button className="btn primary" onClick={copyIP}>
                {copied ? 'COPIED' : 'COPY SERVER IP'}
              </button>
              <p>{SERVER_IP}</p>
              <a className="btn secondary" href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
                JOIN DISCORD
              </a>
            </div>
          </section>

          <section id="faq" className="section">
            <h2>FAQ</h2>
            <div className="rank">
              <h3>How do I get a rank?</h3>
              <p>Choose a rank and follow the checkout process.</p>
              <h3>Can Java and Bedrock players join?</h3>
              <p>Yes! Both Java and Bedrock players are welcome.</p>
            </div>
          </section>
        </>
      )}

      {page === 'checkout' && selectedRank && (
        <main className="checkout">
          <button className="back" onClick={backToStore}>← BACK TO STORE</button>

          <div className="panel">
            <h2>CHECKOUT</h2>
            <p style={{color:'#9dbde0'}}>Complete your order details below.</p>

            <h3>Minecraft Username</h3>
            <input
              className="field"
              placeholder="Enter your Minecraft username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />

            <h3>Order Summary</h3>
            <div className="summary">
              <span>{selectedRank.name} Rank</span>
              <strong>{money(selectedRank.price)}</strong>
            </div>
            <div className="summary">
              <span>Coupon Code</span>
              <span>Not applied</span>
            </div>
            <input
              className="field"
              placeholder="Enter coupon code (if available)"
              value={coupon}
              onChange={e => setCoupon(e.target.value)}
            />
            <div className="summary total">
              <span>Total</span>
              <span>{money(selectedRank.price)}</span>
            </div>
            <div className="notice">
              Coupon discounts are not active yet. Your total remains unchanged.
            </div>
          </div>

          <div className="panel">
            <h2>PAYMENT METHOD</h2>
            <p style={{color:'#9dbde0'}}>Select your preferred payment method.</p>
            <div className="methods">
              {methods.map(method => (
                <button
                  key={method}
                  className={'method ' + (payment === method ? 'active' : '')}
                  onClick={() => setPayment(method)}
                >
                  {method}
                  {payment === method ? ' ✓' : ''}
                </button>
              ))}
            </div>
          </div>

          <div className="panel">
            <h2>TERMS OF SERVICE</h2>
            <p style={{color:'#b8d4ef',lineHeight:1.7}}>
              Please verify your Minecraft username and rank before submitting.
              Rank purchases must be confirmed by LexturaSMP staff.
              Do not submit payment to an unverified account.
            </p>
            <label className="terms">
              <input
                type="checkbox"
                checked={accepted}
                onChange={e => setAccepted(e.target.checked)}
              />
              <span>I agree to the LexturaSMP Terms of Service.</span>
            </label>
            <button className="btn primary full" onClick={createInvoice}>
              CONTINUE TO PAYMENT →
            </button>
          </div>
        </main>
      )}

      {page === 'payment' && invoice && (
        <main className="checkout">
          <button className="back" onClick={backToStore}>← BACK TO STORE</button>

          <div className="panel">
            <h2>ORDER CREATED!</h2>
            <p>Your order has been prepared successfully.</p>
            <div className="status">PENDING PAYMENT</div>

            <h3>Invoice Details</h3>
            <div className="summary"><span>Invoice ID</span><strong>{invoice.id}</strong></div>
            <div className="summary"><span>Minecraft Username</span><strong>{invoice.username}</strong></div>
            <div className="summary"><span>Rank</span><strong>{invoice.rank}</strong></div>
            <div className="summary"><span>Payment Method</span><strong>{invoice.payment}</strong></div>
            <div className="summary"><span>Date</span><strong>{invoice.date}</strong></div>
            <div className="summary total"><span>Total</span><span>{money(invoice.price)}</span></div>
          </div>

          <div className="panel">
            <h2>PAYMENT INSTRUCTIONS</h2>
            <h3>{invoice.payment}</h3>
            <div className="notice">
              Payment account details and QR codes must be configured by the
              LexturaSMP owner before customers can send payments.
              Contact staff through the official Discord for verified instructions.
            </div>
            <a className="btn primary full" href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
              CONTACT STAFF ON DISCORD
            </a>
            <p style={{color:'#9dbde0',fontSize:13,marginTop:18}}>
              Your order is not confirmed as paid. Staff must verify the payment
              before granting the rank.
            </p>
          </div>

          <div className="panel no-print">
            <h2>YOUR INVOICE</h2>
            <button className="btn primary full" onClick={() => window.print()}>
              DOWNLOAD / PRINT INVOICE
            </button>
            <button className="btn secondary full" style={{marginTop:12}} onClick={backToStore}>
              BACK TO STORE
            </button>
          </div>
        </main>
      )}

      <footer className="footer">
        © 2026 LexturaSMP. All rights reserved.
      </footer>
    </div>
  )
}
