"use client";

import {
  Gamepad2,
  Shield,
  Zap,
  Trophy,
  Users,
  HeartHandshake,
} from "lucide-react";
import { useI18n } from "@/hooks/use-translations";

export function Features() {
  const t = useI18n();

  const features = [
    {
      name: t('features.items.0.title'),
      description: t('features.items.0.description'),
      icon: Zap,
    },
    {
      name: t('features.items.1.title'),
      description: t('features.items.1.description'),
      icon: Gamepad2,
    },
    {
      name: t('features.items.2.title'),
      description: t('features.items.2.description'),
      icon: Shield,
    },
    {
      name: "Competitive Gaming",
      description:
        "Challenge other players and climb the leaderboards in competitive modes.",
      icon: Trophy,
    },
    {
      name: "Community",
      description:
        "Join a vibrant community of gamers from around the world.",
      icon: Users,
    },
    {
      name: "24/7 Support",
      description:
        "Our dedicated support team is always here to help you.",
      icon: HeartHandshake,
    },
  ];

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            {t('features.title')}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need for the ultimate gaming experience
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We provide a comprehensive gaming platform with features designed to
            enhance your gaming experience.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <feature.icon
                    className="h-5 w-5 flex-none text-primary"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}