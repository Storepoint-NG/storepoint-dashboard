export default function manifest() {
  return {
    short_name: "Storepoint",
    name: "Storepoint",
    icons: [
      {
        src: "/icons/stp-logo.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/stp-logo.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/stp-logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    start_url: "/login",
    display: "standalone",
    theme_color: "#9705AD",
    background_color: "#9705AD",
    related_applications: [
      {
        platform: "play",
        url: "https://play.google.com/store/apps/details?id=com.shopify.mobile&pcampaignid=web_share",
      },
    ],
  };
}
