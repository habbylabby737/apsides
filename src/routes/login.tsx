import { createFileRoute, Link } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  return (
    <main className="grid min-h-dvh place-items-center bg-bg px-6 text-fg">
      <div className="w-full max-w-sm rounded-xl bg-surface p-6 shadow-panel">
        <p className="font-display text-3xl tracking-[-0.03em]">Apsides</p>
        <h1 className="mt-4 text-lg font-medium">Sign in</h1>
        <p className="mt-1 text-sm text-muted">Save nothing — just a quieter way back in.</p>
        <div className="mt-6 space-y-2">
          {authEnabled ? (
            GROK_PROVIDERS.map((p) => (
              <Button
                key={p.providerId}
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => signIn(p.providerId, { callbackURL: "/" })}
              >
                Continue with {p.label}
              </Button>
            ))
          ) : (
            <p className="text-sm text-muted">Sign-in is disabled.</p>
          )}
        </div>
        <Button variant="ghost" className="mt-4 w-full" asChild>
          <Link to="/">Back to the field</Link>
        </Button>
      </div>
    </main>
  );
}
