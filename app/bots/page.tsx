import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import botsManifest from '@/lib/bots-manifest.json';

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(0)} KB`;
  return `${(kb / 1024).toFixed(1)} MB`;
}

export const metadata = {
  title: 'Free Bots',
};

export default function BotsPage() {
  const bots = [...botsManifest].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <main className="flex flex-col bg-background min-h-dvh">
      <div className="flex-1 w-full max-w-6xl mx-auto px-3 py-6 sm:px-4 sm:py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-4"
        >
          <span className="text-base leading-none">←</span>
          <span>Back</span>
        </Link>

        <div className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">Free Bots</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {bots.length} free Deriv/DBot strategy files. Download an .xml file, then import it
            into{' '}
            <a
              href="https://app.deriv.com/bot"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground"
            >
              Deriv&apos;s Bot Builder
            </a>{' '}
            via Load &rarr; Local. These are community-shared strategies, not financial advice —
            test on a demo account first.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {bots.map((bot) => (
            <Card key={bot.file} className="flex flex-col">
              <CardContent className="flex flex-col flex-1 p-4 gap-3">
                <div className="flex-1">
                  <p className="text-sm font-medium leading-snug break-words">{bot.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{formatSize(bot.size)}</p>
                </div>
                <Button asChild size="sm" variant="outline" className="w-full">
                  <a href={`/bots/${encodeURIComponent(bot.file)}`} download>
                    Download
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
