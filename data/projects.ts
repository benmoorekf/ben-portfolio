export type Project = {
    slug: string;
    title: string;
    summary: string;
    description: string;
    stack: string[];
    highlights: string[];
    link?: string;
    video?: string;
    coverImage: string;
    gallery: { src: string; alt: string }[];
  };
  
  export const projects: Project[] = [
    {
      slug: "green-gridiron",
      title: "Green Gridiron — Shopify Plus store built on Custom Theme",
      summary:
        "Performance improvements and custom feature development for a high-traffic Shopify storefront.",
      description:
        "Worked across theme architecture, custom Liquid sections, and frontend enhancements to improve UX, performance, and merchandising flexibility.",
      stack: ["Shopify", "Liquid", "JavaScript", "CRO"],
      highlights: [
        "Improved CVR by 11% YoY through site speed upgrades, JS refactoring, and much more",
        "Built custom merchandising components",
        "Optimized mobile experience for conversion",
      ],
      link: "https://www.greengridiron.com",   // ✅ Added
      coverImage: "/work/green-gridiron/GG-HP.png",
      gallery: [
        { src: "/work/green-gridiron/GG-HP.png", alt: "Green Gridiron homepage" },
        { src: "/work/green-gridiron/GG-PDP.png", alt: "Green Gridiron product page" },
        { src: "/work/green-gridiron/GG-CLP.png", alt: "Green Gridiron collection page" },
        { src: "/work/green-gridiron/GG-NFL.png", alt: "Green Gridiron NFL page" },
        { src: "/work/green-gridiron/GG-Builder-1.png", alt: "Green Gridiron builder step 1" },
        { src: "/work/green-gridiron/GG-Builder-2.png", alt: "Green Gridiron builder step 2" },
      ],
    },
    {
      slug: "kate-farms",
      title:
        "Kate Farms — Shopify/Contentful site built with Liquid/Nuxt.js/Vue.js/Tailwind",
      summary:
        "A Shopify/Contentful development initiative across a health-focused ecommerce brand.",
      description:
        "Led front-end improvements, collaborated with design and marketing, and ensured performance and accessibility standards across key site experiences.",
      stack: ["Shopify", "Nuxt", "Vue", "Tailwind", "Accessibility"],
      highlights: [
        "+10% increase in net web sales Yoy for 4+ years",
        "Site migration from WordPress to Contentful",
        "Leveraged AI for high converting API functionalities",
      ],
      link: "https://www.katefarms.com",   // ✅ Added
      coverImage: "/work/kate-farms/KF-HP-DT.png",
      video: "/work/kate-farms/katefarms-video.mp4",
      gallery: [
        { src: "/work/kate-farms/KF-HP.png", alt: "Kate Farms homepage" },
        { src: "/work/kate-farms/KF-SHOP-ALL1.webp", alt: "Kate Farms shop all" },
        { src: "/work/kate-farms/KF-Medical.png", alt: "Kate Farms medical page" },
        { src: "/work/kate-farms/KF-Account.png", alt: "Kate Farms account page" },
        { src: "/work/kate-farms/KF-OTPtoSUB.png", alt: "Kate Farms OTP to subscription" },
        { src: "/work/kate-farms/KF-PDP-MBL.png", alt: "Kate Farms PDP mobile" },
        { src: "/work/kate-farms/KF-PDP2.webp", alt: "Kate Farms PDP mobile" },
        { src: "/work/kate-farms/KF-COMM-PREF.png", alt: "Kate Farms communication preferences" },
      ],
    },
  ];
  
  export function getProject(slug: string) {
    return projects.find((p) => p.slug === slug);
  }