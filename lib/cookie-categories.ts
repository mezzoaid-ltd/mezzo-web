export const cookieCategories = [
  {
    id: "essential",
    title: "Essential Cookies",
    description:
      "These cookies are necessary for the website to function properly and cannot be switched off. They enable core functionality like secure login, quest tracking, and expert booking.",
    required: true,
    cookies: [
      {
        name: "cookieConsent",
        purpose: "Stores your cookie consent preferences",
        duration: "1 year",
      },
      {
        name: "mezzo_cookie_preferences",
        purpose: "Stores your detailed cookie preferences for Mezzo Aid",
        duration: "1 year",
      },
      {
        name: "session_token",
        purpose: "Maintains your login session and user authentication",
        duration: "Session",
      },
      {
        name: "next-auth.session-token",
        purpose: "Next.js authentication session",
        duration: "30 days",
      },
    ],
  },
  {
    id: "analytics",
    title: "Analytics Cookies",
    description:
      "These cookies help us understand how entrepreneurs use our platform by collecting anonymous usage statistics. This helps us improve Mezzo Aid and create better resources.",
    required: false,
    cookies: [
      {
        name: "_ga",
        purpose: "Used by Google Analytics to distinguish unique users",
        duration: "2 years",
      },
      {
        name: "_gid",
        purpose:
          "Used by Google Analytics to distinguish users within 24 hours",
        duration: "24 hours",
      },
      {
        name: "_gat",
        purpose: "Used by Google Analytics to throttle request rate",
        duration: "1 minute",
      },
    ],
  },
  {
    id: "advertising",
    title: "Marketing Cookies",
    description:
      "These cookies track your browsing habits to show you relevant content about entrepreneurship resources and measure the effectiveness of our outreach campaigns.",
    required: false,
    cookies: [
      {
        name: "_fbp",
        purpose: "Used by Facebook to deliver targeted content",
        duration: "3 months",
      },
      {
        name: "google_ads",
        purpose: "Used to track campaign performance and conversions",
        duration: "90 days",
      },
    ],
  },
  {
    id: "personalization",
    title: "Personalization Cookies",
    description:
      "These cookies remember your preferences to provide a customized experience, such as your quest progress, saved experts, and dashboard settings.",
    required: false,
    cookies: [
      {
        name: "user_preferences",
        purpose: "Stores your site preferences including theme and language",
        duration: "6 months",
      },
      {
        name: "quest_progress",
        purpose: "Remembers your quest completion status",
        duration: "1 year",
      },
      {
        name: "saved_experts",
        purpose: "Stores your favorite experts for quick access",
        duration: "1 year",
      },
    ],
  },
];
