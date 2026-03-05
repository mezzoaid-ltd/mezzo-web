"use client";

import { useState, useEffect } from "react";

const COOKIE_PREFERENCES_KEY = "mezzo_cookie_preferences";

export type CookiePreferences = {
  essential: boolean;
  advertising: boolean;
  personalization: boolean;
  analytics: boolean;
};

const defaultPreferences: CookiePreferences = {
  essential: true,
  advertising: false,
  personalization: false,
  analytics: false,
};

export function useCookiePreferences() {
  const [preferences, setPreferences] =
    useState<CookiePreferences>(defaultPreferences);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = localStorage.getItem(COOKIE_PREFERENCES_KEY);
    if (stored) {
      try {
        setPreferences(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse stored cookie preferences", e);
      }
    }
    setInitialized(true);
  }, []);

  const updatePreferences = (newPreferences: Partial<CookiePreferences>) => {
    const updated = { ...preferences, ...newPreferences, essential: true };
    setPreferences(updated);
    if (typeof window !== "undefined") {
      localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(updated));
    }
  };

  const acceptAll = () =>
    updatePreferences({
      advertising: true,
      personalization: true,
      analytics: true,
    });

  const rejectAll = () =>
    updatePreferences({
      advertising: false,
      personalization: false,
      analytics: false,
    });

  return { preferences, updatePreferences, acceptAll, rejectAll, initialized };
}
