export type MenuItem = {
  name: string;
  description: string;
  price: string;
  tag: string;
};

export type DashboardMetric = {
  label: string;
  value: string;
  delta: string;
};

export type Order = {
  id: string;
  customer: string;
  table: string;
  items: string;
  status: "Cooking" | "Served" | "Billing";
  amount: string;
};

export const menuItems: MenuItem[] = [
  {
    name: "Malhar Signature Dosa",
    description: "Crisp ghee roast, potato masala, coconut foam, tomato gunpowder.",
    price: "$10.90",
    tag: "Chef Special",
  },
  {
    name: "Mysore Fire Fold",
    description: "Spicy red chutney layer, caramel onions, podi crumble, mint chutney.",
    price: "$9.20",
    tag: "Spicy",
  },
  {
    name: "Paneer Pepper Melt",
    description: "Pepper-paneer filling, cheddar lace, curry leaf drizzle.",
    price: "$11.30",
    tag: "New",
  },
  {
    name: "Ragi Garden Crepe",
    description: "Millet batter, sauteed greens, cashew chutney, roasted seeds.",
    price: "$10.10",
    tag: "Healthy",
  },
];

export const testimonials = [
  {
    name: "Priya K",
    text: "The most balanced dosa batter I have tasted in years. Crisp outside, soft center.",
  },
  {
    name: "Ryan T",
    text: "Fast service and beautifully plated food. The podi ghee dosa is addictive.",
  },
  {
    name: "Anita S",
    text: "Great for family dinners. Every chutney had a distinct, fresh flavor profile.",
  },
];

export const dashboardMetrics: DashboardMetric[] = [
  { label: "Daily Orders", value: "184", delta: "+8.4%" },
  { label: "Table Turnover", value: "1h 06m", delta: "-6 min" },
  { label: "Kitchen SLA", value: "92%", delta: "+3.1%" },
  { label: "Revenue Today", value: "$4,780", delta: "+11.2%" },
];

export const orders: Order[] = [
  {
    id: "ORD-4872",
    customer: "Amelia",
    table: "T12",
    items: "2x Malhar Signature, 1x Filter Coffee",
    status: "Cooking",
    amount: "$34.10",
  },
  {
    id: "ORD-4871",
    customer: "Liam",
    table: "T05",
    items: "1x Mysore Fire Fold, 1x Medu Vada",
    status: "Served",
    amount: "$19.40",
  },
  {
    id: "ORD-4870",
    customer: "Noah",
    table: "T03",
    items: "3x Plain Dosa, 2x Sweet Lassi",
    status: "Billing",
    amount: "$42.80",
  },
  {
    id: "ORD-4869",
    customer: "Sophia",
    table: "T09",
    items: "1x Paneer Pepper Melt, 1x Rasam",
    status: "Served",
    amount: "$21.60",
  },
];

export const dashboardNav = [
  { href: "/dashboard", label: "Overview", icon: "◎" },
  { href: "/dashboard/orders", label: "Orders", icon: "◉" },
  { href: "/dashboard/menu", label: "Menu", icon: "◇" },
  { href: "/dashboard/customers", label: "Customers", icon: "◌" },
  { href: "/dashboard/analytics", label: "Analytics", icon: "▣" },
];

export const topHighlights = [
  { title: "Stone-ground batter", text: "Fermented in-house daily for flavor depth." },
  { title: "Live chutney bar", text: "Six rotating chutneys with seasonal ingredients." },
  { title: "Open tawa kitchen", text: "Watch each dosa plated in real time." },
];
