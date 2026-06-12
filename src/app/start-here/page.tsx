import type { Metadata } from 'next'
import Link from 'next/link'
import NewsletterForm from './NewsletterForm'

export const metadata: Metadata = {
  title: 'Start Here | Pink & Ochre',
  description: 'New to Pink & Ochre? Start here — meet Aayushi Parmar, discover what this blog is about, and find your first great read from fashion, beauty, wellness, food and books.',
  alternates: { canonical: 'https://pinkandochre.com/start-here' },
  openGraph: {
    title: 'Start Here | Pink & Ochre — Your Guide to the Blog',
    description: 'New to Pink & Ochre? Meet Aayushi Parmar, discover what this blog is about, and find your first great read from fashion, beauty, wellness, food and books.',
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

const whoCards = [
  { emoji: '💄', text: 'You want honest beauty advice that actually works for your skin — without the overwhelm of a 12-step routine.' },
  { emoji: '👗', text: 'You are building a wardrobe with intention — fewer pieces, more outfits, real style.' },
  { emoji: '🌿', text: 'You want to feel calmer, sleep better, and start your mornings from a place of ease rather than chaos.' },
  { emoji: '🍳', text: 'You love food that is beautiful, simple, and worth making on a Tuesday evening.' },
  { emoji: '📚', text: 'You read books that stay with you — and you want someone to tell you what to pick up next.' },
  { emoji: '✨', text: 'You believe that the small, intentional details of daily life are what make it genuinely beautiful.' },
]

const posts = [
  { href: '/blog/how-to-get-glass-skin', grad: 'linear-gradient(135deg,#F5D0D9,#EDD5C0)', pillBg: '#FFF0F3', pillColor: '#D4607A', cat: 'Beauty', title: 'How to Get Glass Skin: The Skincare Ritual That Actually Works', desc: 'The three ingredients, one method, and the honest 6-month timeline that actually creates glass skin — for every skin tone.' },
  { href: '/blog/capsule-wardrobe-guide', grad: 'linear-gradient(135deg,#EDD5C0,#D4B896)', pillBg: '#FDF5EC', pillColor: '#C2845A', cat: 'Fashion', title: "Capsule Wardrobe for Women 2026: The Complete Beginner's Guide", desc: '30 essential pieces, outfit formulas, quiet luxury tips and a full checklist — everything you need to build a wardrobe that actually works.' },
  { href: '/blog/low-cortisol-morning-routine', grad: 'linear-gradient(135deg,#D5E8DF,#BDD4C8)', pillBg: '#F0F5F3', pillColor: '#7A9E8E', cat: 'Wellness', title: 'Low Cortisol Morning Routine: How to Start Your Day Without Spiking Your Stress Hormones', desc: 'What spikes your cortisol before 9am — and the 7 gentle habits that protect your energy all day.' },
  { href: '/blog/aesthetic-grazing-board-ideas', grad: 'linear-gradient(135deg,#F5F0D5,#E8E0C0)', pillBg: '#FDFAF0', pillColor: '#8C7060', cat: 'Food', title: 'Aesthetic Grazing Board Ideas for Any Occasion', desc: 'The complete guide to building a beautiful grazing board — ingredients, styling tips, and the secrets that make it look like a Pinterest dream.' },
  { href: '/blog/it-ends-with-us-book-review', grad: 'linear-gradient(135deg,#E8D5F5,#D0C0E8)', pillBg: '#F5F0FF', pillColor: '#8C7060', cat: 'Books', title: 'It Ends With Us — A Book Review That Will Stay With You', desc: 'A heartfelt review of the book that broke a million hearts and changed how we talk about love, strength, and the courage to walk away.' },
  { href: '/blog/summer-2026-fashion-trends', grad: 'linear-gradient(135deg,#D4607A,#C2845A)', pillBg: '#FFF0F3', pillColor: '#D4607A', cat: 'Fashion', title: 'Summer 2026 Fashion Trends: 10 Viral Styles Taking Over Right Now', desc: 'From the Glamoratti aesthetic to Transformative Teal — the complete research-backed guide to what everyone will be wearing this summer.' },
]

const cats = [
  { href: '/category/fashion', cls: 'sh-cat-fashion', label: 'Fashion' },
  { href: '/category/beauty', cls: 'sh-cat-beauty', label: 'Beauty' },
  { href: '/category/wellness', cls: 'sh-cat-wellness', label: 'Wellness' },
  { href: '/category/food', cls: 'sh-cat-food', label: 'Food' },
  { href: '/category/books', cls: 'sh-cat-books', label: 'Books' },
  { href: '/category/lifestyle', cls: 'sh-cat-lifestyle', label: 'Lifestyle' },
]

const css = `
.start-here { --sh-pink:#D4607A; --sh-ochre:#C2845A; --sh-dark:#2C2018; --sh-muted:#8C7060; --sh-border:#E8DDD5; --sh-sage:#7A9E8E; font-family:'Jost',sans-serif; }
.start-here .sh-label { display:block; text-align:center; font-size:0.72rem; text-transform:uppercase; letter-spacing:0.12em; font-weight:600; color:var(--sh-ochre); margin-bottom:0.8rem; }
.start-here .sh-h2 { text-align:center; font-family:'Playfair Display',serif; font-size:2rem; color:var(--sh-dark); margin-bottom:1rem; line-height:1.2; }

.start-here .sh-hero { background:linear-gradient(135deg,#FDF0E8 0%,#FDF8F4 50%,#F5EDE4 100%); min-height:420px; display:flex; align-items:center; justify-content:center; }
.start-here .sh-hero-inner { max-width:700px; padding:5rem 2rem; text-align:center; }
.start-here .sh-eyebrow { display:flex; align-items:center; justify-content:center; gap:1rem; margin-bottom:1.4rem; }
.start-here .sh-eyebrow .txt { font-size:0.78rem; font-weight:600; letter-spacing:0.15em; text-transform:uppercase; color:var(--sh-ochre); }
.start-here .sh-eyebrow .ln { height:1px; width:42px; background:var(--sh-ochre); opacity:0.5; }
.start-here .sh-hero h1 { font-family:'Playfair Display',serif; font-size:clamp(2.2rem,5vw,3.5rem); font-weight:700; color:var(--sh-dark); line-height:1.15; margin-bottom:1.4rem; }
.start-here .sh-sub { font-size:1.1rem; color:var(--sh-muted); line-height:1.75; max-width:560px; margin:0 auto 2rem; }
.start-here .sh-ctas { display:flex; gap:1rem; justify-content:center; flex-wrap:wrap; }
.start-here .sh-btn { display:inline-block; border-radius:50px; padding:0.85rem 1.75rem; font-size:0.9rem; font-weight:500; transition:transform 0.2s ease,background 0.25s ease,color 0.25s ease; }
.start-here .sh-btn:hover { transform:translateY(-2px); }
.start-here .sh-btn-filled { background:var(--sh-dark); color:#fff; }
.start-here .sh-btn-filled:hover { background:#44342a; }
.start-here .sh-btn-outline { border:1.5px solid var(--sh-dark); color:var(--sh-dark); }
.start-here .sh-btn-outline:hover { background:var(--sh-dark); color:#fff; }
.start-here .sh-btn-pink { background:var(--sh-pink); color:#fff; }
.start-here .sh-btn-pink:hover { background:#bf4f69; }

.start-here .sh-who { background:#F5EDE4; padding:4rem 2rem; }
.start-here .sh-who-inner { max-width:900px; margin:0 auto; }
.start-here .sh-who-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:1.2rem; margin-top:2rem; }
.start-here .sh-who-card { background:#fff; border:1px solid var(--sh-border); border-radius:12px; padding:1.5rem; text-align:center; }
.start-here .sh-who-card .emoji { font-size:1.8rem; display:block; margin-bottom:0.7rem; }
.start-here .sh-who-card p { font-size:0.98rem; color:#3d2e23; }

.start-here .sh-meet { background:#FDF8F4; padding:5rem 2rem; }
.start-here .sh-meet-inner { max-width:800px; margin:0 auto; text-align:center; }
.start-here .sh-meet h2 { font-family:'Playfair Display',serif; font-size:2.5rem; color:var(--sh-dark); }
.start-here .sh-avatar { width:120px; height:120px; border-radius:50%; background:linear-gradient(135deg,#D4607A 0%,#C2845A 100%); display:flex; align-items:center; justify-content:center; color:#fff; font-family:'Playfair Display',serif; font-size:2rem; font-weight:600; margin:2rem auto; }
.start-here .sh-meet p { color:#3d2e23; font-size:1.05rem; max-width:620px; margin:0 auto 1.2rem; line-height:1.75; }
.start-here .sh-meet p.italic { font-family:'Playfair Display',serif; font-style:italic; color:var(--sh-muted); font-size:1.15rem; }

.start-here .sh-reads { background:#FDF8F4; padding:5rem 2rem; }
.start-here .sh-reads-inner { max-width:1100px; margin:0 auto; }
.start-here .sh-subtext { text-align:center; color:var(--sh-muted); margin-bottom:2.5rem; }
.start-here .sh-reads-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1.6rem; }
.start-here .sh-post-card { background:#fff; border:1px solid var(--sh-border); border-radius:16px; overflow:hidden; display:flex; flex-direction:column; transition:transform 0.25s ease,box-shadow 0.25s ease; }
.start-here .sh-post-card:hover { transform:translateY(-5px); box-shadow:0 16px 34px rgba(44,32,24,0.13); }
.start-here .sh-post-top { height:80px; }
.start-here .sh-post-body { padding:1.25rem; display:flex; flex-direction:column; flex:1; }
.start-here .sh-post-pill { display:inline-block; align-self:flex-start; font-size:0.66rem; text-transform:uppercase; letter-spacing:0.08em; font-weight:600; padding:0.28rem 0.7rem; border-radius:50px; margin-bottom:0.7rem; }
.start-here .sh-ptitle { font-family:'Playfair Display',serif; font-size:1rem; font-weight:600; color:var(--sh-dark); line-height:1.35; margin-bottom:0.5rem; }
.start-here .sh-pdesc { font-size:0.85rem; color:var(--sh-muted); line-height:1.6; margin-bottom:1rem; flex:1; }
.start-here .sh-pread { font-size:0.8rem; font-weight:600; color:var(--sh-ochre); }
.start-here .sh-post-card:hover .sh-pread { text-decoration:underline; }

.start-here .sh-news { background:#2C2018; padding:5rem 2rem; }
.start-here .sh-news-inner { max-width:580px; margin:0 auto; text-align:center; }
.start-here .sh-eyb { font-size:0.72rem; text-transform:uppercase; letter-spacing:0.15em; color:#E6B884; font-weight:600; display:block; margin-bottom:0.9rem; }
.start-here .sh-news h2 { font-family:'Playfair Display',serif; font-size:clamp(1.8rem,4vw,2.5rem); color:#FDF8F4; line-height:1.2; margin-bottom:1rem; }
.start-here .sh-news > div > p { font-size:1rem; color:rgba(255,255,255,0.70); line-height:1.75; margin-bottom:1.8rem; }
.start-here .sh-news-form { display:flex; gap:0.7rem; flex-wrap:wrap; }
.start-here .sh-news-form input { flex:1; min-width:200px; border-radius:50px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.20); color:#fff; padding:0.85rem 1.5rem; font-family:'Jost',sans-serif; font-size:0.92rem; }
.start-here .sh-news-form input::placeholder { color:rgba(255,255,255,0.45); }
.start-here .sh-news-form input:focus { outline:none; border-color:var(--sh-pink); }
.start-here .sh-news-form button { border-radius:50px; background:var(--sh-pink); color:#fff; border:none; cursor:pointer; padding:0.85rem 1.5rem; font-family:'Jost',sans-serif; font-size:0.92rem; font-weight:500; transition:background 0.25s ease; white-space:nowrap; }
.start-here .sh-news-form button:hover { background:#bf4f69; }
.start-here .sh-news-note { font-size:0.75rem; color:rgba(255,255,255,0.45); margin:1rem 0 0; }
.start-here .sh-news-success { color:#FDF8F4; font-family:'Playfair Display',serif; font-size:1.3rem; font-style:italic; padding:0.5rem 0; }

.start-here .sh-cats { background:#F5EDE4; padding:5rem 2rem; }
.start-here .sh-cats-inner { max-width:1000px; margin:0 auto; }
.start-here .sh-cats-grid { display:grid; grid-template-columns:repeat(6,1fr); gap:1rem; margin-top:2rem; }
.start-here .sh-cat-pill { text-align:center; padding:1.1rem 0.8rem; border-radius:50px; font-size:0.92rem; font-weight:600; transition:background 0.25s ease,color 0.25s ease,transform 0.2s ease; }
.start-here .sh-cat-pill:hover { transform:translateY(-3px); }
.start-here .sh-cat-fashion { background:#FDF5EC; color:var(--sh-ochre); border:1.5px solid var(--sh-ochre); }
.start-here .sh-cat-fashion:hover { background:var(--sh-ochre); color:#fff; }
.start-here .sh-cat-beauty { background:#FFF0F3; color:var(--sh-pink); border:1.5px solid var(--sh-pink); }
.start-here .sh-cat-beauty:hover { background:var(--sh-pink); color:#fff; }
.start-here .sh-cat-wellness { background:#F0F5F3; color:var(--sh-sage); border:1.5px solid var(--sh-sage); }
.start-here .sh-cat-wellness:hover { background:var(--sh-sage); color:#fff; }
.start-here .sh-cat-food { background:#FDFAF0; color:var(--sh-muted); border:1.5px solid var(--sh-muted); }
.start-here .sh-cat-food:hover { background:var(--sh-muted); color:#fff; }
.start-here .sh-cat-books { background:#F5F0FF; color:var(--sh-muted); border:1.5px solid var(--sh-muted); }
.start-here .sh-cat-books:hover { background:var(--sh-muted); color:#fff; }
.start-here .sh-cat-lifestyle { background:#FDF8F4; color:var(--sh-dark); border:1.5px solid var(--sh-border); }
.start-here .sh-cat-lifestyle:hover { background:var(--sh-dark); color:#fff; }

.start-here .sh-closing { background:#FDF8F4; padding:4rem 2rem; }
.start-here .sh-closing-inner { max-width:600px; margin:0 auto; text-align:center; }
.start-here .sh-closing p.italic { font-family:'Playfair Display',serif; font-style:italic; font-size:1.15rem; color:var(--sh-muted); line-height:1.7; }
.start-here .sh-closing .sig { text-align:right; font-size:0.9rem; color:var(--sh-muted); margin-top:1rem; }
.start-here .sh-divider { display:flex; align-items:center; justify-content:center; gap:1.2rem; margin:2.5rem 0 0; }
.start-here .sh-divider::before, .start-here .sh-divider::after { content:""; height:1px; background:var(--sh-border); flex:1; }
.start-here .sh-divider span { color:var(--sh-ochre); font-size:1rem; }

@media (max-width:980px){
  .start-here .sh-reads-grid { grid-template-columns:repeat(2,1fr); }
  .start-here .sh-cats-grid { grid-template-columns:repeat(3,1fr); }
}
@media (max-width:760px){
  .start-here .sh-who-grid { grid-template-columns:1fr; }
  .start-here .sh-reads-grid { grid-template-columns:1fr; }
  .start-here .sh-cats-grid { grid-template-columns:repeat(2,1fr); }
  .start-here .sh-hero { min-height:320px; }
  .start-here .sh-hero-inner { padding:3.5rem 1.5rem; }
  .start-here .sh-ctas { flex-direction:column; }
  .start-here .sh-ctas .sh-btn { width:100%; }
}
@media (prefers-reduced-motion: reduce){
  .start-here * { transition:none !important; }
}
`

export default function StartHerePage() {
  return (
    <div className="start-here">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(startHereSchema) }}
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* Hero */}
      <section className="sh-hero">
        <div className="sh-hero-inner">
          <div className="sh-eyebrow">
            <span className="ln"></span>
            <span className="txt">Welcome to Pink &amp; Ochre</span>
            <span className="ln"></span>
          </div>
          <h1>New Here? You&apos;re in the Right Place.</h1>
          <p className="sh-sub">Pink &amp; Ochre is an independent lifestyle blog about fashion, beauty, wellness, food, and books — written by Aayushi Parmar for anyone who believes that living well is in the details.</p>
          <div className="sh-ctas">
            <Link href="/blog" className="sh-btn sh-btn-filled">Read the Blog →</Link>
            <Link href="/about" className="sh-btn sh-btn-outline">About Aayushi →</Link>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="sh-who">
        <div className="sh-who-inner">
          <span className="sh-label">Who Is This For?</span>
          <h2 className="sh-h2">This Blog Is For You If...</h2>
          <div className="sh-who-grid">
            {whoCards.map((c, i) => (
              <div className="sh-who-card" key={i}>
                <span className="emoji">{c.emoji}</span>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Aayushi */}
      <section className="sh-meet">
        <div className="sh-meet-inner">
          <span className="sh-label">The Person Behind the Blog</span>
          <h2>Hi, I&apos;m Aayushi.</h2>
          <div className="sh-avatar">AP</div>
          <p>I started Pink &amp; Ochre because I kept looking for a blog that felt like a trusted friend — one who had actually tested the skincare, read the books, tried the recipes, and would tell you honestly what was worth your time and what was not.</p>
          <p>I am a digital marketer based in Gurgaon, India, writing for an audience that is largely based in the US and globally. Every post on this blog is researched, personally considered, and written without sponsored filler or affiliate padding.</p>
          <p className="italic">Pink &amp; Ochre is for anyone who believes that living well is not about having more — it is about choosing better.</p>
          <Link href="/about" className="sh-btn sh-btn-pink">Read My Full Story →</Link>
        </div>
      </section>

      {/* Start Reading */}
      <section className="sh-reads">
        <div className="sh-reads-inner">
          <span className="sh-label">Where to Begin</span>
          <h2 className="sh-h2">Your First 6 Reads</h2>
          <p className="sh-subtext">One post from each category — hand-picked as the best place to start.</p>
          <div className="sh-reads-grid">
            {posts.map((p, i) => (
              <Link className="sh-post-card" href={p.href} key={i}>
                <div className="sh-post-top" style={{ background: p.grad }}></div>
                <div className="sh-post-body">
                  <span className="sh-post-pill" style={{ background: p.pillBg, color: p.pillColor }}>{p.cat}</span>
                  <span className="sh-ptitle">{p.title}</span>
                  <span className="sh-pdesc">{p.desc}</span>
                  <span className="sh-pread">Read Now →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="sh-news">
        <div className="sh-news-inner">
          <span className="sh-eyb">Join the Community</span>
          <h2>Good Things, Straight to Your Inbox</h2>
          <p>Weekly beauty tips, outfit ideas, wellness habits, and book recommendations — plus content that never makes it to the blog. No spam, ever.</p>
          <NewsletterForm />
        </div>
      </section>

      {/* Explore by Category */}
      <section className="sh-cats">
        <div className="sh-cats-inner">
          <span className="sh-label">Browse Everything</span>
          <h2 className="sh-h2">Explore by Category</h2>
          <div className="sh-cats-grid">
            {cats.map((c, i) => (
              <Link href={c.href} className={`sh-cat-pill ${c.cls}`} key={i}>{c.label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="sh-closing">
        <div className="sh-closing-inner">
          <p className="italic">You found this blog for a reason. Whether it was a skincare question, a book recommendation, or a search for a calmer morning — I hope you find something here that makes your everyday life feel a little more intentional.</p>
          <p className="sig">— Aayushi Parmar, Pink &amp; Ochre</p>
          <div className="sh-divider"><span>✦</span></div>
        </div>
      </section>
    </div>
  )
}
