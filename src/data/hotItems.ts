import type { HotItem } from "@/types/shoe";

const shopUrl = "https://www.etsy.com/shop/craftedbychrisllc";

export const hotItems: HotItem[] = [
  {
    slug: "ember-velocity",
    name: "Ember Velocity",
    setting: "Party",
    dropLabel: "Limited pre-order",
    price: "$189",
    image: "/images/shoe-ember.svg",
    ctaUrl: shopUrl,
  },
  {
    slug: "night-grid",
    name: "Night Grid",
    setting: "Fashion Event",
    dropLabel: "Almost sold out",
    price: "$205",
    image: "/images/shoe-noir.svg",
    ctaUrl: shopUrl,
  },
  {
    slug: "frost-pulse",
    name: "Frost Pulse",
    setting: "General Wear",
    dropLabel: "New hot item",
    price: "$175",
    image: "/images/shoe-frost.svg",
    ctaUrl: shopUrl,
  },
  {
    slug: "solar-circuit",
    name: "Solar Circuit",
    setting: "Fashion Event",
    dropLabel: "Pre-order opens this week",
    price: "$215",
    image: "/images/shoe-solar.svg",
    ctaUrl: shopUrl,
  },
  {
    slug: "neon-stitch",
    name: "Neon Stitch",
    setting: "Party",
    dropLabel: "Trending now",
    price: "$199",
    image: "/images/shoe-neon.svg",
    ctaUrl: shopUrl,
  },
  {
    slug: "city-crest",
    name: "City Crest",
    setting: "General Wear",
    dropLabel: "Pre-order available",
    price: "$169",
    image: "/images/shoe-crest.svg",
    ctaUrl: shopUrl,
  },
];
