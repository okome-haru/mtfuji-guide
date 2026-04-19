'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { COLORS } from '@/lib/tokens';

export default function RuleUpdateBanner() {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  return (
    <div
      style={{
        background: COLORS.amberLight,
        borderBottom: `1px solid ${COLORS.amber}`,
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
      }}
    >
      <p style={{ fontSize: 13, color: COLORS.amberTextDark, margin: 0 }}>
        <span style={{ fontWeight: 500 }}>2026 update · </span>
        All trails require a ¥4,000 fee and advance registration.{' '}
        <Link
          href="/rules"
          style={{
            color: COLORS.amberTextDark,
            textDecoration: 'underline',
            fontWeight: 500,
          }}
        >
          Read the rules →
        </Link>
      </p>
      <button
        onClick={() => setOpen(false)}
        style={{
          background: 'transparent',
          border: 'none',
          color: COLORS.amberTextDark,
          cursor: 'pointer',
          padding: 4,
          display: 'flex',
          alignItems: 'center',
        }}
        aria-label="Dismiss banner"
      >
        <X size={16} />
      </button>
    </div>
  );
}
