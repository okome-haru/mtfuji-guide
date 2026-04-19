const AFFILIATE_IDS = {
  klook: process.env.NEXT_PUBLIC_KLOOK_AID || '',
  viator: process.env.NEXT_PUBLIC_VIATOR_PID || '',
  getyourguide: process.env.NEXT_PUBLIC_GYG_PARTNER_ID || '',
  booking: process.env.NEXT_PUBLIC_BOOKING_AID || '',
  amazon: process.env.NEXT_PUBLIC_AMAZON_TAG || '',
};

export function buildAffiliateUrl(partner, url) {
  try {
    const u = new URL(url);
    const id = AFFILIATE_IDS[partner];
    if (!id) return url;
    switch (partner) {
      case 'klook':
        u.searchParams.set('aid', id);
        break;
      case 'viator':
        u.searchParams.set('pid', id);
        break;
      case 'getyourguide':
        u.searchParams.set('partner_id', id);
        break;
      case 'booking':
        u.searchParams.set('aid', id);
        break;
      case 'amazon':
        u.searchParams.set('tag', id);
        break;
    }
    return u.toString();
  } catch {
    return url;
  }
}

export const affiliateLinkProps = {
  rel: 'sponsored nofollow noopener',
  target: '_blank',
};

export function trackClick(partner, productId, label) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', 'affiliate_click', {
    partner,
    product_id: productId,
    label: label || productId,
  });
}
