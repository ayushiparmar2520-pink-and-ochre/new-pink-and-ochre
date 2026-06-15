import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Start Here | Pink & Ochre',
  description: 'New to Pink & Ochre? Start here — meet Aayushi Parmar, discover what this blog is about, and find your first great read from fashion, beauty, wellness, food and books.',
  alternates: { canonical: 'https://pinkandochre.com/start-here' },
  openGraph: {
    title: 'Start Here | Pink & Ochre',
    description: 'New to Pink & Ochre? Meet Aayushi Parmar, discover what this blog is about, and find your first great read.',
    url: 'https://pinkandochre.com/start-here',
    siteName: 'Pink & Ochre',
    type: 'website',
  },
}

const startHereSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Start Here | Pink & Ochre',
  url: 'https://pinkandochre.com/start-here',
  description: 'New to Pink & Ochre? Start here — meet Aayushi Parmar, discover what this blog is about, and find your first great read.',
  author: { '@type': 'Person', name: 'Aayushi Parmar' },
  publisher: { '@type': 'Organization', name: 'Pink & Ochre', url: 'https://pinkandochre.com' },
  isPartOf: { '@id': 'https://pinkandochre.com/#website' },
}

const posts = [
  { href: '/blog/how-to-get-glass-skin', block: '#F5D0D9', catCls: 'sh-cat-beauty', cat: 'Beauty', date: 'June 5, 2026', title: 'How to Get Glass Skin: The Skincare Ritual That Actually Works', excerpt: 'Three ingredients, one method, and the honest timeline that creates glass skin for every skin tone.' },
  { href: '/blog/capsule-wardrobe-guide', block: '#EDD5C0', catCls: 'sh-cat-fashion', cat: 'Fashion', date: 'June 1, 2026', title: "Capsule Wardrobe for Women 2026: The Complete Beginner's Guide", excerpt: '30 essential pieces, outfit formulas, and a checklist to build a wardrobe that actually works.' },
  { href: '/blog/low-cortisol-morning-routine', block: '#D5E8DF', catCls: 'sh-cat-wellness', cat: 'Wellness', date: 'June 9, 2026', title: 'Low Cortisol Morning Routine: How to Start Your Day Without Spiking Your Stress Hormones', excerpt: 'What spikes your cortisol before 9am — and the 7 gentle habits that protect your energy all day.' },
  { href: '/blog/aesthetic-grazing-board-ideas', block: '#F5F0D5', catCls: 'sh-cat-food', cat: 'Food', date: 'May 24, 2026', title: 'Aesthetic Grazing Board Ideas for Any Occasion', excerpt: 'The complete guide to building a beautiful grazing board — ingredients, styling tips and secrets.' },
  { href: '/blog/it-ends-with-us-book-review', block: '#E8D5F5', catCls: 'sh-cat-books', cat: 'Books', date: 'May 20, 2026', title: 'It Ends With Us — A Book Review That Will Stay With You', excerpt: 'A heartfelt review of the book that changed how we talk about love, strength, and the courage to walk away.' },
  { href: '/blog/summer-2026-fashion-trends', block: '#D4E8F5', catCls: 'sh-cat-fashion', cat: 'Fashion', date: 'May 28, 2026', title: 'Summer 2026 Fashion Trends: 10 Viral Styles Taking Over Right Now', excerpt: 'From the Glamoratti aesthetic to Transformative Teal — the complete guide to what everyone is wearing this summer.' },
]

const cats = [
  { href: '/category/lifestyle', label: 'Lifestyle' },
  { href: '/category/fashion', label: 'Fashion' },
  { href: '/category/wellness', label: 'Wellness' },
  { href: '/category/books', label: 'Books' },
  { href: '/category/beauty', label: 'Beauty' },
  { href: '/category/food', label: 'Food' },
]

const css = `
.start-here { --sh-dark:#2C2018; --sh-muted:#8C7060; --sh-border:#E8DDD5; --sh-pink:#D4607A; --sh-ochre:#C2845A; --sh-sage:#7A9E8E; font-family:'Jost',sans-serif; line-height:1.8; }
.start-here .sh-label { font-size:0.72rem; font-weight:600; text-transform:uppercase; letter-spacing:0.12em; color:var(--sh-muted); display:block; margin-bottom:0.8rem; }
.start-here .sh-rule { border:none; border-top:1px solid var(--sh-border); margin:2rem auto; max-width:1120px; }
.start-here .sh-rule-wrap { padding:0 2rem; }
.start-here h1, .start-here h2, .start-here h3 { font-family:'Playfair Display',serif; color:var(--sh-dark); }

.start-here .sh-hero { max-width:680px; margin:0 auto; padding:4rem 2rem 0; }
.start-here .sh-hero h1 { font-size:clamp(2rem,5vw,3.2rem); font-weight:700; line-height:1.15; margin-bottom:1.5rem; }
.start-here .sh-hero p { font-size:1rem; color:var(--sh-muted); line-height:1.8; margin-bottom:2rem; max-width:620px; }
.start-here .sh-hero-actions { display:flex; align-items:center; gap:1.5rem; flex-wrap:wrap; }
.start-here .sh-btn-filled { background:var(--sh-dark); color:#fff; padding:0.75rem 1.5rem; border-radius:4px; font-size:0.82rem; letter-spacing:0.05em; transition:background 0.25s ease; }
.start-here .sh-btn-filled:hover { background:#44342a; }
.start-here .sh-link-arrow { color:var(--sh-muted); font-size:0.82rem; letter-spacing:0.05em; text-decoration:underline; text-underline-offset:3px; transition:color 0.2s ease; }
.start-here .sh-link-arrow:hover { color:var(--sh-dark); }
.start-here .sh-link-ochre { color:var(--sh-ochre); font-size:0.85rem; text-decoration:underline; text-underline-offset:3px; display:inline-block; margin-top:0.5rem; }
.start-here .sh-link-ochre:hover { color:var(--sh-dark); }

.start-here .sh-about { max-width:680px; margin:0 auto; padding:3rem 2rem; }
.start-here .sh-about h2 { font-size:1.8rem; margin-bottom:1.4rem; }
.start-here .sh-about p { font-size:1rem; color:var(--sh-muted); line-height:1.8; margin-bottom:1.2rem; }
.start-here .sh-about p.italic { font-family:'Playfair Display',serif; font-style:italic; }

.start-here .sh-featured { max-width:1120px; margin:0 auto; padding:3rem 2rem; }
.start-here .sh-featured h2 { font-size:1.8rem; margin-bottom:0.6rem; }
.start-here .sh-featured .sh-sub { font-size:0.9rem; color:var(--sh-muted); margin-bottom:2.5rem; }
.start-here .sh-cards { display:grid; grid-template-columns:repeat(3,1fr); gap:2.5rem 2rem; }
.start-here .sh-card .sh-block { height:180px; border-radius:4px; margin-bottom:1rem; }
.start-here .sh-card .sh-meta { font-size:0.68rem; text-transform:uppercase; letter-spacing:0.08em; margin-bottom:0.6rem; }
.start-here .sh-card .sh-meta .cat { font-weight:600; }
.start-here .sh-card .sh-meta .date { color:var(--sh-muted); }
.start-here .sh-card h3 { font-size:1.15rem; font-weight:600; line-height:1.35; margin-bottom:0.6rem; transition:color 0.2s ease; }
.start-here .sh-card a:hover h3 { color:var(--sh-ochre); }
.start-here .sh-card p { font-size:0.88rem; color:var(--sh-muted); line-height:1.7; }
.start-here .sh-cat-beauty { color:var(--sh-pink); }
.start-here .sh-cat-fashion { color:var(--sh-ochre); }
.start-here .sh-cat-wellness { color:var(--sh-sage); }
.start-here .sh-cat-food { color:var(--sh-ochre); }
.start-here .sh-cat-books { color:var(--sh-muted); }
.start-here .sh-view-all { text-align:center; margin-top:3rem; }
.start-here .sh-btn-outline { display:inline-block; border:1px solid var(--sh-dark); color:var(--sh-dark); background:transparent; padding:0.75rem 2rem; border-radius:4px; font-size:0.82rem; letter-spacing:0.05em; transition:background 0.25s ease,color 0.25s ease; }
.start-here .sh-btn-outline:hover { background:var(--sh-dark); color:#fff; }

.start-here .sh-cats { max-width:1120px; margin:0 auto; padding:3rem 2rem; }
.start-here .sh-cats h2 { font-size:1.8rem; margin-bottom:2rem; }
.start-here .sh-cats-grid { display:flex; flex-wrap:wrap; gap:1rem; }
.start-here .sh-cat-btn { border:1px solid var(--sh-border); color:var(--sh-dark); background:#fff; padding:0.65rem 1.5rem; border-radius:4px; font-size:0.85rem; transition:background 0.25s ease,color 0.25s ease,border-color 0.25s ease; }
.start-here .sh-cat-btn:hover { background:var(--sh-dark); color:#fff; border-color:var(--sh-dark); }

.start-here .sh-news { background:var(--sh-dark); padding:3.5rem 2rem; margin-top:2rem; }
.start-here .sh-news-inner { max-width:500px; margin:0 auto; text-align:center; }
.start-here .sh-news h2 { color:#FDF8F4; font-size:1.6rem; margin-bottom:1rem; }
.start-here .sh-news p { font-size:0.9rem; color:rgba(255,255,255,0.65); line-height:1.7; margin-bottom:1.8rem; }
.start-here .sh-news-form { display:flex; gap:0.75rem; }
.start-here .sh-news-form input { flex:1; background:transparent; border:1px solid rgba(255,255,255,0.3); color:#fff; padding:0.75rem 1.25rem; border-radius:4px; font-family:'Jost',sans-serif; font-size:0.9rem; }
.start-here .sh-news-form input::placeholder { color:rgba(255,255,255,0.45); }
.start-here .sh-news-form input:focus { outline:none; border-color:rgba(255,255,255,0.6); }
.start-here .sh-news-form button { background:#fff; color:var(--sh-dark); border:none; cursor:pointer; padding:0.75rem 1.25rem; border-radius:4px; font-family:'Jost',sans-serif; font-size:0.78rem; font-weight:600; letter-spacing:0.08em; transition:opacity 0.2s ease; }
.start-here .sh-news-form button:hover { opacity:0.85; }

@media (max-width:900px){ .start-here .sh-cards { grid-template-columns:repeat(2,1fr); } }
@media (max-width:640px){
  .start-here .sh-cards { grid-template-columns:1fr; }
  .start-here .sh-hero-actions { flex-direction:column; align-items:flex-start; }
  .start-here .sh-news-form { flex-direction:column; }
}
@media (prefers-reduced-motion: reduce){ .start-here * { transition:none !important; } }
`

export default function StartHerePage() {
  return (
    <div className="start-here">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(startHereSchema) }} />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* Hero */}
      <section className="sh-hero">
        <span className="sh-label">Welcome</span>
        <h1>New Here? You&apos;re in the Right Place.</h1>
        <p>Pink &amp; Ochre is an independent lifestyle blog about fashion, beauty, wellness, food, and books — written by Aayushi Parmar for anyone who believes that living well is in the details.</p>
        <div className="sh-hero-actions">
          <Link href="/blog" className="sh-btn-filled">Explore Stories →</Link>
          <Link href="/about" className="sh-link-arrow">About Aayushi →</Link>
        </div>
      </section>

      <div className="sh-rule-wrap"><hr className="sh-rule" /></div>

      {/* About */}
      <section className="sh-about">
        <span className="sh-label">About</span>
        <h2>Hi, I&apos;m Aayushi.</h2>
        <p>I started Pink &amp; Ochre because I kept looking for a blog that felt like a trusted friend — one who had actually tested the skincare, read the books, tried the recipes, and would tell you honestly what was worth your time and what was not.</p>
        <p>I am a digital marketer based in Gurgaon, India, writing for an audience largely based in the US and globally. Every post on this blog is researched, personally considered, and written without sponsored filler.</p>
        <p className="italic">Pink &amp; Ochre is for anyone who believes that living well is not about having more — it is about choosing better.</p>
        <Link href="/about" className="sh-link-ochre">Read my full story →</Link>
      </section>

      <div className="sh-rule-wrap"><hr className="sh-rule" /></div>

      {/* Featured */}
      <section className="sh-featured">
        <span className="sh-label">Start Reading</span>
        <h2>Your First Six Reads</h2>
        <p className="sh-sub">One post from each category — the best place to begin.</p>
        <div className="sh-cards">
          {posts.map((p, i) => (
            <article className="sh-card" key={i}>
              <Link href={p.href}>
                <div className="sh-block" style={{ background: p.block }}></div>
                <div className="sh-meta"><span className={`cat ${p.catCls}`}>{p.cat}</span> <span className="date">· {p.date}</span></div>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
              </Link>
            </article>
          ))}
        </div>
        <div className="sh-view-all">
          <Link href="/blog" className="sh-btn-outline">View All Stories</Link>
        </div>
      </section>

      <div className="sh-rule-wrap"><hr className="sh-rule" /></div>

      {/* Categories */}
      <section className="sh-cats">
        <span className="sh-label">Browse</span>
        <h2>Explore by Category</h2>
        <div className="sh-cats-grid">
          {cats.map((c, i) => (
            <Link href={c.href} className="sh-cat-btn" key={i}>{c.label}</Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="sh-news">
        <div className="sh-news-inner">
          <h2>Stay Connected</h2>
          <p>Receive the latest stories directly in your inbox, thoughtfully crafted and personally shared.</p>
          <form className="sh-news-form">
            <input type="email" placeholder="Your email address" aria-label="Email address" required />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
      </section>
    </div>
  )
}
