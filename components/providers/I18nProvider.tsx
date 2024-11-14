"use client";

import { I18nProviderClient } from "@/hooks/use-translations";
import { ReactNode } from "react";

export function I18nProvider({
  locale,
  children,
}: {
  locale: string;
  children: ReactNode;
}) {
  return (
    <I18nProviderClient locale={locale} fallback={<div>Loading...</div>}>
      {children}
    </I18nProviderClient>
  );
}