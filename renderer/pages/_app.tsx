import { ipcRenderer } from "electron"
import type { AppProps } from "next/app"
import Link from "next/link"
import { useRouter } from "next/router"
import "../styles/globals.css"
const ipc = ipcRenderer

const NAV_ITEMS = {
  HOME: "/home",
  TREYARCH: "/studios/treyarch",
  "INFINITE WARD": "/studios/infiniteward",
  SLEEDGEHAMER: "/studios/sleedgehammer",
}

const closeButton = () => {
  ipc.send("closeApp")
}

const minimizeButton = () => {
  ipc.send("minimizeApp")
}

const maximizeButton = () => {
  ipc.send("maximizeApp")
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <>
      <header className="sticky top-0 z-10 shadow-xl">
        <div className="rounded-t bg-blue-900">
          <h1>BAR</h1>
          <button onClick={closeButton}>CLOSE</button>
          <button onClick={minimizeButton}>Minimize</button>
          <button onClick={maximizeButton}>Max</button>
        </div>
        <div className="bg-dark-blue flex justify-between p-5 ">
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
        </div>
      </header>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
