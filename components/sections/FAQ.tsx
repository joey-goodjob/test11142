"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useI18n } from "@/hooks/use-translations";

export function FAQ() {
  const t = useI18n();

  const faqs = [
    {
      question: t('faq.items.0.question'),
      answer: t('faq.items.0.answer'),
    },
    {
      question: t('faq.items.1.question'),
      answer: t('faq.items.1.answer'),
    },
  ];

  return (
    <div className="bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-border">
          <h2 className="text-2xl font-bold leading-10 tracking-tight">
            {t('faq.title')}
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-border">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </dl>
        </div>
      </div>
    </div>
  );
}