import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RuleUpdateBanner from '@/components/RuleUpdateBanner';
import FAQAccordion from '@/components/FAQAccordion';
import AffiliateCTA from '@/components/AffiliateCTA';
import { COLORS } from '@/lib/tokens';

export const metadata = {
  title: 'When to climb Mt Fuji — best weeks, weather, sunrise timing',
  description:
    'The climbing season runs July 1 to early September. Here\'s how to pick the right week, avoid the worst crowds, and catch sunrise perfectly.',
};

const WEEKLY = [
  { week: 'Early July', temp: '3–8°C (summit)', crowd: 'Low', weather: 'Most rainy', note: 'Rainy season tail end. Fewest people but unpredictable weather.' },
  { week: 'Mid July', temp: '4–9°C', crowd: 'Medium', weather: 'Improving', note: 'Rainy season typically ends. Good balance of weather and crowds.' },
  { week: 'Late July', temp: '5–10°C', crowd: 'High', weather: 'Clear', note: 'Japanese school holidays begin. Crowds build quickly.' },
  { week: 'Early August (Obon)', temp: '5–10°C', crowd: 'Very high', weather: 'Clear', note: 'Obon holiday week — most crowded period. Avoid unless you like company.' },
  { week: 'Mid August', temp: '5–10°C', crowd: 'High', weather: 'Clear', note: 'Still busy but Obon has passed. Hut availability improves slightly.' },
  { week: 'Late August', temp: '3–8°C', crowd: 'Medium', weather: 'Clear', note: 'Schools resume, crowds drop. Good sweet spot for most climbers.' },
  { week: 'Early September', temp: '0–6°C', crowd: 'Low', weather: 'Variable', note: 'Final window. Coldest and quietest. Some huts close mid-month.' },
];

const SUNRISE_TIPS = [
  { title: 'Target 4:30–5:00 AM summit arrival', body: 'Sunrise in peak season is between 4:30 and 5:00 AM. Arrive at the summit 15–30 minutes before for the best viewing spot.' },
  { title: 'Leave the hut by 1:30 AM', body: 'Most climbers stay at 8th-station huts. Budget 2–3 hours for the final push — it\'s slow, cold, and congested.' },
  { title: 'Crater rim walk adds 1 hour', body: 'After sunrise, walking the crater rim (Ohachi-meguri) takes ~60 minutes. Worth it if weather allows.' },
];

const FAQS = [
  {
    q: 'Can I climb outside the official season?',
    a: 'Technically yes, but trails are closed, huts are shuttered, and weather can be life-threatening. Off-season climbing requires mountaineering experience, permits, and equipment. This site is for regular-season climbers only.',
  },
  {
    q: 'What about weekends vs. weekdays?',
    a: 'Huge difference. Weekend climber counts are 2–3× weekdays on Yoshida Trail. If you have flexibility, aim for Tuesday–Thursday departures.',
  },
  {
    q: 'Will I see Mt Fuji from Tokyo before I climb?',
    a: 'On clear winter days, yes — from Tokyo Tower, Skytree, or high-floor hotels. During climbing season (summer), clouds and haze usually hide it from the city.',
  },
];

export default function WhenPage() {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', color: COLORS.slate, background: '#fff', minHeight: '100vh' }}>
      <RuleUpdateBanner />
      <Header activePath="/when" />

      <div style={{ padding: '24px 40px 0', maxWidth: 1040, margin: '0 auto' }}>
        <p style={{ fontSize: 12, color: COLORS.slateHint, margin: 0 }}>
          <Link href="/" style={{ color: COLORS.slateHint, textDecoration: 'none' }}>Home</Link> · When to climb
        </p>
      </div>

      <section style={{ padding: '20px 40px 36px', maxWidth: 1040, margin: '0 auto' }}>
        <h1 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 36, fontWeight: 500, color: COLORS.indigo, margin: '0 0 10px', lineHeight: 1.2 }}>
          When to climb Mt Fuji
        </h1>
        <p style={{ fontSize: 16, color: COLORS.slateMuted, margin: 0, maxWidth: 640, lineHeight: 1.6 }}>
          The official climbing season runs from July 1 to early September. Within that window, your specific week choice dramatically changes the experience.
        </p>
      </section>

      <section style={{ padding: '0 40px 36px', maxWidth: 1040, margin: '0 auto' }}>
        <h2 style={{ fontSize: 22, fontWeight: 500, color: COLORS.indigo, margin: '0 0 14px' }}>Week-by-week breakdown</h2>
        <div style={{ border: `1px solid ${COLORS.border}`, borderRadius: 12, overflow: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, minWidth: 700 }}>
            <thead>
              <tr style={{ background: COLORS.mist }}>
                <th style={{ textAlign: 'left', padding: '12px 14px', fontWeight: 500, color: COLORS.slateMuted }}>Week</th>
                <th style={{ textAlign: 'left', padding: '12px 14px', fontWeight: 500, color: COLORS.slateMuted }}>Temp</th>
                <th style={{ textAlign: 'left', padding: '12px 14px', fontWeight: 500, color: COLORS.slateMuted }}>Crowd</th>
                <th style={{ textAlign: 'left', padding: '12px 14px', fontWeight: 500, color: COLORS.slateMuted }}>Weather</th>
                <th style={{ textAlign: 'left', padding: '12px 14px', fontWeight: 500, color: COLORS.slateMuted }}>Note</th>
              </tr>
            </thead>
            <tbody>
              {WEEKLY.map((w, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : COLORS.mist }}>
                  <td style={{ padding: '12px 14px', fontWeight: 500, borderTop: `1px solid ${COLORS.border}` }}>{w.week}</td>
                  <td style={{ padding: '12px 14px', borderTop: `1px solid ${COLORS.border}` }}>{w.temp}</td>
                  <td style={{ padding: '12px 14px', borderTop: `1px solid ${COLORS.border}` }}>{w.crowd}</td>
                  <td style={{ padding: '12px 14px', borderTop: `1px solid ${COLORS.border}` }}>{w.weather}</td>
                  <td style={{ padding: '12px 14px', color: COLORS.slateMuted, borderTop: `1px solid ${COLORS.border}` }}>{w.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section style={{ padding: '0 40px 36px', maxWidth: 1040, margin: '0 auto' }}>
        <div style={{ background: COLORS.blueLight, borderRadius: 12, padding: '20px 24px' }}>
          <h3 style={{ fontSize: 16, fontWeight: 500, color: COLORS.blueText, margin: '0 0 10px' }}>Our honest recommendation</h3>
          <p style={{ fontSize: 14, color: COLORS.blueText, margin: 0, lineHeight: 1.7 }}>
            Late August weekdays (Mon–Thu). You get clear weather, manageable crowds, and can still book huts without planning months ahead. Avoid Obon week (mid-August) at all costs unless you specifically want the crowded festival experience.
          </p>
        </div>
      </section>

      <section style={{ padding: '40px', background: COLORS.mist }}>
        <div style={{ maxWidth: 1040, margin: '0 auto' }}>
          <h2 style={{ fontSize: 22, fontWeight: 500, color: COLORS.indigo, margin: '0 0 16px' }}>Catching sunrise at the summit</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
            {SUNRISE_TIPS.map((tip, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 12, padding: '18px 22px' }}>
                <p style={{ fontSize: 15, fontWeight: 500, margin: '0 0 6px', color: COLORS.indigo }}>{tip.title}</p>
                <p style={{ fontSize: 13, color: COLORS.slateMuted, margin: 0, lineHeight: 1.6 }}>{tip.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '36px 40px', maxWidth: 1040, margin: '0 auto' }}>
        <div style={{ background: COLORS.amberLight, borderRadius: 12, padding: '22px 26px' }}>
          <h3 style={{ fontSize: 16, fontWeight: 500, color: COLORS.amberTextDark, margin: '0 0 10px' }}>Want the sunrise without planning?</h3>
          <p style={{ fontSize: 14, color: COLORS.amberText, margin: '0 0 16px', lineHeight: 1.6 }}>
            Small-group tours time the entire climb around sunrise — hut check-in, night rest, early wake-up, final push. No guessing about timing.
          </p>
          <AffiliateCTA partner="klook" url="https://www.klook.com/activity/57626-mount-fuji-hiking-tour-tokyo-yokohama/" title="Book a sunrise tour (Klook)" productId="sunrise-tour" />
        </div>
      </section>

      <FAQAccordion items={FAQS} title="Timing FAQ" />
      <Footer />
    </div>
  );
}
