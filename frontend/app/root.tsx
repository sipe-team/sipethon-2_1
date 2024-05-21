import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useBearStore } from "./stores/useBearStore";
import { Button } from "./components/Button";

export function Layout({ children }: { children: React.ReactNode }) {
  const { bears, increase } = useBearStore();

  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <p>{bears}</p>
        <p>FRONTMAIN</p>
        <Button onClick={() => increase(1)}>INCREASE</Button>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
