import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RuleUpdateBanner from '@/components/RuleUpdateBanner';
import AffiliateCTA from '@/components/AffiliateCTA';
import { COLORS, difficultyStyle, diffStyle } from '@/lib/tokens';
import routesData from '@/data/routes.json';

export const metadata = {
  title: 'The 4 Mt Fuji trails compared — Yoshida, Subashiri, Fujinomiya, Gotemba',
  description:
    'Every climber starts here. Your choice of trail shapes everything — time, cost, crowds, scenery. Updated for 2026 regulations.',
};

const QUICK_PICKS = [
  { header: 'First-timer from Tokyo →', body: 'Yoshida Trail.', detail: 'Easiest access, most huts.' },
  { header: 'Want the shortest climb →', body: 'Fujinomiya.', detail: 'Starts highest, 5h up.' },
  { header: 'Avoiding crowds →', body: 'Subashiri or Gotemba.', detail: 'Quieter, harder.' },
];

const crowdDots = (level) => {
  const filled = '●'.repeat(level);
  const empty = '○'.repeat(5 - level);
  return filled + empty;
};

const crowdLabel = (level) => {
  if (level <= 1) return 'Very low';
  if (level === 2) return 'Low';
  if (level === 3) return 'Medium';
  if (level === 4) return 'High';
  return 'Very high';
};

export default function RoutesPage() {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', color: COLORS.slate, background: '#fff', minHeight: '100vh' }}>
      <RuleUpdateBanner />
      <Header activePath="/routes" />

      <div style={{ padding: '24px 40px 0', maxWidth: 1040, margin: '0 auto' }}>
        <p style={{ fontSize: 12, color: COLORS.slateHint, margin: 0 }}>
          <Link href="/" style={{ color: COLORS.slateHint, textDecoration: 'none' }}>Home</Link> · Routes
        </p>
      </div>

      <section style={{ padding: '20px 40px 36px', maxWidth: 1040, margin: '0 auto' }}>
        <h1 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 36, fontWeight: 500, color: COLORS.indigo, margin: '0 0 10px', lineHeight: 1.2 }}>
          The 4 trails of Mt Fuji, compared
        </h1>
        <p style={{ fontSize: 16, color: COLORS.slateMuted, margin: 0, maxWidth: 640, lineHeight: 1.6 }}>
          Every climber starts here. Your choice of trail shapes everything — time, cost, crowds, scenery, and which bus you'll be taking from Tokyo.
        </p>
      </section>

      <section style={{ padding: '0 40px 36px', maxWidth: 1040, margin: '0 auto' }}>
        <div style={{ background: COLORS.amberLight, borderRadius: 12, padding: '18px 22px' }}>
          <p style={{ fontSize: 12, fontWeight: 500, color: COLORS.amberTextDark, margin: '0 0 12px' }}>TL;DR · quick pick</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {QUICK_PICKS.map((p, i) => (
              <div key={i}>
                <p style={{ fontSize: 13, color: COLORS.amberTextDark, fontWeight: 500, margin: '0 0 4px' }}>{p.header}</p>
                <p style={{ fontSize: 14, color: COLORS.amberText, margin: 0, lineHeight: 1.5 }}>
                  <span style={{ fontWeight: 500 }}>{p.body}</span> {p.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 40px 36px', maxWidth: 1040, margin: '0 auto' }}>
        <h2 style={{ fontSize: 20, fontWeight: 500, color: COLORS.indigo, margin: '0 0 4px' }}>Where each trail starts</h2>
        <p style={{ fontSize: 13, color: COLORS.slateMuted, margin: '0 0 14px' }}>
          All trails begin at a "5th Station" partway up. Starting altitude varies — higher means shorter.
        </p>
        <div style={{ background: COLORS.mist, borderRadius: 12, padding: 20 }}>
          <svg viewBox="0 0 600 240" style={{ width: '100%', height: 'auto', display: 'block' }} aria-hidden="true">
            <path d="M40 220 L300 40 L560 220 Z" fill={COLORS.blueLight} stroke={COLORS.blueText} strokeWidth="1" />
            <path d="M260 80 L300 40 L340 80 L325 90 L310 82 L290 92 L275 82 Z" fill="#FFFFFF" stroke={COLORS.blueText} strokeWidth="1" />
            <circle cx="300" cy="40" r="4" fill={COLORS.indigo} />
            <text x="300" y="30" textAnchor="middle" fill={COLORS.indigo} fontSize="11" fontWeight="500" fontFamily="Arial, sans-serif">Summit 3,776m</text>

            <circle cx="175" cy="128" r="6" fill={COLORS.blueText} />
            <line x1="175" y1="128" x2="175" y2="160" stroke={COLORS.blueText} strokeWidth="1" strokeDasharray="2 2" />
            <text x="175" y="175" textAnchor="middle" fill={COLORS.indigo} fontSize="11" fontWeight="500" fontFamily="Arial, sans-serif">Yoshida</text>
            <text x="175" y="188" textAnchor="middle" fill={COLORS.slateMuted} fontSize="10" fontFamily="Arial, sans-serif">2,305m</text>

            <circle cx="405" cy="145" r="6" fill="#BA7517" />
            <line x1="405" y1="145" x2="405" y2="170" stroke="#BA7517" strokeWidth="1" strokeDasharray="2 2" />
            <text x="405" y="185" textAnchor="middle" fill={COLORS.amberTextDark} fontSize="11" fontWeight="500" fontFamily="Arial, sans-serif">Subashiri</text>
            <text x="405" y="198" textAnchor="middle" fill={COLORS.slateMuted} fontSize="10" fontFamily="Arial, sans-serif">2,000m</text>

            <circle cx="300" cy="118" r="6" fill="#639922" />
            <line x1="300" y1="118" x2="300" y2="200" stroke="#639922" strokeWidth="1" strokeDasharray="2 2" />
            <text x="300" y="215" textAnchor="middle" fill={COLORS.greenText} fontSize="11" fontWeight="500" fontFamily="Arial, sans-serif">Fujinomiya</text>
            <text x="300" y="228" textAnchor="middle" fill={COLORS.slateMuted} fontSize="10" fontFamily="Arial, sans-serif">2,400m · highest start</text>

            <circle cx="490" cy="175" r="6" fill="#A32D2D" />
            <line x1="490" y1="175" x2="490" y2="190" stroke="#A32D2D" strokeWidth="1" strokeDasharray="2 2" />
            <text x="490" y="205" textAnchor="middle" fill={COLORS.redText} fontSize="11" fontWeight="500" fontFamily="Arial, sans-serif">Gotemba</text>
            <text x="490" y="218" textAnchor="middle" fill={COLORS.slateMuted} fontSize="10" fontFamily="Arial, sans-serif">1,440m · lowest</text>
          </svg>
        </div>
      </section>

      <section style={{ padding: '0 40px 36px', maxWidth: 1040, margin: '0 auto' }}>
        <h2 style={{ fontSize: 20, fontWeight: 500, color: COLORS.indigo, margin: '0 0 14px' }}>Full comparison</h2>
        <div style={{ border: `1px solid ${COLORS.border}`, borderRadius: 12, overflow: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, minWidth: 700 }}>
            <thead>
              <tr style={{ background: COLORS.mist }}>
                <th style={{ textAlign: 'left', padding: '12px 14px', fontWeight: 500, color: COLORS.slateMuted, fontSize: 12, width: '22%' }}></th>
                {routesData.routes.map((r) => {
                  const diff = diffStyle(r.tint);
                  return (
                    <th key={r.slug} style={{ textAlign: 'left', padding: '12px 14px', fontWeight: 500, color: diff.fg, width: '19.5%' }}>
                      {r.name.replace(' Trail', '')}
                      {r.popular && (
                        <span style={{ display: 'inline-block', background: COLORS.blueLight, color: COLORS.blueText, fontSize: 10, padding: '1px 6px', borderRadius: 8, marginLeft: 6, fontWeight: 500 }}>
                          Popular
                        </span>
                      )}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '12px 14px', color: COLORS.slateMuted, borderTop: `1px solid ${COLORS.border}` }}>Difficulty</td>
                {routesData.routes.map((r) => {
                  const d = difficultyStyle(r.difficulty);
                  return (
                    <td key={r.slug} style={{ padding: '12px 14px', borderTop: `1px solid ${COLORS.border}` }}>
                      <span style={{ background: d.bg, color: d.fg, fontSize: 11, fontWeight: 500, padding: '2px 7px', borderRadius: 8 }}>
                        {r.difficulty}
                      </span>
                    </td>
                  );
                })}
              </tr>
              <tr style={{ background: COLORS.mist }}>
                <td style={{ padding: '12px 14px', color: COLORS.slateMuted }}>Time up / down</td>
                {routesData.routes.map((r) => (
                  <td key={r.slug} style={{ padding: '12px 14px', fontWeight: 500 }}>
                    {r.timeUp} / {r.timeDown}
                  </td>
                ))}
              </tr>
              <tr>
                <td style={{ padding: '12px 14px', color: COLORS.slateMuted, borderTop: `1px solid ${COLORS.border}` }}>Starting altitude</td>
                {routesData.routes.map((r) => (
                  <td key={r.slug} style={{ padding: '12px 14px', borderTop: `1px solid ${COLORS.border}` }}>
                    {r.startAltitude.toLocaleString()} m
                  </td>
                ))}
              </tr>
              <tr style={{ background: COLORS.mist }}>
                <td style={{ padding: '12px 14px', color: COLORS.slateMuted }}>Mountain huts</td>
                {routesData.routes.map((r) => (
                  <td key={r.slug} style={{ padding: '12px 14px' }}>
                    {r.hutCount}
                  </td>
                ))}
              </tr>
              <tr>
                <td style={{ padding: '12px 14px', color: COLORS.slateMuted, borderTop: `1px solid ${COLORS.border}` }}>Crowd level</td>
                {routesData.routes.map((r) => (
                  <td key={r.slug} style={{ padding: '12px 14px', borderTop: `1px solid ${COLORS.border}`, fontSize: 12 }}>
                    {crowdDots(r.crowdLevel)} {crowdLabel(r.crowdLevel)}
                  </td>
                ))}
              </tr>
              <tr style={{ background: COLORS.mist }}>
                <td style={{ padding: '12px 14px', color: COLORS.slateMuted }}>Scenery highlight</td>
                {routesData.routes.map((r) => (
                  <td key={r.slug} style={{ padding: '12px 14px', color: COLORS.slateMuted, fontSize: 12, lineHeight: 1.5 }}>
                    {r.scenery}
                  </td>
                ))}
              </tr>
              <tr>
                <td style={{ padding: '12px 14px', color: COLORS.slateMuted, borderTop: `1px solid ${COLORS.border}` }}>Access from</td>
                {routesData.routes.map((r) => (
                  <td key={r.slug} style={{ padding: '12px 14px', borderTop: `1px solid ${COLORS.border}`, color: COLORS.slateMuted, fontSize: 12 }}>
                    {r.accessFrom}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section style={{ padding: '0 40px 36px', maxWidth: 1040, margin: '0 auto' }}>
        <h2 style={{ fontSize: 20, fontWeight: 500, color: COLORS.indigo, margin: '0 0 14px' }}>Each trail in detail</h2>

        {routesData.routes.map((r) => {
          const d = difficultyStyle(r.difficulty);
          return (
            <div
              key={r.slug}
              id={r.slug}
              style={{ background: '#fff', border: `1px solid ${COLORS.border}`, borderRadius: 12, padding: '20px 22px', marginBottom: 12 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 12 }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6, flexWrap: 'wrap' }}>
                    <h3 style={{ fontSize: 18, fontWeight: 500, margin: 0, color: COLORS.indigo }}>{r.name}</h3>
                    <span style={{ background: d.bg, color: d.fg, fontSize: 10, fontWeight: 500, padding: '2px 7px', borderRadius: 8 }}>
                      {r.difficulty}
                    </span>
                    {r.popular && (
                      <span style={{ background: COLORS.blueLight, color: COLORS.blueText, fontSize: 10, fontWeight: 500, padding: '2px 7px', borderRadius: 8 }}>
                        Most popular
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: 14, color: COLORS.slateMuted, margin: 0, lineHeight: 1.6 }}>{r.description}</p>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 10, margin: '14px 0' }}>
                <div style={{ background: COLORS.mist, borderRadius: 8, padding: '10px 12px' }}>
                  <p style={{ fontSize: 11, color: COLORS.slateMuted, margin: 0 }}>Best for</p>
                  <p style={{ fontSize: 13, fontWeight: 500, margin: '2px 0 0' }}>{r.bestFor}</p>
                </div>
                <div style={{ background: COLORS.mist, borderRadius: 8, padding: '10px 12px' }}>
                  <p style={{ fontSize: 11, color: COLORS.slateMuted, margin: 0 }}>Avoid if</p>
                  <p style={{ fontSize: 13, fontWeight: 500, margin: '2px 0 0' }}>{r.avoidIf}</p>
                </div>
                <div style={{ background: COLORS.mist, borderRadius: 8, padding: '10px 12px' }}>
                  <p style={{ fontSize: 11, color: COLORS.slateMuted, margin: 0 }}>Daily cap</p>
                  <p style={{ fontSize: 13, fontWeight: 500, margin: '2px 0 0' }}>
                    {r.dailyCap ? `${r.dailyCap.toLocaleString()} people` : 'No cap'}
                  </p>
                </div>
                <div style={{ background: COLORS.mist, borderRadius: 8, padding: '10px 12px' }}>
                  <p style={{ fontSize: 11, color: COLORS.slateMuted, margin: 0 }}>Entry fee</p>
                  <p style={{ fontSize: 13, fontWeight: 500, margin: '2px 0 0' }}>¥{r.entryFee.toLocaleString()}</p>
                </div>
              </div>

              <div style={{ background: COLORS.amberLight, borderRadius: 8, padding: '14px 16px' }}>
                <p style={{ fontSize: 11, fontWeight: 500, color: COLORS.amberTextDark, margin: '0 0 10px' }}>
                  Book {r.name.replace(' Trail', '')} essentials
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 10 }}>
                  <AffiliateCTA partner="klook" url="https://www.klook.com/activity/57626-mount-fuji-hiking-tour-tokyo-yokohama/" title={`Tokyo → ${r.name.replace(' Trail', '')} bus`} subtitle="Klook · from ¥3,500" productId={`bus-${r.slug}`} variant="inline" />
                  <AffiliateCTA partner="klook" url="https://www.klook.com/activity/57626-mount-fuji-hiking-tour-tokyo-yokohama/" title="Mountain hut · 8th St." subtitle="Klook · from ¥13,000" productId={`hut-${r.slug}`} variant="inline" />
                  <AffiliateCTA partner="viator" url="https://www.viator.com/tours/Tokyo/Mount-Fuji-Climbing-Tour/d334-43454P81" title={`Guided ${r.name.replace(' Trail', '')} tour`} subtitle="Viator · from ¥32,000" productId={`tour-${r.slug}`} variant="inline" />
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <section style={{ padding: '0 40px 36px', maxWidth: 1040, margin: '0 auto' }}>
        <div style={{ background: COLORS.indigo, borderRadius: 12, padding: '24px 28px', color: COLORS.blueLight, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 220 }}>
            <p style={{ fontSize: 13, fontWeight: 500, margin: '0 0 6px', color: '#85B7EB' }}>Still unsure?</p>
            <p style={{ fontSize: 18, fontWeight: 500, margin: '0 0 4px', color: '#FFFFFF' }}>Let a guide handle the decision.</p>
            <p style={{ fontSize: 13, margin: 0, color: '#B5D4F4', lineHeight: 1.6 }}>
              English-speaking guides pick the right trail for your fitness, include transport from Tokyo, and handle hut bookings.
            </p>
          </div>
          <Link href="/tours" style={{ background: COLORS.amber, color: COLORS.amberText, padding: '11px 20px', borderRadius: 8, fontSize: 13, fontWeight: 500, textDecoration: 'none', whiteSpace: 'nowrap' }}>
            See guided tours →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
