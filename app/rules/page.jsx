import React from 'react';
import Link from 'next/link';
import { CheckCircle2, AlertCircle, Clock, CreditCard, UserCheck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RuleUpdateBanner from '@/components/RuleUpdateBanner';
import FAQAccordion from '@/components/FAQAccordion';
import { COLORS } from '@/lib/tokens';

export const metadata = {
  title: '2026 Mt Fuji rules & permits — what you must know',
  description:
    'The complete guide to the 2026 Mt Fuji climbing rules: ¥4,000 fee, advance online registration, time restrictions, and daily caps.',
};

const RULES = [
  {
    icon: CreditCard,
    title: '¥4,000 mandatory entry fee',
    body: 'All four trails now require a ¥4,000 payment before entering. Payable online during registration. Non-refundable once paid. Applies to every climber regardless of age, residency, or membership.',
    tint: 'amber',
  },
  {
    icon: UserCheck,
    title: 'Advance online registration',
    body: 'Register through the official Fujisan Climb portal (or via Klook/Viator if you book a tour). You\'ll receive a QR code and a wristband at the 5th station. No registration = no entry.',
    tint: 'blue',
  },
  {
    icon: Clock,
    title: 'No entry 2 PM → 3 AM',
    body: 'Gates are closed to new climbers between 2 PM and 3 AM. Exception: those with a confirmed mountain hut reservation passing through to their hut. This ends "bullet climbing."',
    tint: 'red',
  },
  {
    icon: AlertCircle,
    title: 'Daily cap of 4,000 (Yoshida)',
    body: 'Yoshida Trail caps at 4,000 climbers per day. Once reached, gates close even before 2 PM. Weekend slots fill fast — register at least a few weeks in advance.',
    tint: 'purple',
  },
];

const CHECKLIST = [
  'Register online at the official portal (or book a tour that includes registration)',
  'Pay the ¥4,000 fee online',
  'Save your QR code to your phone (offline-accessible)',
  'Arrive at 5th station before 2 PM (or have a hut reservation)',
  'Collect your wristband at the 5th station check-in',
  'Keep the wristband visible throughout your climb',
];

const FAQS = [
  {
    q: 'What if the daily cap is reached before I arrive?',
    a: 'You won\'t be allowed through the gate. Yoshida Trail hits its 4,000-climber cap on busy weekends — the system stops accepting new entries once reached. Plan weekday climbs or register well in advance.',
  },
  {
    q: 'Can I pay the fee in cash at the gate?',
    a: 'No. Payment is online only, before you arrive. This is a 2025+ change. Gate staff do not handle payments.',
  },
  {
    q: 'What if the weather turns bad after I\'ve paid?',
    a: 'The ¥4,000 fee is non-refundable once paid. Some tour operators offer weather-based rescheduling, so booking through a tour can be insurance against bad weather.',
  },
  {
    q: 'Do tour bookings handle registration automatically?',
    a: 'Yes — most guided tours (Klook, Viator, GetYourGuide) handle the online registration and fee on your behalf. Confirm this is explicitly stated on the booking page.',
  },
];

export default function RulesPage() {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', color: COLORS.slate, background: '#fff', minHeight: '100vh' }}>
      <RuleUpdateBanner />
      <Header activePath="/rules" />

      <div style={{ padding: '24px 40px 0', maxWidth: 1040, margin: '0 auto' }}>
        <p style={{ fontSize: 12, color: COLORS.slateHint, margin: 0 }}>
          <Link href="/" style={{ color: COLORS.slateHint, textDecoration: 'none' }}>Home</Link> · Rules
        </p>
      </div>

      <section style={{ padding: '20px 40px 36px', maxWidth: 1040, margin: '0 auto' }}>
        <h1 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 36, fontWeight: 500, color: COLORS.indigo, margin: '0 0 10px', lineHeight: 1.2 }}>
          2026 Mt Fuji rules — what you must know
        </h1>
        <p style={{ fontSize: 16, color: COLORS.slateMuted, margin: 0, maxWidth: 640, lineHeight: 1.6 }}>
          Since 2025, climbing Mt Fuji requires a ¥4,000 entry fee on all trails. Advance booking is optional but strongly recommended on busy days. Here\'t optional — gates are closed to non-registered climbers. Here\'s the full breakdown.
        </p>
      </section>

      <section style={{ padding: '0 40px 36px', maxWidth: 1040, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
          {RULES.map((rule, i) => {
            const Icon = rule.icon;
            const bg = rule.tint === 'amber' ? COLORS.amberLight
              : rule.tint === 'blue' ? COLORS.blueLight
              : rule.tint === 'red' ? COLORS.redLight
              : COLORS.purpleLight;
            const fg = rule.tint === 'amber' ? COLORS.amberTextDark
              : rule.tint === 'blue' ? COLORS.blueText
              : rule.tint === 'red' ? COLORS.redText
              : COLORS.purpleText;
            return (
              <div key={i} style={{ background: '#fff', border: `1px solid ${COLORS.border}`, borderRadius: 12, padding: '20px 22px' }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: bg, color: fg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                  <Icon size={20} />
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 500, margin: '0 0 8px', color: COLORS.indigo }}>{rule.title}</h3>
                <p style={{ fontSize: 14, color: COLORS.slateMuted, margin: 0, lineHeight: 1.6 }}>{rule.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section style={{ padding: '40px', background: COLORS.mist }}>
        <div style={{ maxWidth: 1040, margin: '0 auto' }}>
          <h2 style={{ fontSize: 22, fontWeight: 500, color: COLORS.indigo, margin: '0 0 14px' }}>Your pre-climb checklist</h2>
          <p style={{ fontSize: 14, color: COLORS.slateMuted, margin: '0 0 20px' }}>
            Run through this the week before your climb. Missing any step can mean being turned away at the gate.
          </p>
          <div style={{ background: '#fff', borderRadius: 12, padding: '20px 24px' }}>
            {CHECKLIST.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '12px 0', borderBottom: i < CHECKLIST.length - 1 ? `1px solid ${COLORS.border}` : 'none' }}>
                <CheckCircle2 size={20} color={COLORS.greenText} style={{ flexShrink: 0, marginTop: 2 }} />
                <p style={{ fontSize: 14, color: COLORS.slate, margin: 0, lineHeight: 1.6 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '36px 40px', maxWidth: 1040, margin: '0 auto' }}>
        <div style={{ background: COLORS.blueLight, borderRadius: 12, padding: '22px 26px' }}>
          <h3 style={{ fontSize: 16, fontWeight: 500, color: COLORS.blueText, margin: '0 0 10px' }}>
            Skip the paperwork — book a guided tour
          </h3>
          <p style={{ fontSize: 14, color: COLORS.blueText, margin: '0 0 16px', lineHeight: 1.6 }}>
            If registration, fee payment, and hut booking sound like too much, most guided tours bundle everything into one booking. You arrive, climb, and leave.
          </p>
          <Link href="/tours" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: COLORS.amber, color: COLORS.amberText, padding: '10px 18px', borderRadius: 8, fontSize: 13, fontWeight: 500, textDecoration: 'none' }}>
            See all-inclusive tours →
          </Link>
        </div>
      </section>

      <FAQAccordion items={FAQS} title="Rules FAQ" />
      <Footer />
    </div>
  );
}
