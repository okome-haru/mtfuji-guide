'use client';

import React from 'react';
import { COLORS } from '@/lib/tokens';
import { buildAffiliateUrl, affiliateLinkProps, trackClick } from '@/lib/affiliate';

export default function AffiliateCTA({ partner, url, title, subtitle, productId, variant = 'primary' }) {
  const finalUrl = buildAffiliateUrl(partner, url);

  const handleClick = () => {
    trackClick(partner, productId || title, title);
  };

  if (variant === 'inline') {
    return (
      <a
        href={finalUrl}
        onClick={handleClick}
        {...affiliateLinkProps}
        style={{
          background: COLORS.mist,
          border: `1px solid ${COLORS.border}`,
          borderRadius: 8,
          padding: '10px 14px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          textDecoration: 'none',
          color: COLORS.slate,
          transition: 'background 0.15s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = COLORS.mistDark)}
        onMouseLeave={(e) => (e.currentTarget.style.background = COLORS.mist)}
      >
        <div>
          <p style={{ fontSize: 13, fontWeight: 500, margin: 0, color: COLORS.slate }}>{title}</p>
          {subtitle && <p style={{ fontSize: 11, color: COLORS.slateMuted, margin: '2px 0 0' }}>{subtitle}</p>}
        </div>
        <span style={{ fontSize: 12, color: COLORS.sky, fontWeight: 500, whiteSpace: 'nowrap' }}>Book →</span>
      </a>
    );
  }

  return (
    <a
      href={finalUrl}
      onClick={handleClick}
      {...affiliateLinkProps}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        background: COLORS.amber,
        color: COLORS.amberText,
        padding: '11px 20px',
        borderRadius: 8,
        fontSize: 14,
        fontWeight: 500,
        textDecoration: 'none',
      }}
    >
      {title} →
    </a>
  );
}
