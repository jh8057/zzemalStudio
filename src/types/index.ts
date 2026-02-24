export interface NavLink {
  href: string;
  label: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Reservation {
  userName: string;
  phone: string;
  time: string;
  peopleNum: string;
  purpose?: string;
  etc?: string;
}

export interface PricingTier {
  label: string;
  price: number;
  priceFormatted: string;
  unit: string;
}
