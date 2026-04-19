import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RuleUpdateBanner from '@/components/RuleUpdateBanner';
import FAQAccordion from '@/components/FAQAccordion';
import { COLORS, difficultyStyle } from '@/lib/tokens';
import routesData from '@/data/routes.json';
import toursData from '@/data/tours.json';

export const metadata = {
  title: 'Mt Fuji Guide — Climb Mt Fuji with confidence',
  description:
    'The clearest, most actionable Mt Fuji climbing guide for international travelers. Current 2026 rules, trail comparisons, what to pack, and where to book.',
  openGraph: {
    title: 'Mt Fuji Guide',
    description: 'Climb Mt Fuji with confidence. Written for international travelers.',
    type: 'website',
  },
};

const STEPS = [
  { n: 2, title: 'When to climb', desc: 'Best weeks, weather, sunrise timing, crowds to avoid.', href: '/when' },
  { n: 3, title: 'What to pack', desc: 'Full checklist. Rent vs. buy. Where to pick up gear in Tokyo.', href: '/gear' },
  { n: 4, title: 'Getting there', desc: 'Tokyo → 5th Station. Bus, train, and nearby stays.', href: '/access' },
];

const STATS = [
  { n: '204,000+', l: 'Climbers per season' },
  { n: '¥4,000', l: 'New entry fee (2025+)' },
  { n: '3,776m', l: 'Summit altitude' },
  { n: '4 trails', l: 'From easy to expert' },
];

const FAQS = [
  {
    q: 'Do I need a permit or reservation?',
    a: 'Yes. As of 2025, all four trails require advance online registration and a ¥4,000 entry fee. You cannot show up and climb on the spot.',
  },
  {
    q: 'Can I climb in one day without sleeping?',
    a: '"Bullet climbing" — going up and back without sleeping — is no longer permitted between 2pm and 3am. A hut reservation is required if you pass through during those hours.',
  },
  {
    q: 'Is altitude sickness a real risk?',
    a: 'Yes, genuinely. Even fit climbers experience headaches, nausea, and dizziness above 3,000m. Most 2-day itineraries include an overnight hut specifically to help you acclimate.',
  },
  {
    q: 'What is the climbing season?',
    a: 'Official season is July 1 to early September. Trails are closed outside this window — huts are shuttered, and the weather is genuinely dangerous without mountaineering experience.',
  },
];

export default function HomePage() {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', color: COLORS.slate, background: '#fff', minHeight: '100vh' }}>
      <RuleUpdateBanner />
      <Header activePath="/" />

      <section style={{ padding: '72px 40px 64px', background: `linear-gradient(180deg, ${COLORS.blueLight} 0%, ${COLORS.mist} 100%)`, position: 'relative', overflow: 'hidden' }}>
        <svg viewBox="0 0 800 200" preserveAspectRatio="xMidYMax slice" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, width: '100%', height: 140, opacity: 0.12 }} aria-hidden="true">
          <path d="M0 200 L180 100 L280 140 L400 40 L450 90 L500 60 L560 120 L680 90 L800 150 L800 200 Z" fill={COLORS.indigo} />
        </svg>
        <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(26, 58, 92, 0.08)', color: COLORS.indigo, fontSize: 13, fontWeight: 500, padding: '5px 12px', borderRadius: 8, marginBottom: 20 }}>
            The 2026 climbing season · Jul 1 – Sep 10
          </div>
          <h1 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 48, fontWeight: 500, color: COLORS.indigo, margin: '0 0 16px', lineHeight: 1.15 }}>
            Climb Mt Fuji with confidence.
          </h1>
          <p style={{ fontSize: 17, color: COLORS.slate, margin: '0 0 28px', lineHeight: 1.6, maxWidth: 580 }}>
            Everything a first-time climber needs — current rules, trail comparisons, what to pack, and where to book. Written for international travelers.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/rules" style={{ background: COLORS.amber, color: COLORS.amberText, padding: '12px 22px', borderRadius: 8, fontSize: 14, fontWeight: 500, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              Start here — 5 min read <ArrowRight size={14} />
            </Link>
            <Link href="/routes" style={{ color: COLORS.indigo, border: `1px solid ${COLORS.indigo}`, padding: '12px 22px', borderRadius: 8, fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>
              Compare the 4 trails
            </Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '24px 40px', borderBottom: `1px solid ${COLORS.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-around', gap: 20, flexWrap: 'wrap' }}>
        {STATS.map((s, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 24, fontWeight: 500, color: COLORS.indigo, margin: 0 }}>{s.n}</p>
            <p style={{ fontSize: 13, color: COLORS.slateMuted, margin: '4px 0 0' }}>{s.l}</p>
          </div>
        ))}
      </section>

      <section style={{ padding: '48px 40px' }}>
        <div style={{ maxWidth: 1040, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 20 }}>
            <div>
              <p style={{ fontSize: 13, color: COLORS.slateMuted, margin: '0 0 4px', fontWeight: 500 }}>Step 1</p>
              <h2 style={{ fontSize: 26, fontWeight: 500, color: COLORS.indigo, margin: 0 }}>Pick your trail</h2>
            </div>
            <Link href="/routes" style={{ fontSize: 14, color: COLORS.sky, textDecoration: 'none' }}>
              See full comparison →
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
            {routesData.routes.map((r) => {
              const diff = difficultyStyle(r.difficulty);
              return (
                <Link
                  key={r.slug}
                  href={`/routes#${r.slug}`}
                  style={{
                    background: '#fff',
                    border: r.popular ? `2px solid ${COLORS.blueText}` : `1px solid ${COLORS.border}`,
                    borderRadius: 12,
                    padding: 16,
                    position: 'relative',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  {r.popular && (
                    <div style={{ position: 'absolute', top: -10, left: 14, background: COLORS.blueLight, color: COLORS.blueText, fontSize: 11, fontWeight: 500, padding: '3px 10px', borderRadius: 8 }}>
                      Most popular
                    </div>
                  )}
                  <p style={{ fontSize: 16, fontWeight: 500, margin: '6px 0 6px', color: COLORS.indigo }}>{r.name.replace(' Trail', '')}</p>
                  <span style={{ background: diff.bg, color: diff.fg, fontSize: 11, fontWeight: 500, padding: '3px 8px', borderRadius: 8 }}>{r.difficulty}</span>
                  <p style={{ fontSize: 13, color: COLORS.slateMuted, margin: '12px 0 0', lineHeight: 1.5 }}>
                    {r.timeUp} up · {r.scenery}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ padding: '48px 40px', background: COLORS.mist }}>
        <div style={{ maxWidth: 1040, margin: '0 auto' }}>
          <div style={{ marginBottom: 20 }}>
            <p style={{ fontSize: 13, color: COLORS.slateMuted, margin: '0 0 4px', fontWeight: 500 }}>Steps 2–4</p>
            <h2 style={{ fontSize: 26, fontWeight: 500, color: COLORS.indigo, margin: 0 }}>Plan your climb</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
            {STEPS.map((s) => (
              <Link key={s.n} href={s.href} style={{ background: '#fff', borderRadius: 12, padding: 22, textDecoration: 'none', color: 'inherit' }}>
                <div style={{ width: 30, height: 30, borderRadius: '50%', background: COLORS.blueLight, color: COLORS.blueText, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 500, marginBottom: 14 }}>
                  {s.n}
                </div>
                <p style={{ fontSize: 16, fontWeight: 500, margin: '0 0 6px', color: COLORS.indigo }}>{s.title}</p>
                <p style={{ fontSize: 14, color: COLORS.slateMuted, margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '48px 40px' }}>
        <div style={{ maxWidth: 1040, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 4 }}>
            <h2 style={{ fontSize: 26, fontWeight: 500, color: COLORS.indigo, margin: 0 }}>Prefer a guided tour?</h2>
            <Link href="/tours" style={{ fontSize: 14, color: COLORS.sky, textDecoration: 'none' }}>
              All tours →
            </Link>
          </div>
          <p style={{ fontSize: 14, color: COLORS.slateMuted, margin: '0 0 20px' }}>English-speaking guides. Transport, huts, and gear often included.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 14 }}>
            {toursData.tours.slice(0, 3).map((t) => (
              <Link key={t.id} href="/tours" style={{ background: '#fff', border: `1px solid ${COLORS.border}`, borderRadius: 12, padding: 16, textDecoration: 'none', color: 'inherit' }}>
                <div style={{ height: 120, background: `linear-gradient(135deg, ${COLORS.blueLight}, ${COLORS.mist})`, borderRadius: 8, marginBottom: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: COLORS.slateHint, fontSize: 12 }}>
                  {t.partnerLabel}
                </div>
                <p style={{ fontSize: 15, fontWeight: 500, margin: '0 0 4px', lineHeight: 1.4 }}>{t.title}</p>
                <p style={{ fontSize: 13, color: COLORS.slateMuted, margin: '0 0 12px' }}>
                  {t.groupSize} · {t.partnerLabel}
                </p>
                <p style={{ fontSize: 14, fontWeight: 500, margin: 0, color: COLORS.indigo }}>from ¥{t.price.toLocaleString()}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion items={FAQS} />
      <Footer />
    </div>
  );
}
