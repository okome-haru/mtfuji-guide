import React from 'react';
import Link from 'next/link';
import { CheckCircle2, XCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RuleUpdateBanner from '@/components/RuleUpdateBanner';
import FAQAccordion from '@/components/FAQAccordion';
import AffiliateCTA from '@/components/AffiliateCTA';
import { COLORS, difficultyStyle } from '@/lib/tokens';
import toursData from '@/data/tours.json';
import { buildAffiliateUrl, affiliateLinkProps } from '@/lib/affiliate';

export const metadata = {
  title: 'Guided Mt Fuji tours, ranked for clarity',
  description:
    'English-speaking guided tours for Mt Fuji. We rank them by quality, safety, and value — not by commission. Book with confidence.',
};

const SELF_GUIDED = [
  { text: 'Cheapest (~¥15,000 total)', icon: 'check', tone: 'good' },
  { text: 'Book registration, bus, hut separately', icon: 'x', tone: 'bad' },
  { text: 'Japanese-only at many touchpoints', icon: 'x', tone: 'bad' },
  { text: 'No backup if weather turns', icon: 'x', tone: 'bad' },
];
const GUIDED = [
  { text: 'One booking — everything included', icon: 'check', tone: 'good' },
  { text: 'English guide, altitude-sickness aware', icon: 'check', tone: 'good' },
  { text: 'Reroute or reschedule if weather turns', icon: 'check', tone: 'good' },
  { text: '2–4× the price', icon: 'x', tone: 'bad' },
];

const RANKING_CRITERIA = [
  'Guide English level',
  'Safety & insurance',
  'Rule compliance',
  'Recent reviews',
];

const FAQS = [
  {
    q: 'Why should I trust your rankings?',
    a: 'We don\'t rank by commission rate. Tours at the top are there because they score well on English guide quality, safety protocols, and traveler reviews from 2024–2026. The "Editor\'s Pick" is what we\'d actually recommend to a friend.',
  },
  {
    q: 'Can I cancel if weather looks bad?',
    a: 'Yes — every tour listed here includes free cancellation at least 24 hours before. Check each tour\'s specific window. Some operators also offer weather-based rescheduling (not cancellation), which is often better.',
  },
  {
    q: 'Do these tours include the ¥4,000 entry fee?',
    a: 'Most do (we flag "Fee included" as a tag). Always check the tour\'s "What\'s included" section before booking to be sure.',
  },
  {
    q: 'Is private vs. small group actually worth the price jump?',
    a: 'If you have specific needs — unfit climbers, kids, tight schedule, photography priorities — yes. Otherwise, small group tours (6-8 people) offer a nearly identical experience at half the price.',
  },
];

const tintToGradient = (tint) => {
  const map = {
    blue: `linear-gradient(135deg, ${COLORS.blueLight}, ${COLORS.mist})`,
    amber: `linear-gradient(135deg, ${COLORS.amberLight}, ${COLORS.mist})`,
    purple: `linear-gradient(135deg, ${COLORS.purpleLight}, ${COLORS.mist})`,
    pink: `linear-gradient(135deg, ${COLORS.pinkLight}, ${COLORS.mist})`,
  };
  return map[tint] || map.blue;
};

export default function ToursPage() {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', color: COLORS.slate, background: '#fff', minHeight: '100vh' }}>
      <RuleUpdateBanner />
      <Header activePath="/tours" />

      <div style={{ padding: '24px 40px 0', maxWidth: 1040, margin: '0 auto' }}>
        <p style={{ fontSize: 12, color: COLORS.slateHint, margin: 0 }}>
          <Link href="/" style={{ color: COLORS.slateHint, textDecoration: 'none' }}>Home</Link> · Guided Tours
        </p>
      </div>

      <section style={{ padding: '20px 40px 36px', maxWidth: 1040, margin: '0 auto' }}>
        <h1 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 36, fontWeight: 500, color: COLORS.indigo, margin: '0 0 10px', lineHeight: 1.2 }}>
          Guided Mt Fuji tours, ranked for clarity.
        </h1>
        <p style={{ fontSize: 16, color: COLORS.slateMuted, margin: 0, maxWidth: 640, lineHeight: 1.6 }}>
          Every tour listed here includes an English-speaking guide and handles the 2026 registration and fee. We&apos;ve grouped them so you can match your budget, fitness, and timeline in under a minute.
        </p>
      </section>

      <section style={{ padding: '0 40px 36px', maxWidth: 1040, margin: '0 auto' }}>
        <div style={{ background: COLORS.mist, borderRadius: 12, padding: '22px 26px' }}>
          <h2 style={{ fontSize: 16, fontWeight: 500, color: COLORS.indigo, margin: '0 0 16px' }}>Self-guided vs. guided tour</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            <div>
              <p style={{ fontSize: 13, color: COLORS.slateMuted, fontWeight: 500, margin: '0 0 10px' }}>Self-guided</p>
              {SELF_GUIDED.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}>
                  {item.icon === 'check' ? (
                    <CheckCircle2 size={16} color={COLORS.greenText} style={{ flexShrink: 0, marginTop: 2 }} />
                  ) : (
                    <XCircle size={16} color={COLORS.redText} style={{ flexShrink: 0, marginTop: 2 }} />
                  )}
                  <p style={{ fontSize: 13, color: COLORS.slate, margin: 0, lineHeight: 1.5 }}>{item.text}</p>
                </div>
              ))}
            </div>
            <div style={{ borderLeft: `1px solid ${COLORS.border}`, paddingLeft: 20 }}>
              <p style={{ fontSize: 13, color: COLORS.amberTextDark, fontWeight: 500, margin: '0 0 10px' }}>Guided tour</p>
              {GUIDED.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}>
                  {item.icon === 'check' ? (
                    <CheckCircle2 size={16} color={COLORS.greenText} style={{ flexShrink: 0, marginTop: 2 }} />
                  ) : (
                    <XCircle size={16} color={COLORS.redText} style={{ flexShrink: 0, marginTop: 2 }} />
                  )}
                  <p style={{ fontSize: 13, color: COLORS.slate, margin: 0, lineHeight: 1.5 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 40px 24px', maxWidth: 1040, margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 13, color: COLORS.slateMuted, fontWeight: 500, marginRight: 4 }}>Filter:</span>
          <span style={{ fontSize: 13, background: COLORS.indigo, color: '#fff', padding: '5px 12px', borderRadius: 8, fontWeight: 500 }}>All tours</span>
          <span style={{ fontSize: 13, background: '#fff', border: `1px solid ${COLORS.border}`, color: COLORS.slate, padding: '5px 12px', borderRadius: 8 }}>Budget (under ¥25k)</span>
          <span style={{ fontSize: 13, background: '#fff', border: `1px solid ${COLORS.border}`, color: COLORS.slate, padding: '5px 12px', borderRadius: 8 }}>2-day + sunrise</span>
          <span style={{ fontSize: 13, background: '#fff', border: `1px solid ${COLORS.border}`, color: COLORS.slate, padding: '5px 12px', borderRadius: 8 }}>Private</span>
          <span style={{ fontSize: 13, background: '#fff', border: `1px solid ${COLORS.border}`, color: COLORS.slate, padding: '5px 12px', borderRadius: 8 }}>Small group</span>
        </div>
      </section>

      <section style={{ padding: '0 40px 36px', maxWidth: 1040, margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {toursData.tours.map((t) => {
            const diff = difficultyStyle(t.difficulty);
            const isEditorsPick = t.editorsPick;
            return (
              <div
                key={t.id}
                style={{
                  background: '#fff',
                  border: isEditorsPick ? `2px solid ${COLORS.blueText}` : `1px solid ${COLORS.border}`,
                  borderRadius: 12,
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                {isEditorsPick && (
                  <div style={{
                    position: 'absolute',
                    top: -10,
                    left: 22,
                    background: COLORS.blueLight,
                    color: COLORS.blueText,
                    fontSize: 11,
                    fontWeight: 500,
                    padding: '3px 10px',
                    borderRadius: 8,
                    zIndex: 1,
                  }}>
                    Editor&apos;s pick · best overall
                  </div>
                )}
                <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 0 }}>
                  <div style={{
                    background: tintToGradient(t.tint),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 12,
                    color: COLORS.slateHint,
                    minHeight: 170,
                  }}>
                    {t.partnerLabel}
                  </div>
                  <div style={{ padding: '22px 24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap' }}>
                      <div style={{ flex: 1, minWidth: 220 }}>
                        <p style={{ fontSize: 16, fontWeight: 500, margin: '0 0 4px', color: COLORS.indigo }}>{t.title}</p>
                        <p style={{ fontSize: 12, color: COLORS.slateMuted, margin: '0 0 10px' }}>
                          {t.partnerLabel} · {t.groupSize} · {t.duration}
                        </p>
                        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 10 }}>
                          <span style={{ background: diff.bg, color: diff.fg, fontSize: 10, fontWeight: 500, padding: '2px 7px', borderRadius: 8 }}>
                            {t.difficulty}
                          </span>
                          {t.tags.map((tag, i) => (
                            <span key={i} style={{ background: COLORS.mist, color: COLORS.slate, fontSize: 10, padding: '2px 7px', borderRadius: 8 }}>
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p style={{ fontSize: 13, color: COLORS.slateMuted, margin: 0, lineHeight: 1.6 }}>{t.description}</p>
                      </div>
                      <div style={{ textAlign: 'right', minWidth: 130 }}>
                        <p style={{ fontSize: 11, color: COLORS.slateMuted, margin: 0 }}>from</p>
                        <p style={{ fontSize: 22, fontWeight: 500, color: COLORS.indigo, margin: 0 }}>¥{t.price.toLocaleString()}</p>
                        <p style={{ fontSize: 11, color: COLORS.slateMuted, margin: '0 0 10px' }}>{t.priceUnit}</p>
                        <a
                          href={buildAffiliateUrl(t.partner, t.affiliateUrl)}
                          {...affiliateLinkProps}
                          style={{
                            display: 'block',
                            background: isEditorsPick ? COLORS.amber : 'transparent',
                            color: isEditorsPick ? COLORS.amberText : COLORS.indigo,
                            border: isEditorsPick ? 'none' : `1px solid ${COLORS.indigo}`,
                            padding: '9px 18px',
                            borderRadius: 8,
                            fontSize: 13,
                            fontWeight: 500,
                            textDecoration: 'none',
                            textAlign: 'center',
                            width: '100%',
                          }}
                        >
                          Book on {t.partnerLabel} →
                        </a>
                        <p style={{ fontSize: 10, color: COLORS.slateHint, margin: '6px 0 0' }}>{t.cancellation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section style={{ padding: '0 40px 36px', maxWidth: 1040, margin: '0 auto' }}>
        <div style={{ background: COLORS.mist, borderRadius: 12, padding: '22px 26px' }}>
          <h2 style={{ fontSize: 16, fontWeight: 500, color: COLORS.indigo, margin: '0 0 10px' }}>How we rank tours</h2>
          <p style={{ fontSize: 14, color: COLORS.slateMuted, margin: '0 0 14px', lineHeight: 1.6 }}>
            Not by commission rate. We check English guide quality, safety certifications, altitude-sickness protocols, and recent traveler reviews (2024–2026). Tours that include the mandatory ¥4,000 fee and advance registration score higher.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 10 }}>
            {RANKING_CRITERIA.map((c, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 22, height: 22, borderRadius: '50%', background: COLORS.greenLight, color: COLORS.greenText, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 500 }}>
                  ✓
                </div>
                <span style={{ fontSize: 12, color: COLORS.slate }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 40px 36px', maxWidth: 1040, margin: '0 auto' }}>
        <div style={{ padding: '14px 16px', background: COLORS.mist, borderLeft: `3px solid ${COLORS.borderStrong}`, borderRadius: 8 }}>
          <p style={{ fontSize: 12, color: COLORS.slateMuted, margin: 0, lineHeight: 1.6 }}>
            <span style={{ fontWeight: 500 }}>Transparency:</span> We earn a commission when you book via our links. This never costs you more. We only list tours we&apos;d recommend to a friend — see &quot;How we rank tours&quot; above.
          </p>
        </div>
      </section>

      <FAQAccordion items={FAQS} title="Tour booking FAQ" />
      <Footer />
    </div>
  );
}
