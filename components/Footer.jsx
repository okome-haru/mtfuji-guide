import React from 'react';
import Link from 'next/link';
import { COLORS } from '@/lib/tokens';

export default function Footer() {
  return (
    <footer
      style={{
        padding: '28px 40px',
        borderTop: `1px solid ${COLORS.border}`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 12,
      }}
    >
      <p style={{ fontSize: 12, color: COLORS.slateHint, margin: 0 }}>
        © 2026 Mt Fuji Guide · Last updated Apr 2026 ·{' '}
        <Link href="/disclosure" style={{ color: COLORS.slateHint, textDecoration: 'underline' }}>
          Affiliate disclosure
        </Link>
      </p>
      <div style={{ display: 'flex', gap: 16 }}>
        <Link href="/about" style={{ fontSize: 12, color: COLORS.slateHint, textDecoration: 'none' }}>
          About
        </Link>
        <Link href="/contact" style={{ fontSize: 12, color: COLORS.slateHint, textDecoration: 'none' }}>
          Contact
        </Link>
        <Link href="/privacy" style={{ fontSize: 12, color: COLORS.slateHint, textDecoration: 'none' }}>
          Privacy
        </Link>
      </div>
    </footer>
  );
}
