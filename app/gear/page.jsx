import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RuleUpdateBanner from '@/components/RuleUpdateBanner';
import FAQAccordion from '@/components/FAQAccordion';
import AffiliateCTA from '@/components/AffiliateCTA';
import { COLORS } from '@/lib/tokens';
import gearData from '@/data/gear.json';

export const metadata = {
  title: 'Mt Fuji gear checklist — rent or buy?',
  description:
    'The complete gear list for climbing Mt Fuji. Which items to rent in Tokyo, which to bring from home, and realistic cost estimates.',
};

const FAQS = [
  {
    q: 'Can I rent everything in Tokyo?',
    a: 'Almost. Boots, jackets, backpacks, poles, and headlamps can all be rented. Bring your own quick-dry underwear, socks, and cash. Most rental shops are near Shinjuku or at the 5th station itself.',
  },
  {
    q: 'Is cotton really dangerous?',
    a: 'Yes. Cotton holds moisture, stays cold, and can lead to hypothermia on the mountain. Stick to synthetic or merino wool layers.',
  },
  {
    q: 'How much cash should I actually bring?',
    a: '¥15,000 minimum. ¥2,000–4,000 for toilets (¥200–300 each time), ¥5,000–8,000 for hut purchases (water, snacks, optional dinner), and a buffer. No ATMs above the 5th station.',
  },
];

const RentOrBuyBadge = ({ value }) => {
  const colorMap = {
    'Rent': { bg: COLORS.blueLight, fg: COLORS.blueText },
    'Buy': { bg: COLORS.greenLight, fg: COLORS.greenText },
    'Bring': { bg: COLORS.amberLight, fg: COLORS.amberTextDark },
    'Bring or rent': { bg: COLORS.purpleLight, fg: COLORS.purpleText },
    'Rent or buy': { bg: COLORS.purpleLight, fg: COLORS.purpleText },
    'Buy en route': { bg: COLORS.pinkLight, fg: COLORS.pinkText },
    'Buy in Japan': { bg: COLORS.pinkLight, fg: COLORS.pinkText },
    'Bring from Tokyo': { bg: COLORS.amberLight, fg: COLORS.amberTextDark },
  };
  const c = colorMap[value] || { bg: COLORS.mist, fg: COLORS.slate };
  return (
    <span style={{ background: c.bg, color: c.fg, fontSize: 11, fontWeight: 500, padding: '3px 9px', borderRadius: 8, whiteSpace: 'nowrap' }}>
      {value}
    </span>
  );
};

export default function GearPage() {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', color: COLORS.slate, background: '#fff', minHeight: '100vh' }}>
      <RuleUpdateBanner />
      <Header activePath="/gear" />

      <div style={{ padding: '24px 40px 0', maxWidth: 1040, margin: '0 auto' }}>
        <p style={{ fontSize: 12, color: COLORS.slateHint, margin: 0 }}>
          <Link href="/" style={{ color: COLORS.slateHint, textDecoration: 'none' }}>Home</Link> · Gear
        </p>
      </div>

      <section style={{ padding: '20px 40px 36px', maxWidth: 1040, margin: '0 auto' }}>
        <h1 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 36, fontWeight: 500, color: COLORS.indigo, margin: '0 0 10px', lineHeight: 1.2 }}>
          What to pack for Mt Fuji
        </h1>
        <p style={{ fontSize: 16, color: COLORS.slateMuted, margin: 0, maxWidth: 640, lineHeight: 1.6 }}>
          The summit is near freezing even in August. This is the honest list — what you actually need, what you can rent in Tokyo, and realistic prices.
        </p>
      </section>

      <section style={{ padding: '0 40px 36px', maxWidth: 1040, margin: '0 auto' }}>
        <div style={{ background: COLORS.amberLight, borderRadius: 12, padding: '16px 20px' }}>
          <p style={{ fontSize: 12, fontWeight: 500, color: COLORS.amberTextDark, margin: '0 0 8px' }}>Why this matters</p>
          <p style={{ fontSize: 14, color: COLORS.amberText, margin: 0, lineHeight: 1.6 }}>
            People underestimate Mt Fuji. Summit temperature averages 2–6°C in August, with wind chill pushing it below freezing. Good gear isn\'t optional — it\'s the difference between a great summit sunrise and being evacuated with hypothermia.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 40px 36px', maxWidth: 1040, margin: '0 auto' }}>
        <h2 style={{ fontSize: 22, fontWeight: 500, color: COLORS.indigo, margin: '0 0 8px' }}>Essential gear</h2>
        <p style={{ fontSize: 14, color: COLORS.slateMuted, margin: '0 0 20px' }}>These are non-negotiable. Skipping any is genuinely risky.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {gearData.essential.map((item, i) => (
            <div key={i} style={{ background: '#fff', border: `1px solid ${COLORS.border}`, borderRadius: 12, padding: '18px 22px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 10, flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 500, margin: '0 0 4px', color: COLORS.indigo }}>{item.name}</h3>
                  <p style={{ fontSize: 14, color: COLORS.slateMuted, margin: 0, lineHeight: 1.6 }}>{item.why}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8, minWidth: 140 }}>
                  <RentOrBuyBadge value={item.rentOrBuy} />
                  <p style={{ fontSize: 12, color: COLORS.slateMuted, margin: 0, textAlign: 'right' }}>{item.estimatedCost}</p>
                </div>
              </div>
              {(item.rentalUrl || item.buyUrl) && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 8, marginTop: 12 }}>
                  {item.rentalUrl && (
                    <AffiliateCTA partner="klook" url={item.rentalUrl} title={`Rent ${item.name.toLowerCase()}`} subtitle="Klook" productId={`rent-${item.name}`} variant="inline" />
                  )}
                  {item.buyUrl && (
                    <AffiliateCTA partner="amazon" url={item.buyUrl} title={`Buy ${item.name.toLowerCase()}`} subtitle="Amazon" productId={`buy-${item.name}`} variant="inline" />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '40px', background: COLORS.mist }}>
        <div style={{ maxWidth: 1040, margin: '0 auto' }}>
          <h2 style={{ fontSize: 22, fontWeight: 500, color: COLORS.indigo, margin: '0 0 8px' }}>Nice-to-have (optional)</h2>
          <p style={{ fontSize: 14, color: COLORS.slateMuted, margin: '0 0 20px' }}>Not essential, but many climbers appreciate having these.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12 }}>
            {gearData.optional.map((item, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 12, padding: '18px 22px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10, marginBottom: 6 }}>
                  <h3 style={{ fontSize: 15, fontWeight: 500, margin: 0, color: COLORS.indigo }}>{item.name}</h3>
                  <RentOrBuyBadge value={item.rentOrBuy} />
                </div>
                <p style={{ fontSize: 13, color: COLORS.slateMuted, margin: '0 0 8px', lineHeight: 1.6 }}>{item.why}</p>
                <p style={{ fontSize: 12, color: COLORS.slateHint, margin: 0 }}>{item.estimatedCost}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '36px 40px', maxWidth: 1040, margin: '0 auto' }}>
        <div style={{ background: COLORS.blueLight, borderRadius: 12, padding: '22px 26px' }}>
          <h3 style={{ fontSize: 16, fontWeight: 500, color: COLORS.blueText, margin: '0 0 10px' }}>Renting it all at once</h3>
          <p style={{ fontSize: 14, color: COLORS.blueText, margin: '0 0 16px', lineHeight: 1.6 }}>
            Rental shops near Shinjuku offer complete climbing sets (boots + jacket + pants + backpack + poles + headlamp) for around ¥8,000. You pick up on the way and drop off when you return.
          </p>
          <AffiliateCTA partner="klook" url="https://www.klook.com/" title="Reserve a full rental set (Klook)" productId="full-rental-set" />
        </div>
      </section>

      <FAQAccordion items={FAQS} title="Gear FAQ" />
      <Footer />
    </div>
  );
}
