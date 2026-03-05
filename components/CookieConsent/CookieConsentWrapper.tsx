"use client";

import React, { useEffect, useState } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import { PreferencesSheet } from "./PreferencesSheet";
import { useCookiePreferences } from "@/hooks/use-cookie-preferences";

interface CookieConsentWrapperProps {
  children: React.ReactNode;
}

const CookieConsentWrapper: React.FC<CookieConsentWrapperProps> = ({
  children,
}) => {
  const googleAnalyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID;
  const [showPreferences, setShowPreferences] = useState(false);
  const { preferences, updatePreferences, acceptAll, rejectAll } =
    useCookiePreferences();

  useEffect(() => {
    const consent = getCookieConsentValue();
    if (consent === "true" && preferences.analytics) {
      loadGoogleAnalytics();
    }
  }, [preferences.analytics]);

  const loadGoogleAnalytics = () => {
    if (!googleAnalyticsId || typeof window === "undefined") return;

    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
    document.head.appendChild(script);

    script.onload = () => {
      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(args);
      }
      gtag("js", new Date());
      gtag("config", googleAnalyticsId, {
        page_path: window.location.pathname,
      });
    };
  };

  const handleAccept = () => {
    acceptAll();
    if (preferences.analytics) {
      loadGoogleAnalytics();
    }
  };

  return (
    <>
      <CookieConsent
        enableDeclineButton
        onAccept={handleAccept}
        onDecline={rejectAll}
        style={{
          background: "rgba(255, 255, 255, 0.98)",
          color: "#2D2D2D",
          zIndex: 9999,
          borderTop: "1px solid rgba(91, 27, 141, 0.2)",
          backdropFilter: "blur(10px)",
          padding: "20px 16px",
          boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.1)",
        }}
        buttonStyle={{
          background: "linear-gradient(90deg, #5B1B8D 0%, #7B2CBF 100%)",
          color: "white",
          fontSize: "14px",
          borderRadius: "9999px",
          fontWeight: "600",
          padding: "10px 24px",
          border: "none",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
        declineButtonStyle={{
          color: "#6B6B6B",
          background: "rgba(0, 0, 0, 0.05)",
          fontSize: "14px",
          borderRadius: "9999px",
          fontWeight: "600",
          padding: "10px 24px",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
        buttonText="Accept All"
        declineButtonText="Reject All"
        containerClasses="cookie-consent-container"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="mb-1 text-sm font-semibold text-black md:text-base">
              🍪 We value your privacy
            </p>
            <p className="text-xs text-[#6B6B6B] md:text-sm">
              Mezzo Aid uses cookies to improve your experience and help us
              understand how entrepreneurs use our platform.
            </p>
          </div>
          <button
            onClick={() => setShowPreferences(true)}
            className="text-left text-sm cursor-pointer font-semibold text-[#5B1B8D] underline transition-colors duration-200 hover:text-[#7B2CBF] md:text-center"
          >
            Manage Preferences
          </button>
        </div>
      </CookieConsent>

      <PreferencesSheet
        open={showPreferences}
        onOpenChange={setShowPreferences}
        preferences={preferences}
        onUpdatePreferences={updatePreferences}
        onSave={() => {
          if (preferences.analytics) {
            loadGoogleAnalytics();
          }
          setShowPreferences(false);
        }}
      />
      {children}
    </>
  );
};

export default CookieConsentWrapper;
