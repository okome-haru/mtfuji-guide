'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { COLORS } from '@/lib/tokens';

export default function FAQAccordion({ items, title = 'Common questions' }) {
  const [open, setOpen] = useState(null);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <section style={{ padding: '40px', background: COLORS.mist }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ maxWidth: 1040, margin: '0 auto' }}>
        {title && <h2 style={{ fontSize: 22, fontWeight: 500, color: COLORS.indigo, margin: '0 0 16px' }}>{title}</h2>}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {items.map((f, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 10, overflow: 'hidden' }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  padding: '14px 16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  textAlign: 'left',
                  color: COLORS.slate,
                }}
              >
                <span style={{ fontSize: 14 }}>{f.q}</span>
                {open === i ? <ChevronDown size={16} color={COLORS.slateHint} /> : <ChevronRight size={16} color={COLORS.slateHint} />}
              </button>
              {open === i && (
                <div style={{ padding: '0 16px 14px', fontSize: 14, color: COLORS.slateMuted, lineHeight: 1.7 }}>
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
