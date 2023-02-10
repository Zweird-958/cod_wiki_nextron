import type { AppProps } from "next/app"
import Link from "next/link"
import { useRouter } from "next/router"
import "../styles/globals.css"

const NAV_ITEMS = {
  HOME: "/home",
  TREYARCH: "/studios/treyarch",
  "INFINITE WARD": "/studios/infiniteward",
  SLEEDGEHAMER: "/studios/sleedgehammer",
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <>
      <header className="bg-dark-blue sticky top-0 z-10 flex justify-between p-5 shadow-xl">
        <h1 className="font-bold">Zombies Wiki 🧟‍♂️</h1>
        <nav>
          <ul className="flex gap-6">
            <li>
              <button
                onClick={() => router.asPath !== "/home" && router.back()}
              >
                BACK
              </button>
            </li>
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
