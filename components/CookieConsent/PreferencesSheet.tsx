"use client";

import { useState } from "react";
import { cookieCategories } from "@/lib/cookie-categories";
import type { CookiePreferences } from "@/hooks/use-cookie-preferences";
import { CookieDetails } from "./CookieDetails";

interface PreferencesSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  preferences: CookiePreferences;
  onUpdatePreferences: (preferences: Partial<CookiePreferences>) => void;
  onSave: () => void;
}

export function PreferencesSheet({
  open,
  onOpenChange,
  preferences,
  onUpdatePreferences,
  onSave,
}: PreferencesSheetProps) {
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setOpenCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId],
    );
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-99999 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />

      {/* Sheet */}
      <div className="dark:bg-blacksection border-stroke dark:border-strokedark absolute top-0 right-0 h-full w-full overflow-y-auto border-l bg-white shadow-xl sm:max-w-lg">
        <div className="p-6">
          {/* Header */}
          <div className="border-stroke dark:border-strokedark mb-6 border-b pb-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-black dark:text-white">
                Cookie Preferences
              </h2>
              <button
                onClick={() => onOpenChange(false)}
                className="hover:bg-stroke/50 dark:hover:bg-strokedark flex h-8 w-8 items-center justify-center rounded-md text-[#6B6B6B] transition-colors hover:text-black dark:hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm leading-relaxed text-[#6B6B6B] dark:text-[#c8cbd0]">
                Manage your cookie preferences to control how we collect and use
                data on Mezzo Aid.
              </p>
              <a
                href="/privacy"
                className="inline-flex items-center text-sm text-[#5B1B8D] transition-colors hover:text-[#7B2CBF] hover:underline"
              >
                View Privacy Policy →
              </a>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              {cookieCategories.map((category) => (
                <div
                  key={category.id}
                  className="border-stroke dark:border-strokedark space-y-4 rounded-lg border bg-white p-4 transition-all duration-300 hover:border-[#5B1B8D]/30 dark:bg-black/20"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2 font-semibold text-black dark:text-white">
                        {category.title}
                        {category.required && (
                          <span className="rounded-full border border-[#5B1B8D]/30 bg-[#E6D5F0] px-2 py-0.5 text-xs text-[#5B1B8D]">
                            Required
                          </span>
                        )}
                      </div>
                      <p className="text-sm leading-relaxed text-[#6B6B6B] dark:text-[#c8cbd0]">
                        {category.description}
                      </p>
                    </div>

                    {/* Toggle Switch */}
                    <button
                      onClick={() =>
                        !category.required &&
                        onUpdatePreferences({
                          [category.id]:
                            !preferences[
                              category.id as keyof CookiePreferences
                            ],
                        })
                      }
                      disabled={category.required}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        preferences[category.id as keyof CookiePreferences]
                          ? "bg-[#5B1B8D]"
                          : "bg-stroke dark:bg-strokedark"
                      } ${category.required ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          preferences[category.id as keyof CookiePreferences]
                            ? "translate-x-6"
                            : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>

                  {/* View Details */}
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="flex items-center gap-2 text-sm font-medium text-[#5B1B8D] transition-colors hover:text-[#7B2CBF]"
                  >
                    <svg
                      className={`h-4 w-4 transition-transform duration-200 ${
                        openCategories.includes(category.id) ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    View Cookie Details
                  </button>

                  {/* Cookie Details */}
                  {openCategories.includes(category.id) && (
                    <div className="mt-3">
                      <CookieDetails cookies={category.cookies} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="border-stroke dark:border-strokedark flex gap-3 border-t pt-4">
              <button
                onClick={() => {
                  onSave();
                  onOpenChange(false);
                }}
                className="flex-1 rounded-full bg-[#5B1B8D] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#7B2CBF]"
              >
                Save Preferences
              </button>
              <button
                onClick={() => onOpenChange(false)}
                className="border-stroke dark:border-strokedark hover:bg-stroke/50 dark:hover:bg-strokedark rounded-full border px-6 py-3 text-[#6B6B6B] transition-colors hover:text-black dark:text-[#c8cbd0] dark:hover:text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
