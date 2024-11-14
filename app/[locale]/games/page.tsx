import { GameFrame } from "@/components/game/GameFrame";
import { locales } from "@/config/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const games = [
  {
    id: "game1",
    title: "Sample Game 1",
    description: "An exciting adventure game",
    src: "https://itch.io/embed-upload/8430623",
  },
  {
    id: "game2",
    title: "Sample Game 2",
    description: "A challenging puzzle game",
    src: "https://itch.io/embed-upload/8430624",
  },
];

export default function GamesPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Games Collection
          </h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            Choose from our selection of exciting games and start playing instantly
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {games.map((game) => (
            <div key={game.id} className="flex flex-col items-start">
              <GameFrame
                src={game.src}
                title={game.title}
                className="aspect-[16/9] w-full rounded-2xl bg-muted sm:aspect-[2/1] lg:aspect-[3/2]"
              />
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <h3 className="mt-3 text-lg font-semibold leading-6">
                    {game.title}
                  </h3>
                </div>
                <p className="mt-5 text-sm leading-6 text-muted-foreground">
                  {game.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}