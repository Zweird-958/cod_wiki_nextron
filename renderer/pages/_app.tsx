import type { AppProps } from "next/app"
import Link from "next/link"
import "../styles/globals.css"

const NAV_ITEMS = {
  HOME: "/home",
  TREYARCH: "/studios/treyarch",
  "INFINITE WARD": "/studios/infiniteward",
  SLEEDGEHAMER: "/studios/sleedgehammer",
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header className="bg-dark-blue sticky top-0 flex justify-between p-5 shadow-xl">
        <h1 className="font-bold">Zombies Wiki 🧟‍♂️</h1>
        <nav>
          <ul className="flex gap-6">
            {Object.entries(NAV_ITEMS).map(([name, route]) => (
              <li key={name} className="hover:underline">
                <Link href={route}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
