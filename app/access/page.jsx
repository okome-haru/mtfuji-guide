import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RuleUpdateBanner from '@/components/RuleUpdateBanner';
import FAQAccordion from '@/components/FAQAccordion';
import AffiliateCTA from '@/components/AffiliateCTA';
import { COLORS } from '@/lib/tokens';

export const metadata = {
  title: 'Getting to Mt Fuji from Tokyo — bus, train, and nearby stays',
  description:
    'The complete transport guide: Tokyo to each 5th Station, shinkansen options from Kansai, and the best places to stay before and after your climb.',
};

const TRANSPORT = [
  {
    trail: 'Yoshida Trail',
    from: 'Tokyo (Shinjuku)',
    method: 'Express bus',
    duration: '2.5 hours',
    price: '¥3,500 one way',
    frequency: 'Every 30–60 min during season',
    note: 'The easiest option. Buy online in advance — buses fill up.',
    bookUrl: 'https://www.klook.com/',
  },
  {
    trail: 'Subashiri Trail',
    from: 'Tokyo (Shinjuku) → Gotemba Station',
    method: 'Bus + local bus',
    duration: '3 hours',
    price: '¥2,000 + ¥1,570',
    frequency: '5–6 times/day',
    note: 'Requires transfer at Gotemba Station. Plan buffer time.',
    bookUrl: 'https://www.klook.com/',
  },
  {
    trail: 'Fujinomiya Trail',
    from: 'Tokyo or Kansai → Shin-Fuji Station',
    method: 'Shinkansen + bus',
    duration: '2.5 hours from Tokyo, 3 hours from Osaka',
    price: '¥4,800 + ¥2,400',
    frequency: '5–6 times/day',
    note: 'Best for Kansai-based travelers. Shinkansen to Shin-Fuji, then bus.',
    bookUrl: 'https://www.klook.com/',
  },
  {
    trail: 'Gotemba Trail',
    from: 'Tokyo → Gotemba Station',
    method: 'Express bus + local bus',
    duration: '2.5 hours',
    price: '¥2,000 + ¥1,570',
    frequency: '5–6 times/day',
    note: 'Same as Subashiri initially, different final bus. Check which line.',
    bookUrl: 'https://www.klook.com/',
  },
];

const STAY_AREAS = [
  {
    area: 'Kawaguchiko (recommended)',
    why: 'Best for Yoshida Trail. Stunning Mt Fuji views. Plenty of restaurants and ryokans. 15-minute bus to 5th station.',
    priceRange: '¥8,000–25,000/night',
    searchUrl: 'https://www.booking.com/searchresults.html?ss=Kawaguchiko',
  },
  {
    area: 'Fujiyoshida',
    why: 'Budget-friendly. Direct bus to Yoshida 5th Station. Less scenic but cheaper and closer.',
    priceRange: '¥6,000–15,000/night',
    searchUrl: 'https://www.booking.com/searchresults.html?ss=Fujiyoshida',
  },
  {
    area: 'Gotemba',
    why: 'Best for Subashiri and Gotemba trails. Famous outlet mall for post-climb shopping. Outlet mall fatigue is real though.',
    priceRange: '¥7,000–18,000/night',
    searchUrl: 'https://www.booking.com/searchresults.html?ss=Gotemba',
  },
  {
    area: 'Mountain huts (on the mountain)',
    why: 'For 2-day climbs: book an 8th-station hut. Basic, cramped, and loud, but essential for sunrise climbs. ¥13,000+ including dinner.',
    priceRange: '¥13,000–18,000/night',
    searchUrl: 'https://www.klook.com/',
  },
];

const FAQS = [
  {
    q: 'Should I rent a car?',
    a: 'No. Cars are banned from the Yoshida 5th Station road during peak season. Even when allowed, parking is ¥1,000+/day and traffic is heavy. Buses are faster and cheaper.',
  },
  {
    q: 'Can I use my JR Pass?',
    a: 'Partially. JR Pass covers the shinkansen to Shin-Fuji (for Fujinomiya) and the Chuo Line to Otsuki (toward Kawaguchiko), but not the final Fujikyu Line or the mountain buses.',
  },
  {
    q: 'When should I book accommodation?',
    a: 'Kawaguchiko hotels: 2+ months ahead for summer weekends. Mountain huts: as soon as you have dates locked, ideally 2–3 months out. Both fill up fast.',
  },
];

export default function AccessPage() {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', color: COLORS.slate, background: '#fff', minHeight: '100vh' }}>
      <RuleUpdateBanner />
      <Header activePath="/access" />

      <div style={{ padding: '24px 40px 0', maxWidth: 1040, margin: '0 auto' }}>
        <p style={{ fontSize: 12, color: COLORS.slateHint, margin: 0 }}>
          <Link href="/" style={{ color: COLORS.slateHint, textDecoration: 'none' }}>Home</Link> · Getting there
        </p>
      </div>

      <section style={{ padding: '20px 40px 36px', maxWidth: 1040, margin: '0 auto' }}>
        <h1 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 36, fontWeight: 500, color: COLORS.indigo, margin: '0 0 10px', lineHeight: 1.2 }}>
          Getting to Mt Fuji
        </h1>
        <p style={{ fontSize: 16, color: COLORS.slateMuted, margin: 0, maxWidth: 640, lineHeight: 1.6 }}>
          Each trail has its own access route. Here\'s how to get from Tokyo (or Kansai) to the 5th Station, and where to stay before and after your climb.
        </p>
      </section>

      <section style={{ padding: '0 40px 36px', maxWidth: 1040, margin: '0 auto' }}>
        <h2 style={{ fontSize: 22, fontWeight: 500, color: COLORS.indigo, margin: '0 0 16px' }}>Transport to each 5th Station</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {TRANSPORT.map((t, i) => (
            <div key={i} style={{ background: '#fff', border: `1px solid ${COLORS.border}`, borderRadius: 12, padding: '18px 22px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 12, flexWrap: 'wrap' }}>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 500, margin: '0 0 4px', color: COLORS.indigo }}>{t.trail}</h3>
                  <p style={{ fontSize: 13, color: COLORS.slateMuted, margin: 0 }}>{t.from}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: 14, fontWeight: 500, margin: 0, color: COLORS.indigo }}>{t.price}</p>
                  <p style={{ fontSize: 12, color: COLORS.slateMuted, margin: '2px 0 0' }}>{t.duration}</p>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 10, marginBottom: 12 }}>
                <div style={{ background: COLORS.mist, borderRadius: 8, padding: '8px 12px' }}>
                  <p style={{ fontSize: 11, color: COLORS.slateMuted, margin: 0 }}>Method</p>
                  <p style={{ fontSize: 13, fontWeight: 500, margin: '2px 0 0' }}>{t.method}</p>
                </div>
                <div style={{ background: COLORS.mist, borderRadius: 8, padding: '8px 12px' }}>
                  <p style={{ fontSize: 11, color: COLORS.slateMuted, margin: 0 }}>Frequency</p>
                  <p style={{ fontSize: 13, fontWeight: 500, margin: '2px 0 0' }}>{t.frequency}</p>
                </div>
              </div>
              <p style={{ fontSize: 13, color: COLORS.slateMuted, margin: '0 0 12px', lineHeight: 1.6 }}>{t.note}</p>
              <AffiliateCTA partner="klook" url={t.bookUrl} title={`Book ${t.trail} bus ticket`} subtitle="Klook" productId={`bus-${t.trail}`} variant="inline" />
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '40px', background: COLORS.mist }}>
        <div style={{ maxWidth: 1040, margin: '0 auto' }}>
          <h2 style={{ fontSize: 22, fontWeight: 500, color: COLORS.indigo, margin: '0 0 8px' }}>Where to stay</h2>
          <p style={{ fontSize: 14, color: COLORS.slateMuted, margin: '0 0 20px' }}>Pick your pre-climb base. Book 2+ months ahead during summer.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {STAY_AREAS.map((s, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 12, padding: '18px 22px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 8, flexWrap: 'wrap' }}>
                  <h3 style={{ fontSize: 15, fontWeight: 500, margin: 0, color: COLORS.indigo }}>{s.area}</h3>
                  <span style={{ fontSize: 13, fontWeight: 500, color: COLORS.slate, whiteSpace: 'nowrap' }}>{s.priceRange}</span>
                </div>
                <p style={{ fontSize: 13, color: COLORS.slateMuted, margin: '0 0 12px', lineHeight: 1.6 }}>{s.why}</p>
                <AffiliateCTA partner="booking" url={s.searchUrl} title={`Find hotels in ${s.area.split(' ')[0]}`} subtitle="Booking.com" productId={`stay-${s.area}`} variant="inline" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion items={FAQS} title="Transport & stays FAQ" />
      <Footer />
    </div>
  );
}
