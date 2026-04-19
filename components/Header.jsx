'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { COLORS } from '@/lib/tokens';

const NAV_ITEMS = [
  { label: 'Routes', href: '/routes' },
  { label: 'Rules', href: '/rules' },
  { label: 'Gear', href: '/gear' },
  { label: 'When', href: '/when' },
  { label: 'Access', href: '/access' },
  { label: 'Tours', href: '/tours' },
];

export default function Header({ activePath = '/' }) {
  return (
    <header
      style={{
        padding: '16px 32px',
        borderBottom: `1px solid ${COLORS.border}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#fff',
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}
    >
      <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
        <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M2 20 L12 5 L15 10 L17 8 L22 20 Z" fill={COLORS.indigo} />
          <path d="M9 11 L12 5 L13.8 8 L12 10 L11 9 Z" fill={COLORS.mist} />
        </svg>
        <span style={{ fontSize: 16, fontWeight: 500, color: COLORS.indigo }}>Mt Fuji Guide</span>
      </Link>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
        {NAV_ITEMS.map((item) => {
          const isActive = activePath === item.href || activePath.startsWith(item.href + '/');
          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                fontSize: 14,
                color: isActive ? COLORS.indigo : COLORS.slateMuted,
                fontWeight: isActive ? 500 : 400,
                textDecoration: 'none',
                borderBottom: isActive ? `2px solid ${COLORS.amber}` : '2px solid transparent',
                paddingBottom: 3,
              }}
            >
              {item.label}
            </Link>
          );
        })}
        <button
          style={{
            fontSize: 13,
            color: COLORS.slate,
            background: 'transparent',
            border: `1px solid ${COLORS.border}`,
            padding: '4px 10px',
            borderRadius: 8,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 4,
          }}
          aria-label="Language selector"
        >
          EN <ChevronDown size={12} />
        </button>
      </nav>
    </header>
  );
}
