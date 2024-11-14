"use client";

import { createI18nClient } from "next-international/client";

export const { useI18n, useScopedI18n, I18nProviderClient } = createI18nClient({
  en: () => import("@/app/i18n/locales/en.json"),
  zh: () => import("@/app/i18n/locales/zh.json"),
});