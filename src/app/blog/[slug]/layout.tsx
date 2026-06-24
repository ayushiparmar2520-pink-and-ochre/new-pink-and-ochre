import type { Metadata } from 'next'

type ArticleMeta = {
  title: string
  description: string
  ogTitle: string
  ogDescription: string
  ogUrl: string
}

// Keyed by the real route slug. NOTE: the SEO brief used the slugs
// "skincare-rituals" and "capsule-wardrobe-for-women", which 404 on this site —
// the live routes are "how-to-get-glass-skin" and "capsule-wardrobe-guide", so
// the data is keyed (and its ogUrl set) to the real slugs.
const metaData: Record<string, ArticleMeta> = {
  'greek-yogurt-banana-bread': {
    title: 'Greek Yogurt Banana Bread: The Protein-Packed Recipe That Stays Perfectly Moist | Pink & Ochre',
    description: "This greek yogurt banana bread is tender, protein-rich, and stays moist for days. One bowl, no mixer, no butter — just the best banana bread you'll ever make.",
    ogTitle: 'Greek Yogurt Banana Bread: The Protein-Packed Recipe That Stays Perfectly Moist | Pink & Ochre',
    ogDescription: "This greek yogurt banana bread is tender, protein-rich, and stays moist for days. One bowl, no mixer, no butter — just the best banana bread you'll ever make.",
    ogUrl: 'https://pinkandochre.com/blog/greek-yogurt-banana-bread',
  },
  '5-diy-toner-recipes-for-all-skin': {
    title: '5 Easy DIY Toner Recipes for Every Skin Type — Including the Viral Rice Water Toner | Pink & Ochre',
    description: 'Make your own toner at home with 5 easy DIY recipes — green tea toner for acne, viral rice water toner, rose water for sensitive skin, and more. Natural, affordable, and genuinely effective.',
    ogTitle: '5 Easy DIY Toner Recipes for Every Skin Type | Pink & Ochre',
    ogDescription: 'Green tea toner for acne, viral rice water toner, rose water for sensitive skin & more. Natural, affordable DIY toners that actually work.',
    ogUrl: 'https://pinkandochre.com/blog/5-diy-toner-recipes-for-all-skin',
  },
  'low-cortisol-morning-routine': {
    title: 'Low Cortisol Morning Routine: 7 Habits to Start Your Day Without Stress | Pink & Ochre',
    description: 'Feeling wired and tired before 9am? Discover the low cortisol morning routine that actually works — what spikes your stress hormones and the 7 gentle habits to fix it.',
    ogTitle: 'Low Cortisol Morning Routine: 7 Gentle Habits That Protect Your Energy | Pink & Ochre',
    ogDescription: 'What spikes your cortisol before 9am — and the 7 gentle morning habits that protect your energy all day. A science-backed guide for women who want to feel calmer.',
    ogUrl: 'https://pinkandochre.com/blog/low-cortisol-morning-routine',
  },
  'how-to-get-glass-skin': {
    title: 'How to Get Glass Skin: The HER Method Skincare Ritual That Works for Every Skin Tone | Pink & Ochre',
    description: 'Can Indian skin get glass skin? Yes — and here is exactly how. The HER Method: 3 ingredients, one evening ritual, and the honest 6-month timeline for glowing skin.',
    ogTitle: 'How to Get Glass Skin: The HER Method for Every Skin Tone | Pink & Ochre',
    ogDescription: '3 ingredients, the HER Method, and the honest 6-month timeline. The complete glass skin guide — and yes, it works beautifully on Indian and South Asian skin tones.',
    ogUrl: 'https://pinkandochre.com/blog/how-to-get-glass-skin',
  },
  'capsule-wardrobe-guide': {
    title: 'Capsule Wardrobe for Women 2026: How to Build a Quiet Luxury Wardrobe From Scratch | Pink & Ochre',
    description: 'Build a capsule wardrobe that truly works in 2026 — 30 essential pieces, outfit formulas, quiet luxury updates, and a complete checklist to start with.',
    ogTitle: "Capsule Wardrobe 2026: The Complete Quiet Luxury Beginner's Guide | Pink & Ochre",
    ogDescription: '30 essential pieces, outfit formulas, and the quiet luxury updates that define 2026 style. The complete guide to a wardrobe that works without starting from scratch.',
    ogUrl: 'https://pinkandochre.com/blog/capsule-wardrobe-guide',
  },
  'summer-2026-fashion-trends': {
    title: 'Summer 2026 Fashion Trends: The Glamoratti Aesthetic, Transformative Teal & 10 Viral Styles | Pink & Ochre',
    description: 'The 10 biggest summer 2026 fashion trends — the Glamoratti aesthetic, Transformative Teal, cow print, lace, and more. Your complete research-backed style guide.',
    ogTitle: 'Summer 2026 Fashion Trends: Glamoratti, Teal & 10 Viral Styles | Pink & Ochre',
    ogDescription: 'From the Glamoratti aesthetic (+225% on Pinterest) to Transformative Teal (WGSN Color of the Year) — the 10 biggest summer 2026 fashion trends, research-backed.',
    ogUrl: 'https://pinkandochre.com/blog/summer-2026-fashion-trends',
  },
  'aesthetic-grazing-board-ideas': {
    title: 'Aesthetic Grazing Board Ideas: How to Build a Board That Looks Like a Pinterest Dream | Pink & Ochre',
    description: 'Build a stunning grazing board every time — the best ingredients, styling secrets, and a step-by-step guide for parties, picnics, or a cosy night in.',
    ogTitle: 'Aesthetic Grazing Board Ideas: The Complete How-To Guide | Pink & Ochre',
    ogDescription: 'The ingredients, styling secrets, and step-by-step guide to a grazing board that looks Pinterest-perfect every single time — for any occasion, any budget.',
    ogUrl: 'https://pinkandochre.com/blog/aesthetic-grazing-board-ideas',
  },
  'it-ends-with-us-book-review': {
    title: 'It Ends With Us by Colleen Hoover: Honest Review — Is It Worth the Hype? | Pink & Ochre',
    description: 'An honest review of It Ends With Us — the writing, the ending, and whether it deserves the hype. No spoilers in the opening.',
    ogTitle: 'It Ends With Us by Colleen Hoover: Honest Review | Pink & Ochre',
    ogDescription: 'An honest, heartfelt review of It Ends With Us — the book that broke a million hearts. The writing, the ending, the characters, and why it earns every tear.',
    ogUrl: 'https://pinkandochre.com/blog/it-ends-with-us-book-review',
  },
  'books-like-devil-wears-prada': {
    title: 'Books Like The Devil Wears Prada: 10 Addictive Reads for Fashion & Ambition Fans | Pink & Ochre',
    description: 'If you loved The Devil Wears Prada, these 10 books deliver the same glamour, sharp wit, and female ambition. Ranked by how closely they match the vibe.',
    ogTitle: '10 Books Like The Devil Wears Prada for Fans of Fashion & Female Ambition | Pink & Ochre',
    ogDescription: 'The Devil Wears Prada 2 is here — and if you need your next read, these 10 books deliver the same fashion world glamour, terrifying bosses, and sharp female ambition.',
    ogUrl: 'https://pinkandochre.com/blog/books-like-devil-wears-prada',
  },
  'mindful-living-modern-times': {
    title: 'The Art of Mindful Living in Modern Times: 8 Intentional Habits for a More Present Daily Life | Pink & Ochre',
    description: 'What does mindful living really mean in 2026 — and how do you build it into a busy life? 8 small, practical habits for more presence and genuine intentional living.',
    ogTitle: 'Mindful Living in Modern Times: 8 Habits for More Presence | Pink & Ochre',
    ogDescription: 'What mindful living actually means in 2026, why it feels harder than ever, and 8 small habits that bring genuine presence back into a busy modern life.',
    ogUrl: 'https://pinkandochre.com/blog/mindful-living-modern-times',
  },
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const data = metaData[params.slug]

  if (!data) {
    return {
      title: 'Pink & Ochre | Lifestyle Blog',
      description: 'An independent lifestyle blog by Aayushi Parmar covering fashion, beauty, wellness, food, and books.',
    }
  }

  return {
    title: data.title,
    description: data.description,
    alternates: { canonical: data.ogUrl },
    openGraph: {
      title: data.ogTitle,
      description: data.ogDescription,
      type: 'article',
      url: data.ogUrl,
      siteName: 'Pink & Ochre',
    },
    twitter: {
      card: 'summary_large_image',
      title: data.ogTitle,
      description: data.ogDescription,
    },
  }
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
